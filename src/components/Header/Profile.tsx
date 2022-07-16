import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Talles Corradini</Text>
        <Text color="gray.300" fontSize="small">
          teste@email.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Talles Corradini"
        src="https://github.com/tallescorradini.png"
      />
    </Flex>
  );
}
