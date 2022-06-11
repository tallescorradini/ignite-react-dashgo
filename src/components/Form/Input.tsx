import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps,
} from "@chakra-ui/react";

interface Props extends InputProps {
  label?: string;
}

export function Input({ id, label, ...rest }: Props) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={id}>{label}</FormLabel>}

      <ChakraInput
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{ bgColor: "gray.900" }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
}
