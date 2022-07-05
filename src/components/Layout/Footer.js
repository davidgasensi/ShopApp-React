import { ButtonGroup, Flex, IconButton, Stack, Text, Center } from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <Center>
      <Flex as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
        <Stack spacing={{ base: "4", md: "5" }}>
          <Stack justify="space-between" direction="row" align="center">
          <Text fontSize="md" color="subtle">
            Made by David Asensi with React
          </Text>
            <ButtonGroup variant="ghost">
              <IconButton
                as="a"
                href="https://www.linkedin.com/in/davidasensi/"
                aria-label="LinkedIn"
                icon={<FaLinkedin fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="https://github.com/davidgasensi"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </Stack>
          
        </Stack>
      </Flex>
    </Center>
  );
}

export default Footer;
