import React from 'react';

import { Button } from '@mui/material';

interface CustomButtonProps {
  children: React.ReactNode;
}
const CustomButton = ({ children }: CustomButtonProps) => {
  return <Button variant="contained">{children}</Button>;
};

export default CustomButton;
