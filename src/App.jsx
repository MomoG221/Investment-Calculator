
import Header from './components/Header'

import UserInput from './components/UserInput'

import Results from './components/Results'

import {useState} from 'react'  

function App() {

  const [userInput,setUserInput] = useState({

    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10

})


function handleChange(inputIdentifier, newValue){
  setUserInput(prevUserInput => {

      return {

          ...prevUserInput,
          [inputIdentifier]: +newValue

      }
  }
  );
}

const inputIsValid = userInput.initialInvestment > 0 && userInput.annualInvestment > 0 && userInput.expectedReturn > 0 && userInput.duration > 0;
  
  return (
   
   <>
   
   <Header />
   <UserInput userInput={userInput} onChange={handleChange}/>
  
  {!inputIsValid && <p class="center">Please enter valid input</p>}

  { inputIsValid && <Results input={userInput}/>}
   
   
   </>



  )
}

export default App
