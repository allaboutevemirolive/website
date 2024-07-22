use axum::{extract::State, routing::post, Json, Router};
use dotenv::dotenv;
use serde::{Deserialize, Serialize};
use std::env;
use std::sync::Arc;
use tokio_postgres::NoTls;
use tower_http::cors::{Any, CorsLayer};
use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};

#[derive(Deserialize, Debug)]
struct ContactInput {
    name: String,
    email: String,
    comment: String,
}

#[derive(Serialize)]
struct ApiResponse {
    message: String,
}

#[tokio::main]
async fn main() {
    dotenv().ok();

    tracing_subscriber::registry()
        .with(
            tracing_subscriber::EnvFilter::try_from_default_env()
                .unwrap_or_else(|_| "example_form=debug".into()),
        )
        .with(tracing_subscriber::fmt::layer())
        .init();

    let db_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    let (db_client, connection) = tokio_postgres::connect(&db_url, NoTls)
        .await
        .expect("Failed to connect to database");

    let db_client = Arc::new(db_client);

    tokio::spawn(async move {
        if let Err(e) = connection.await {
            eprintln!("database connection error: {}", e);
        }
    });

    let cors = CorsLayer::new()
        .allow_origin(Any)
        .allow_methods(Any)
        .allow_headers(Any);

    let app = Router::new()
        .route("/api/contact", post(handle_contact))
        .layer(cors)
        .with_state(Arc::clone(&db_client));

    let listener = tokio::net::TcpListener::bind("127.0.0.1:3001")
        .await
        .unwrap();
    tracing::debug!("listening on {}", listener.local_addr().unwrap());
    axum::serve(listener, app).await.unwrap();
}

async fn handle_contact(
    State(db_client): State<Arc<tokio_postgres::Client>>,
    Json(input): Json<ContactInput>,
) -> Json<ApiResponse> {
    match db_client
        .execute(
            "INSERT INTO messages (name, email, comment) VALUES ($1, $2, $3)",
            &[&input.name, &input.email, &input.comment],
        )
        .await
    {
        Ok(_) => Json(ApiResponse {
            message: "Message stored successfully".to_string(),
        }),
        Err(e) => {
            eprintln!("Failed to save message to database: {}", e);
            Json(ApiResponse {
                message: "Failed to store message".to_string(),
            })
        }
    }
}
