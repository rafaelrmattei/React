import { InputHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode
}

export function Radio({children, ...props}: RadioProps) {
  return (
    <Container>
      <input type="radio" {...props} />
      <label htmlFor={props.id}>
        {children}
      </label>
    </Container>
  )
}