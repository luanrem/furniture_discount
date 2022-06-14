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
  changeValue: (id: number, value: number) => void;
}

export default function Discount(prop: discountProps) {
  const handleOnClick = () => {
    prop.delete(prop.id);
  };

  const increaseStepperInComponent = () => {
    prop.increaseStepper(prop.id);
  };
  const decreaseStepperInComponent = () => {
    prop.decreaseStepper(prop.id);
  };
  const changeValueInComponent = (data: string) => {
    prop.changeValue(prop.id, Number(data));
  };
  const formatPerCent = (val: number) => val + ` %`;
  return (
    <>
      <Flex justifyContent="center" alignItems="center">
        <FormLabel margin="0" marginRight="2" flexShrink="0" htmlFor="discount">
          Desc. {prop.id}
        </FormLabel>
        <FormControl>
          <NumberInput
            onChange={(data) => changeValueInComponent(data)}
            value={formatPerCent(prop.value)}
            precision={2}
            step={0.2}
            inputMode="decimal"
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
