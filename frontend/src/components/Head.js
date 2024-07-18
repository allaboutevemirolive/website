import React from 'react';

function Head() {
  return (
    <> 
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>vCard - Personal Portfolio</title>
      
      {/* Favicon - Note the use of curly braces for dynamic values */}
      <link 
        rel="shortcut icon" 
        href="../assets/images/logo.ico" // Update path as needed
        type="image/x-icon" 
      />

      {/* Custom CSS - Update path as needed */}
      <link rel="stylesheet" href="../assets/css/style.css" />

      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
    </>
  );
}

export default Head;

