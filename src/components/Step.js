
import { Container, Box, Button, TextField, Typography } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import React from 'react'

function Step({ step, formData, handleInputChange, nextStep, prevStep, handleSubmit }) {
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <Box id='step1'>
            <Typography variant="h5" gutterBottom>
              Step 1: User Information
            </Typography>
            <TextField
              fullWidth
              margin="normal"
              label="First Name"
              id="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Last Name"
              id="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
            />
          </Box>
        );
      case 2:
        return (
          <Box id='step2'>
            <Typography variant="h5" gutterBottom>
              Step 2: Car Information
            </Typography>
            <TextField
              fullWidth
              margin="normal"
              label="Car Model"
              id="model"
              value={formData.model}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Car Price"
              id="car_price"
              value={formData.car_price}
              onChange={handleInputChange}
            />
          </Box>
        );
      case 3:
        return (
          <Box id='step3'>
            <Typography variant="h5" gutterBottom>
              Step 3: Payment Information
            </Typography>
            <TextField
              fullWidth
              margin="normal"
              label="Card Information"
              id="card_info"
              value={formData.card_info}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Expiry Date"
              id="expiry_date"
              value={formData.expiry_date}
              onChange={handleInputChange}
            />
          </Box>
        );
      default:
        return <Typography variant="h5">Unknown Step</Typography>;
    }
  };

  return (
    <Box mt={2}>
      {renderStepContent()}
      <Box mt={2}>
        {step > 1 && (
          <Button variant="contained" color="primary" onClick={prevStep} sx={{ mr: 2 }}  style={{ marginRight: '8px' }}>
            Previous
          </Button>
        )}
        {step < 3 ? (
          <Button variant="contained" color="primary" onClick={nextStep}>
            Next
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        )}
      </Box>
    </Box>
  );
}
export default Step;