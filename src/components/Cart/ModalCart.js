import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Box,
  Flex,
  Image,
  Stack,
  Text,
  Button,
  Badge,
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { DeleteIcon } from "@chakra-ui/icons";
import { useRef, useState } from "react";
function ModalCart(props) {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPriceAll);
  const nameInput = useRef();
  const emailInput = useRef();
  const [isErrorName, setIsErrorName] = useState(false);
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();

  function addItemHandler(item) {
    dispatch(cartActions.addItemToCart(item));
  }
  function removeItemHandler(item) {
    dispatch(cartActions.removeItemFromCart(item));
  }

  function removeAllCartHandler() {
    dispatch(cartActions.removeAllCart());
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    if (nameInput.current.value === "" || emailInput.current.value === "") {
      if (nameInput.current.value === "") {
        setIsErrorName(true);
      } else if (emailInput.current.value === "") {
        setIsErrorEmail(true);
      }
    } else {
      event.preventDefault();
      toast({
        title: "Order Success",
        description: "Your order has been sent",
        status: "success",
        duration: 2000,
        isClosable: true,
        variant: "left-accent",
        position: "top",
      });
      dispatch(cartActions.removeAllCart());
      onModalClose();
    }
  }

  function onChangeNameHandler() {
    if (nameInput.current.value !== "") {
      setIsErrorName(false);
    }
  }

  function onChangeEmailHandler() {
    if (emailInput.current.value !== "") {
      setIsErrorEmail(false);
    }
  }

  function onModalClose() {
    props.onClose();
    setIsErrorName(false);
    setIsErrorEmail(false);
  }
  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onClose={onModalClose}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <Box>
          <ModalContent>
            <ModalHeader>Your cart</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              {cartItems.map((item) => (
                <Box key={item.id}>
                  <Flex>
                    <Image
                      src={item.imageUrl}
                      alt={item.imageAlt}
                      boxSize="10rem"
                      mr="3"
                      mb="5"
                    />
                    <Stack mt="1.5rem">
                      <Text fontWeight="semibold">
                        {item.name}{" "}
                        <Badge
                          fontSize="0.8rem"
                          colorScheme="green"
                          verticalAlign="center"
                        >
                          x{item.quantity}
                        </Badge>
                      </Text>
                      <Text>
                        {item.totalPrice.toFixed(2)}€{" "}
                        <Text as="i" color="grey.500">
                          ({item.price.toFixed(2)}€/item)
                        </Text>
                      </Text>

                      <Flex>
                        <Button
                          bgColor="#eb4d4b"
                          onClick={() => removeItemHandler(item.id)}
                          fontWeight="bold"
                          w="3rem"
                          ml="2rem"
                          mr="2rem"
                          color="white"
                        >
                          -
                        </Button>
                        <Button
                          bgColor="teal.500"
                          onClick={() => addItemHandler(item)}
                          fontWeight="bold"
                          w="3rem"
                          color="white"
                        >
                          +
                        </Button>
                      </Flex>
                    </Stack>
                  </Flex>
                </Box>
              ))}
              {totalPrice > 0 && (
                <Text ml="13rem" fontWeight="bold" fontSize="lg">
                  Total Price: {Math.abs(totalPrice.toFixed(2))}€
                </Text>
              )}
              {totalPrice <= 0 && (
                <Center>
                  <Text fontSize="lg">Your cart is empty</Text>
                </Center>
              )}
              {totalPrice > 0 && (
                <Box>
                  <FormControl isInvalid={isErrorName} isRequired>
                    <FormLabel htmlFor="name" mt="2">
                      Name
                    </FormLabel>
                    <Input
                      id="name"
                      type="name"
                      onChange={onChangeNameHandler}
                      ref={nameInput}
                    />
                    {isErrorName && (
                      <FormErrorMessage>Name is required.</FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="email" mt="2">
                      Email
                    </FormLabel>
                    <Input id="email" type="email" />
                  </FormControl>
                  <FormControl isRequired isInvalid={isErrorEmail}>
                    <FormLabel htmlFor="Address" mt="2">
                      Address
                    </FormLabel>
                    <Input
                      id="Address"
                      type="Address"
                      onChange={onChangeEmailHandler}
                      ref={emailInput}
                    />
                    {isErrorEmail && (
                      <FormErrorMessage>Email is required.</FormErrorMessage>
                    )}
                    <FormHelperText>
                      Data is not sent to any database. It is only a test page
                      for practice.
                    </FormHelperText>
                  </FormControl>
                </Box>
              )}
            </ModalBody>

            <ModalFooter>
              {!totalPrice <= 0 && (
                <Flex>
                  <Box>
                    <Button
                      leftIcon={<DeleteIcon />}
                      colorScheme="red"
                      onClick={removeAllCartHandler}
                      mr="5rem"
                    >
                      Clear cart
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      colorScheme="teal"
                      onClick={onSubmitHandler}
                      disabled={isErrorName || isErrorEmail}
                    >
                      Send
                    </Button>
                  </Box>
                </Flex>
              )}
            </ModalFooter>
          </ModalContent>
        </Box>
      </Modal>
    </>
  );
}

export default ModalCart;
