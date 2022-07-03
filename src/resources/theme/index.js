import { extendTheme, ChakraProvider } from '@chakra-ui/react'

const colors = {
  brand: {
    primary: '#4C5760',
    secondary: '#9FFFF5',
    accent: '#7CFFC4',
  },
}

export const theme = extendTheme({ colors })
