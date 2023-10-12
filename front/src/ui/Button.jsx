import styled from "@emotion/styled";
function sizeStyle(size = "default") {
  if (size === "default") {
    return "padding: 8px 16px; border-radius: 16px;";
  }
  if (size === "small") {
    return "padding: 4px 8px; border-radius: 8px;";
  }
  if (size === "large") {
    return "padding: 16px 24px; border-radius: 16px;";
  }
}

function typeStyle(type = "default") {
  if (type === "primary") {
    return `
    background-color: #F48FB1; 
    color: white;
    &:hover{
      background-color: #BF5F82 ;
    }
    cursor: pointer;
  `;
  }
  if (type === "secondary") {
    return `
      background-color: white; 
      border: 1px solid #F48FB1; 
      color: #616161;
      &:hover{
        background-color: #F48FB115 ;
        border-color: #BF5F82;
      }
      cursor: pointer;
    `;
  }
  if (type === "disable") {
    return `
      background-color: #61616115;
      color: #8E8E8E;
    `;
  }
  if (type === "ghost") {
    return `
      background-color: #FFFFFF00;
      color: #616161;
      &:hover{
        background-color: #F48FB115;
        color: #373737;
      }
      cursor: pointer;
    `;
  }
}
const StyledButton = styled.button`
  display: flex;
  ${({ size }) => sizeStyle(size)}
  gap: 8px;
  border-radius: 16px;
  border: none;
  ${({ type }) => typeStyle(type)}

  font-family: "Inter";
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 1.25px;
  font-weight: 400;
  align-items: center;
  width: max-content;
`;

function Button({ children, icon, ...props }) {
  console.log(props);
  return (
    <StyledButton {...props}>
      {icon}
      {children}
    </StyledButton>
  );
}

export default Button;
