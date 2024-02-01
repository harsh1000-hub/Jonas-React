import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
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

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>

            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
