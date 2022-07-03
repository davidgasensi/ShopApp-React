import { Box, Image, Badge, Center, Button } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { React, useState, useEffect, useCallback } from "react";
import { AiOutlineShopping } from "react-icons/ai";
function ProductItems(props) {
  return (
    <Center>
      <Box
        w="20rem"
        h="40rem"
        borderWidth="1px"
        overflow="hidden"
        boxShadow="lg"
        rounded="md"
        mr="5"
        mb="5"
        key={props.id}
        position="relative"
      >
        <Image src={props.imageUrl} alt={props.imageAlt} />
        <Box p="6">
          <Box display="flex" alignItems="baseline">
            {props.reviewCount < 80 && (
              <Badge borderRadius="full" px="2" colorScheme="red">
                New
              </Badge>
            )}
          </Box>
          <Box mt="1" fontWeight="semibold" lineHeight="tight" ml="2">
            {props.title}
          </Box>
          <Box ml="2">{props.price} €</Box>
          <Box display="flex" mt="2" ml="2">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < props.rating ? "teal.500" : "gray.300"}
                />
              ))}
            <Box ml="2" color="gray.600" fontSize="sm">
              {props.reviewCount} reviews
            </Box>
          </Box>
          <Button rightIcon={<AiOutlineShopping />} bg="brand.accent" size="md" pos="absolute" bottom="6" w="17rem" color="wh">
            Add to cart
          </Button>
        </Box>
      </Box>
    </Center>
  );
}

export default ProductItems;
