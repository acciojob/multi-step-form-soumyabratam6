
import React, { useState } from "react";
import { Container, Box, Button, TextField, Typography } from '@material-ui/core';
import  Step from "./Step";
const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    model: '',
    car_price: '',
    card_info: '',
    expiry_date: ''
  });
  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  const handleSubmit = () => {
    console.log('Form Submitted:', formData);
    // Add form submission logic here
  }
  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Step
          step={currentStep}
          formData={formData}
          handleInputChange={handleInputChange}
          nextStep={nextStep}
          prevStep={prevStep}
          handleSubmit={handleSubmit}
        />
      </Box>
    </Container>
  )
}

export default App
