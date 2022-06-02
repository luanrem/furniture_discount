import type { NextPage } from "next";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  Switch,
} from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Flex flexDir="column" w="100vw" h="100vh" align="center" justify="center">
      <Box bg="gray.700" w="80%" p={4} color="white">
        <Flex as="form" flexDir="column">
          <Stack spacing="4">
            <FormControl>
              <FormLabel htmlFor="initialMoney">Valor de Entrada</FormLabel>
              <InputGroup>
                <NumberInput defaultValue={200} max={9000}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="discount">Desconto 1</FormLabel>
              <InputGroup>
                <Input
                  focusBorderColor="pink.500"
                  id="discount"
                  name="discount"
                  type="number"
                  bg="gray.100"
                  size="lg"
                  value={500}
                  // onChange={(event) =>
                  //   setInputInitialMoney(event.target.value)
                  // }
                />
                {/* <InputRightAddon boxSize="mg" children="%" /> */}
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="discount">Desconto 1</FormLabel>
              <NumberInput defaultValue={15} max={30} clampValueOnBlur={false}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <Flex
              flexDir="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="column">
                <FormControl>
                  <FormLabel htmlFor="discount">IPI</FormLabel>
                  <NumberInput size="md" maxW={24} defaultValue={15} min={10}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="discount">Frete</FormLabel>
                  <NumberInput size="md" maxW={24} defaultValue={15} min={10}>
                    <NumberInputField />
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
                  <Switch colorScheme="teal" size="lg" />
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
