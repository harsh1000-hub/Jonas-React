import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

// Steps component
function Steps() {
  // step 1:- create state variable
  const [step, setStep] = useState(1);

  // another state for close the whole app component
  const [isOpen, setIsOpen] = useState(true);

  // handlePrevious function
  function handlePrevious() {
    // if (step > 1) setStep(step - 1); // Step 2:- updating the state variable
    // update state variable using callback functionality
    if (step > 1) setStep((s) => s - 1);
  }

  // handleNext function
  function handleNext() {
    // if (step < 3) setStep(step + 1); // Step 2:- updating the state variable
    if (step < 3) setStep((s) => s + 1);
  }

  // handleClose function
  function handleClose() {
    isOpen === true
      ? setIsOpen((item) => (item = false))
      : setIsOpen((item) => (item = true));
  }

  return (
    <>
      <button className="close" onClick={handleClose}>
        ✖️
      </button>
      {/* apply conditional rendering below */}
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            {/* Here in Button component we uses the concept of children props to give emoji to specific Button */}
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handlePrevious}
              text="Previous"
            >
              <span>👈 Previous</span> {/* here we use children props */}
            </Button>
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handleNext}
              text="Next"
            >
              <span>Next 👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
// StepMessage component
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}:</h3>
      {children}
    </div>
  );
}

// Button Component
function Button({ bgColor, textColor, onClick, text, children }) {
  // pass children props that is {children}
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}{" "}
      {/* here you children props with predefined word of react that is {children} */}
    </button>
  );
}
