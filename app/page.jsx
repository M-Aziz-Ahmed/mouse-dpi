'use client'
import { useState } from "react";

export default function Home() {
  const steps = [
    { id: "step-1", title: "Click the button below to check your mouse DPI" },
    { id: "step-2", title: "Move your mouse from left to right along a straight line and measure the distance (in inches)." },
    { id: "step-3", title: "Enter the distance (in inches) your mouse moved:" },
  ];

  const [currentStep, setCurrentStep] = useState(steps[0].id);
  const [dpi, setDpi] = useState(null);
  const [inch, setInch] = useState("");

  const handleDpiCalculation = () => {
    const inches = parseFloat(inch);
    if (inches > 0) {
      setDpi((1920 / inches).toFixed(2));
    } else {
      alert("Please enter a valid distance greater than zero.");
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-light">
      {steps.map((step, index) =>
        currentStep === step.id ? (
          <div key={index} className="text-center">
            <h1 className="mb-4">{step.title}</h1>
            {step.id === "step-1" && (
              <button className="btn btn-primary px-4 py-2" onClick={() => setCurrentStep(steps[1].id)}>
                Start
              </button>
            )}
            {step.id === "step-2" && (
              <>
              <hr  className="text-light my-5 p-3 bg-light"/>
              <button className="btn btn-primary px-4 py-2" onClick={() => setCurrentStep(steps[2].id)}>
                Next
              </button>
              </>
            )}
            {step.id === "step-3" && (
              <div className="d-flex flex-column align-items-center gap-3">
                {dpi ? (
                  <h2>Your Mouse DPI is: <span className="text-warning">{dpi}</span></h2>
                ) : (
                  <>
                    <input
                      type="number"
                      className="form-control w-50 text-center"
                      placeholder="Enter distance in inches"
                      value={inch}
                      onChange={(e) => setInch(e.target.value)}
                    />
                    <button className="btn btn-success px-4 py-2" onClick={handleDpiCalculation}>
                      Calculate DPI
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        ) : null
      )}
    </div>
  );
}
