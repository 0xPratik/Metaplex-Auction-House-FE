import React from "react";
import { Box, VStack, HStack, Image, Heading, Button } from "@chakra-ui/react";

function Card() {
  return (
    <Box w="25%" borderRadius={"2xl"} boxShadow="2xl">
      <VStack justify={"flex-start"} align="flex-start">
        <Image
          src="https://picsum.photos/500/500"
          objectFit={"cover"}
          borderTopRightRadius={"2xl"}
          borderTopLeftRadius="2xl"
          w="full"
          h="200px"
          alt="This is a Dummy Image "
        />
        <Box px={2} pb={4} w="full">
          <Heading>Card Name</Heading>
          <HStack justify={"space-between"}>
            <Box>2 SOL</Box>
            <Box>1 out of 100</Box>
          </HStack>
          <HStack justify={"space-between"}>
            <Button>Buy</Button>
            <Button>Sell</Button>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
}

export default Card;
