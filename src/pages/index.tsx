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
import { MouseEventHandler, useState } from "react";

interface discountProps {
  id: number;
  value: number;
}

const Home: NextPage = () => {
  const [freteButton, setFreteButton] = useState<boolean>(true);
  const [discount, setDiscount] = useState<discountProps[]>([
    {
      id: 1,
      value: 10,
    },
    {
      id: 2,
      value: 5,
    },
  ]);

  const handleCheckFreteButton = (data: any) => {
    console.log(data);
    setFreteButton(!freteButton);
  };

  const addDiscount = () => {
    let discountFixed = discount.map((element, index) => {
      console.log("index, element", index, element);
      // Check or fix the order of discounts
      if (index !== element.id - 1) {
        console.log("entrou");
        element.id = index + 1;
      }
      return element;
    });
    const newDiscount: discountProps = {
      id: discount.length === 0 ? 1 : discountFixed.slice(-1)[0].id + 1,
      value: 10,
    };
    // console.log("newdiscount", newDiscount);
    // console.log("slice", discount.slice(-1));
    setDiscount([...discount, newDiscount]);
  };

  const deleteDiscount = (id: number) => {
    console.log("data", id);
    console.log(
      "find",
      discount.find((e) => e.id === id)
    );
    let final = discount.map((element, index) => {
      console.log("index, element", index, element);
      // Check or fix the order of discounts
      if (index !== element.id - 1) {
        console.log("entrou");
        element.id = index + 1;
      }
      // Remove the element id
      if (element.id === id) {
        return;
      }
      return element;
    });
    final = final.filter((element) => {
      return element !== undefined;
    });

    setDiscount(final);
    console.log("final", final);
  };

  const increaseStepper = () => {};
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
              <Discount
                id={prop.id}
                value={prop.value}
                delete={deleteDiscount}
                key={prop.id}
              />
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
