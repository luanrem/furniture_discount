import {
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { TiDeleteOutline } from "react-icons/ti";

export default function Discount() {
  return (
    <>
      <Flex justifyContent="center" alignItems="center">
        <FormLabel margin="0" marginRight="2" flexShrink="0" htmlFor="discount">
          Desc. 1
        </FormLabel>
        <FormControl>
          <NumberInput defaultValue={15} max={30} clampValueOnBlur={false}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <IconButton
          variant="link"
          colorScheme="gray.800"
          aria-label="Call Sage"
          fontSize="20px"
          icon={<TiDeleteOutline size="2rem" />}
        />
      </Flex>
    </>
  );
}
