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
  value: string;
  delete: (data: number) => void;
  changeValue: (id: number, value: string) => void;
}

export default function Discount(prop: discountProps) {
  const handleOnClick = () => {
    prop.delete(prop.id);
  };

  const changeValueInComponent = (data: string) => {
    prop.changeValue(prop.id, data);
  };
  const formatPerCent = (val: string) => val + ` %`;
  const parsePerCent = (val: string) => val.replace(" %", "");
  return (
    <>
      <Flex justifyContent="center" alignItems="center">
        <FormLabel margin="0" marginRight="2" flexShrink="0" htmlFor="discount">
          Desc. {prop.id}
        </FormLabel>
        <FormControl>
          <NumberInput
            onChange={(data) => changeValueInComponent(parsePerCent(data))}
            value={formatPerCent(prop.value)}
            precision={2}
            step={0.5}
            inputMode="decimal"
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
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
