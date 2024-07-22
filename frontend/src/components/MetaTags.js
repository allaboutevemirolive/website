import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTags = () => {
    return (
        <Helmet>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>allaboutevemirolive</title>
            <link rel="shortcut icon" href="./assets/images/logo.ico" type="image/x-icon" />
            <link rel="stylesheet" href="./assets/css/style.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
                rel="stylesheet"
            />
        </Helmet>
    );
};

export default MetaTags;
