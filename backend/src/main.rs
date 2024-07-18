use axum::{
    extract::Json as ExtractJson,
    response::Json,
    routing::{get, post},
    Router,
};
use serde::{Deserialize, Serialize};
use std::net::SocketAddr;

#[tokio::main]
async fn main() {
    // build our application with some routes
    let app = Router::new()
        .route("/", get(root))
        .route("/api/data", post(handle_data));

    // run it with hyper on localhost:3000
    let addr = SocketAddr::from(([127, 0, 0, 1], 3001));
    println!("Listening on {}", addr);
    hyper::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}

async fn root() -> &'static str {
    "Hello, World!"
}

#[derive(Deserialize)]
struct InputData {
    message: String,
}

#[derive(Serialize)]
struct OutputData {
    response: String,
}

async fn handle_data(ExtractJson(payload): ExtractJson<InputData>) -> Json<OutputData> {
    let response = OutputData {
        response: format!("Received: {}", payload.message),
    };
    Json(response)
}
