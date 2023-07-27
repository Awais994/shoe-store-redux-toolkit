import * as React from "react";
import { Box, Stepper, Step, StepButton } from "@mui/material";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import AddressForm from "./forms/AddressForm";
import Order from "./forms/Order";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const steps = ["Personal Information", "Address Information", "Place Order"];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const navigate = useNavigate();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  //   const handleStep = (step) => () => {
  //     setActiveStep(step);
  //   };

  //   const handleComplete = () => {
  //     const newCompleted = completed;
  //     newCompleted[activeStep] = true;
  //     setCompleted(newCompleted);

  //   };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
    navigate("/");
  };
  const getStepContent = (stepIndex, handleNext, handleBack) => {
    switch (stepIndex) {
      case 0:
        return (
          <PersonalInfoForm
            props={{
              handleNext: handleNext,
              handleBack: handleBack,
              step: stepIndex,
            }}
          />
        );
      case 1:
        return (
          <AddressForm
            props={{
              handleNext: handleNext,
              handleBack: handleBack,
              step: stepIndex,
            }}
          />
        );
      case 2:
        return (
          <Order
            props={{
              handleNext: handleNext,
              handleBack: handleBack,
              step: stepIndex,
              handleReset: handleReset,
            }}
          />
        );

      default:
        return "Unknown Steps";
    }
  };

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit">{label}</StepButton>
          </Step>
        ))}
      </Stepper>
      {getStepContent(activeStep, handleNext, handleBack)}
    </Box>
  );
}
