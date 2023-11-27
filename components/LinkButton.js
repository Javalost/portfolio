import styled from 'styled-components';

const LinkButton = styled.button`
  background-color: white;
  color: #fff;
  padding: 10px; // Equal padding for top, bottom, left, and right
  border: 1px solid black;
  border-radius: 50%; // Fully rounded corners
  cursor: pointer;
  width: 100px; // Width of the button
  height: 100px; // Height of the button, should be the same as width
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LinkButton;
