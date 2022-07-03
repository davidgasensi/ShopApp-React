import { Box, Image, Badge, Center } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import {React, useState, useEffect, useCallback} from 'react';
import loadingIcon from '../assets/eclipse.svg'

function BoxTest() {
   const [property, setProperty] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   const fetchHotelsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://react-http-36ed8-default-rtdb.europe-west1.firebasedatabase.app/hoteles.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
        
      }

      const data = await response.json();

      const loadedHotels = [];
      for (const key in data) {
        loadedHotels.push({
          id: key,
          baths: data[key].baths,
          beds: data[key].beds,
          imageUrl: data[key].imageUrl,
          imageAlt: data[key].imageAlt,
          title: data[key].title,
          formattedPrice: data[key].formattedPrice,
          reviewCount: data[key].reviewCount,
          rating: data[key].rating,
        })
      }
      //
      setProperty(loadedHotels);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

   useEffect(() => {
    fetchHotelsHandler();
  }, [fetchHotelsHandler]);


  let content = <p>Found no hotels</p>;

  if (property.length > 0) {
    content = property.map((property) => (
      <Box
        w='20rem'
        h='24rem'
        borderWidth="1px"
        overflow="hidden"
        boxShadow="lg"
        rounded="md"
        mr="5"
        mb="5"
        key={property.id}
      >
        
        <Image src={property.imageUrl} alt={property.imageAlt} />
        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="red">
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {property.beds} beds &bull; {property.baths} baths
            </Box>
          </Box>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" ml="2">
            {property.title}
          </Box>
          <Box ml="2">
            {property.formattedPrice}
            <Box as="span" color="gray.600" fontSize="sm">
              / wk
            </Box>
          </Box>
          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {property.reviewCount} reviews
            </Box>
          </Box>
        </Box>
        
      </Box>
      ))
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <img src={loadingIcon} alt="Loading" width="80" />;
  }

  return (
    <Center display="flex" flexWrap="wrap">
      {content}
    </Center>
  );
}

export default BoxTest;
