import { Button } from '@mui/material';
import styled from 'styled-components';

const LinkButton = styled(Button)`
  background-color: white;
  color: black; // Updated for better visibility
  padding: 10px; // Equal padding for top, bottom, left, and right
  border: 1px solid black;
  border-radius: 50%; // Fully rounded corners
  cursor: pointer;
  width: 100px; // Width of the button
  height: 100px; // Height of the button, should be the same as width
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #f0f0f0; // Example hover effect
  }
`;

export default LinkButton;
