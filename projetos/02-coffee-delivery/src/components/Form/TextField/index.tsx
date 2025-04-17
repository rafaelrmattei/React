import { HTMLAttributes, InputHTMLAttributes } from "react";
import { Box, Container, Error } from "./styles";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean;
  containerProps?: HTMLAttributes<HTMLDivElement>;
  error?: string;
}

export function TextField({
  isOptional = false,
  containerProps,
  error,
  ...props
}: TextFieldProps) {
  return (
    <Box {...containerProps}>
      <Container>
        <input
          className={isOptional ? "optional" : undefined}
          type="text"
          {...props}
        />
        {isOptional && <span>Opcional</span>}
      </Container>
      <Error>{error}</Error>
    </Box>
  );
}
