import Header from './components/Header' // Import the Header component
import UserInput from './components/UserInput' // Import the UserInput component
import Results from './components/Results' // Import the Results component
import { useState } from 'react' // Import the useState hook from React

function App() {
  // Initialize state for user input with default values
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  // Function to handle changes in user input
  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput, // Spread previous input values
        [inputIdentifier]: +newValue // Update the specific input with the new value
      }
    });
  }

  // Check if all input values are valid (greater than 0)
  const inputIsValid = userInput.initialInvestment > 0 && userInput.annualInvestment > 0 && userInput.expectedReturn > 0 && userInput.duration > 0;

  return (
    <>
      <Header /> {/* Render the Header component */}
      <UserInput userInput={userInput} onChange={handleChange} /> {/* Render the UserInput component and pass props */}

      {!inputIsValid && <p className="center">Please enter valid input</p>} {/* Show a message if the input is invalid */}

      {inputIsValid && <Results input={userInput} />} {/* Render the Results component if input is valid */}
    </>
  )
}

export default App // Export the App component as the default export
