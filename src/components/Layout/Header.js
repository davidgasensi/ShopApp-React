import {
  Box,
  Image,
  Flex,
  Heading,
  Icon,
  useDisclosure,

} from "@chakra-ui/react";
import ReactIcon from "../../assets/react-icon.svg";
import { AiOutlineShopping } from "react-icons/ai";
import ModalCart from "../Cart/ModalCart";
import React from "react";
import { useSelector } from "react-redux";
function Header() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const cartQuantity = useSelector(state => state.cart.totalQuantity);


  return (
    <React.Fragment>
      <Flex
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={3}
        bg="brand.primary"
        color="white"
      >
        <Box ml="3">
          <Image src={ReactIcon} boxSize="4rem" />
        </Box>
        <Heading as="h1" size="lg" letterSpacing={"tighter"} color="white">
          DG Shop
        </Heading>
        <Flex mr="2" as="h1" size="ms" color="white" align="center">
          <Icon
            as={AiOutlineShopping}
            boxSize="3rem"
            cursor="pointer"
            onClick={onToggle}
            color="brand.secondary"
          />
          <Box mt="3" width="2rem" textAlign="center" bgColor="brand.secondary" color="black" rounded="lg" fontWeight="semibold">{cartQuantity}</Box>
        </Flex>
      </Flex>
      <ModalCart isOpen={isOpen} onClose={onClose}/>
    </React.Fragment>
  );
}

export default Header;
