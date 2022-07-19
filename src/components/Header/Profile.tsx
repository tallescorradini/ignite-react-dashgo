import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface Props {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: Props) {
  return (
    <Flex align="center">
      {showProfileData ? (
        <Box mr="4" textAlign="right">
          <Text>Talles Corradini</Text>
          <Text color="gray.300" fontSize="small">
            teste@email.com
          </Text>
        </Box>
      ) : null}

      <Avatar
        size="md"
        name="Talles Corradini"
        src="https://github.com/tallescorradini.png"
      />
    </Flex>
  );
}
