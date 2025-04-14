import { HTMLAttributes, InputHTMLAttributes } from "react";
import { Box, Container } from "./styles";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean
  containerProps?: HTMLAttributes<HTMLDivElement>
}

export function TextField({ isOptional = false, containerProps, ...props }: TextFieldProps) {
  return (
    <Box {...containerProps}>
      <Container>
        <input className={isOptional ? "optional" : undefined} type="text" {...props} />
        {isOptional && <span>Opcional</span>}
      </Container>
    </Box>
  )
}