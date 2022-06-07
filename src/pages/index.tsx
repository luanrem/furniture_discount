import type { NextPage } from "next";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  Switch,
} from "@chakra-ui/react";

import Discount from "../components/Discount";
import { useState } from "react";

interface discountProps {
  id: number;
  number: number;
  value: number;
}

const Home: NextPage = () => {
  const [freteButton, setFreteButton] = useState<boolean>(false);
  const [discount, setDiscount] = useState<discountProps[]>([
    {
      id: 1,
      number: 1,
      value: 233,
    },
    {
      id: 2,
      number: 2,
      value: 23,
    },
    {
      id: 2,
      number: 2,
      value: 1113,
    },
  ]);

  const handleCheckFreteButton = (data: any) => {
    console.log(data);
    setFreteButton(!freteButton);
  };

  const addDiscount = () => {
    let newDiscount: discountProps = {
      id: 5,
      number: 4,
      value: 234,
    };
    console.log("discount", discount.push(newDiscount));
    // setDiscount(setdiscount);
    console.log("chegou");
  };

  const deleteDiscount = (data) => {
    console.log("data");
  };
  return (
    <Flex flexDir="column" w="100vw" h="100vh" align="center" justify="center">
      <Box bg="gray.700" w="80%" p={4} color="white">
        <Flex as="form" flexDir="column">
          <Stack spacing="4">
            <FormControl>
              <FormLabel htmlFor="initialMoney">Valor de Entrada</FormLabel>
              <NumberInput defaultValue={15} max={30} clampValueOnBlur={false}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            {discount.map((prop, key) => (
              <Discount number={prop.number} value={prop.value} key={prop.id} />
            ))}
            <Button
              colorScheme="gray.900"
              variant="outline"
              onClick={addDiscount}
            >
              Adicionar Desconto
            </Button>

            <Flex
              flexDir="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="column">
                <FormControl>
                  <FormLabel htmlFor="discount">IPI</FormLabel>
                  <NumberInput
                    size="md"
                    maxW={24}
                    defaultValue={15}
                    min={10}
                    color={freteButton ? "gray.100" : "gray.900"}
                    borderColor={freteButton ? "gray.100" : "gray.900"}
                  >
                    <NumberInputField readOnly={freteButton ? true : false} />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="discount">Frete</FormLabel>
                  <NumberInput
                    size="md"
                    maxW={24}
                    defaultValue={15}
                    min={10}
                    color={freteButton ? "gray.100" : "gray.900"}
                    borderColor={freteButton ? "gray.100" : "gray.900"}
                  >
                    <NumberInputField readOnly={freteButton ? true : false} />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
              </Stack>
              <Flex>
                <Stack direction="column" align="center">
                  <FormLabel htmlFor="discount">Usar Frete + IPI</FormLabel>
                  <Switch
                    isChecked={freteButton}
                    onChange={(data) => {
                      handleCheckFreteButton(data);
                    }}
                    colorScheme="teal"
                    size="lg"
                  />
                </Stack>
              </Flex>
            </Flex>
          </Stack>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Home;
