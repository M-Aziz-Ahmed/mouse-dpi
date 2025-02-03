'use client'
import { useState } from "react";

export default function Home() {
const steps = [
  {step:'step-1' ,title:'Click On The Chech Button To Check Your Mouse DPI'},
  {step:'step-2' ,title:'Move Your Mouse From All The Way Left To the Right and try to keep it your cursor on the straight line On Your Screen And Notice How Much It Moved (in Inches)'},
  {step:'step-3' ,title:'How Many Inches Your Mouse Moved ?'},
]
const [currentStep, setCurrentStep] = useState('step-1')
const [dpi, setDpi] = useState('')
const [inch, setInch] = useState(0)

  return (
    <>
    {currentStep === steps[0].step &&(
      <>
      <div className="container-fluid">
        <div className="h1 text-light text-center my-4">{steps[0].title}</div>
        <div className="d-flex justify-content-center my-5">
          <div className="btn btn-outline-light" onClick={()=>setCurrentStep(steps[1].step)}>Check</div>
        </div>
        
      </div>
      </>
    )}
    {currentStep === steps[1].step &&(
      <>
      <div className="container-fluid">
        <div className="h1 text-light text-center my-4">{steps[1].title}</div>
        <hr className="bg-light text-light p-2 my-5" />
        <div className="d-flex justify-content-center my-5 ">
          <div className="btn btn-outline-light" onClick={()=>setCurrentStep(steps[2].step)}>Check</div>
        </div>
        
      </div>
      
      </>
    )}
    {currentStep === steps[2].step &&(
      <>
      <div className="container-fluid">
        <div className="h1 text-light text-center my-4">{steps[2].title}</div>
        <div className="d-flex justify-content-center flex-column my-5 gap-5">
          {dpi?(
            <>
            <div className="text-light">You Mouse DPI Is {dpi}</div>
            </>
          ):(
            <>
            <input type="text"
            className="form-control w-50 mx-auto"
            placeholder="1-5 (inches)"
            value={inch}
            onChange={(e)=>setInch(e.target.value)}
            />

          <div className="btn btn-outline-light w-25 mx-auto" onClick={()=>setDpi(1920/inch)}>Find My DPI</div>
          </>
          )}
        </div>
        
      </div>
      
      </>
    )}

    
    </>
  );
}
