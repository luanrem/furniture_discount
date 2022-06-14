import type { NextPage } from "next";
import {
  Box,
  Button,
  Divider,
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
  Text,
} from "@chakra-ui/react";
import CurrencyFormat from "react-currency-format";

import Discount from "../components/Discount";
import { createRef, useEffect, useState } from "react";

interface discountProps {
  id: number;
  value: number;
}

const Home: NextPage = () => {
  const [freteIPIButton, setFreteIPIButton] = useState<boolean>(true);
  const [discount, setDiscount] = useState<discountProps[]>([
    {
      id: 1,
      value: 10.0,
    },
    {
      id: 2,
      value: 5.0,
    },
  ]);
  const [frete, setFrete] = useState(15.0);
  const [ipi, setIpi] = useState(15.0);
  const [entrada, setEntrada] = useState(10.0);
  const [result, setResult] = useState(104230.4);

  useEffect(() => {
    console.log("-------------------");
    console.log("discount", discount);
    console.log("freteIPIButton", freteIPIButton);
    console.log("entrada", entrada);
    console.log("ipi", ipi);
    console.log("frete", frete);
    console.log("result", result);

    if (freteIPIButton) {
      let finalResult = entrada;
      for (let i = 0; i < discount.length; i++) {
        finalResult = finalResult - (finalResult * discount[i].value) / 100;
        console.log("final", finalResult);
      }
      finalResult = finalResult + (finalResult * frete) / 100;
      finalResult = finalResult + (finalResult * ipi) / 100;
      setResult(finalResult);
    } else {
      let finalResult = entrada;
      for (let i = 0; i < discount.length; i++) {
        finalResult = finalResult - (finalResult * discount[i].value) / 100;
        console.log("final", finalResult);
      }
      setResult(finalResult);
    }
  }, [discount, entrada, frete, freteIPIButton, ipi, result]);

  const handleCheckFreteButton = (data: any) => {
    console.log(data);
    setFreteIPIButton(!freteIPIButton);
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

    //remove the element id
    discount.splice(id - 1, 1);
    console.log("discount", discount);

    // Check or fix the order of discounts
    let final: discountProps[] = discount.map((element, index) => {
      if (index !== element.id - 1) {
        element.id = index + 1;
      }
      return element;
    });

    setDiscount(final);
  };

  const increaseStepper = (id: number) => {
    discount[id - 1].value += 1;
    setDiscount([...discount]);
  };
  const decreaseStepper = (id: number) => {
    discount[id - 1].value -= 1;
    setDiscount([...discount]);
  };
  const entradaChange = (data: string) => {
    setEntrada(Number(data));
  };
  const freteChange = (data: string) => {
    setFrete(Number(data));
  };
  const IPIChange = (data: string) => {
    setIpi(Number(data));
  };
  const changeDiscount = (id: number, data: number) => {
    console.log("change2", data);
    discount[id - 1].value = data;
    console.log("new discount", discount);
    setDiscount([...discount]);
  };

  const formatPerCent = (val: number) => val + ` %`;
  const formatReal = (val: number) => `R$ ` + val;
  return (
    <>
      <Flex
        flexDir="column"
        w="100vw"
        h="100vh"
        align="center"
        justifyContent="center"
      >
        <Divider margin="1rem" />
        <Text color="white">Resultado: </Text>
        <Text fontSize="3xl" color="white">
          <CurrencyFormat
            value={result}
            displayType={"text"}
            decimalSeparator=","
            prefix={"R$ "}
            decimalScale={2}
            fixedDecimalScale={true}
          />
        </Text>
        <Divider margin="1rem" />
        <Box bg="gray.700" w="80%" p={4} color="white" maxW="35rem">
          <Flex as="form" flexDir="column">
            <Stack spacing="4">
              <FormControl>
                <FormLabel htmlFor="initialMoney">Valor de Entrada</FormLabel>
                <NumberInput
                  onChange={(data) => entradaChange(data)}
                  value={formatReal(entrada)}
                  min={0}
                  clampValueOnBlur={false}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              {discount.map((prop, key) => (
                <Discount
                  changeValue={(id, data) => changeDiscount(id, data)}
                  increaseStepper={increaseStepper}
                  decreaseStepper={decreaseStepper}
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
                    <FormLabel htmlFor="IPI">IPI</FormLabel>
                    <NumberInput
                      onChange={(data) => IPIChange(data)}
                      size="md"
                      maxW={24}
                      value={formatPerCent(ipi)}
                      color={freteIPIButton ? "gray.100" : "gray.900"}
                      borderColor={freteIPIButton ? "gray.100" : "gray.900"}
                      precision={2}
                      step={1}
                    >
                      <NumberInputField
                        readOnly={freteIPIButton ? false : true}
                      />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="frete">Frete</FormLabel>
                    <NumberInput
                      onChange={(data) => freteChange(data)}
                      size="md"
                      maxW={24}
                      value={formatPerCent(frete)}
                      color={freteIPIButton ? "gray.100" : "gray.900"}
                      borderColor={freteIPIButton ? "gray.100" : "gray.900"}
                    >
                      <NumberInputField
                        readOnly={freteIPIButton ? false : true}
                      />
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
                      isChecked={freteIPIButton}
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
    </>
  );
};

export default Home;
