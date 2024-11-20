import { Button as ButtonBts5 } from "react-bootstrap";

interface Props {
  text: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

const Button = ({ text, type, className = "", disabled = false }: Props) => {
  return (
    <ButtonBts5
      className={`custom-btn ${className}`}
      type={type}
      disabled={disabled}
    >
      {text}
    </ButtonBts5>
  );
};

export default Button;
