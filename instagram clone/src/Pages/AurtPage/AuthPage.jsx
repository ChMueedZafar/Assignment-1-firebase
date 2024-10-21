import { Container, Flex, Box, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <Flex minH={{ base: "100vh", md: "90vh" }} justifyContent={"center"} px={{ base: 4, md: 8 }}>
      <Container maxW={{ base: "container.sm", md: "container.md" }} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={{ base: 6, md: 10 }}>
          {/* Left-hand side */}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" h={{ base: "300px", md: "480px" }} alt="phone img" />
          </Box>
          {/* Right-hand side */}
          <VStack spacing={2} align={"stretch"}>
            <AuthForm />
            <Box textAlign={"center"} fontSize={{ base: "sm", md: "md" }}>
              Get the app.
            </Box>
            <Flex gap={{ base: 3, md: 5 }} justifyContent={"center"}>
              <Image src="/playstore.png" h={{ base: 8, md: 10 }} alt="playstore img" />
              <Image src="/microsoft.png" h={{ base: 8, md: 10 }} alt="microsoft img" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
