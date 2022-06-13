import {
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
import { MouseEventHandler } from "react";
import { TiDeleteOutline } from "react-icons/ti";

interface discountProps {
  id: number;
  value: number;
  delete: (data: number) => void;
  increaseStepper: (data: number) => void;
  decreaseStepper: (data: number) => void;
}

export default function Discount(prop: discountProps) {
  const handleOnClick = () => {
    console.log("handleOnClick");
    prop.delete(prop.id);
  };

  const increaseStepperInComponent = () => {
    prop.increaseStepper(prop.id);
    console.log("increase");
  };
  const decreaseStepperInComponent = () => {
    console.log("decrease");
    prop.decreaseStepper(prop.id);
  };

  return (
    <>
      <Flex justifyContent="center" alignItems="center">
        <FormLabel margin="0" marginRight="2" flexShrink="0" htmlFor="discount">
          Desc. {prop.id}
        </FormLabel>
        <FormControl>
          <NumberInput
            defaultValue={15}
            max={30}
            clampValueOnBlur={false}
            value={prop.value}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper onClick={increaseStepperInComponent} />
              <NumberDecrementStepper onClick={decreaseStepperInComponent} />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <IconButton
          onClick={handleOnClick}
          id={String(prop.id)}
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
