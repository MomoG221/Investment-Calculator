# Investment Calculator

## Overview

This project is a web-based Investment Calculator that allows users to input their investment details and calculate the future value of their investment. The application is built using React, demonstrating the use of functional components and React hooks for state management. It features dynamic input handling, validation of input data, and a results display based on user input.

## Features

- **Dynamic Input Handling**: The application updates the investment details in real-time as users enter their values.
- **Input Validation**: Ensures that all input fields are filled with valid numbers before displaying the results.
- **Results Display**: Calculates and displays the future value of the investment based on the input data.
- **User-Friendly Interface**: Simple and intuitive user interface for easy interaction.

## How to Run

1. Clone the repository to your local machine.
   ```bash
   git clone https://github.com/your-username/investment-calculator.git
   cd investment-calculator
   ```
2. Navigate to the project directory.
3. Run `npm i` to install the required dependencies.
   ```bash
   npm install
   ```
4. Run `npm run dev` to start the development server. The application will be available at `http://localhost:5173`.
   ```bash
   npm start
   ```

## Technologies Used

- React.js
- HTML
- CSS

## Components

The project is composed of the following main components:

- **App**: The root component that manages the state of the user input and handles input validation.
- **Header**: A simple header component.
- **UserInput**: A form component where users enter their investment details.
- **Results**: A component that displays the calculated results based on the user input.

## Project Structure

```
investment-calculator/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── UserInput.js
│   │   └── Results.js
│   │
│   ├── App.js
│   ├── index.js
│   └── ...
│
├── .gitignore
├── package.json
├── README.md
└── ...
```

- **public/**: Contains the HTML file and other static assets.
- **src/**: Contains the React components and main entry files.
- **components/**: Contains the individual component files.
- **App.js**: The main component that ties everything together.
- **index.js**: The entry point for the React application.
