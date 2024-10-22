import { Box, Button, Flex, Image, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmpassword: ""
  });

  const handleAuth = () => {
    // Check if the required fields are filled
    if (!inputs.email || !inputs.password || (!isLogin && !inputs.confirmpassword)) {
      alert("Please fill all the fields");
      return;
    }

    // If the form is valid, navigate to the home page
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  return (
    <>
      <Box 
        border={"1px solid gray"} 
        marginTop={14} 
        borderRadius={4} 
        padding={5} 
        maxW={{ base: "100%", md: "400px" }} 
        mx="auto" 
      >
        <VStack spacing={4}>
          <Image src="/logo.png" h={{ base: 16, md: 24 }} cursor={"pointer"} alt="logo" />

          <Input
            placeholder="Email"
            fontSize={{ base: 18, md: 24 }}
            type="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
          />

          <Input
            placeholder="Password"
            fontSize={{ base: 12, md: 20 }}
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
          />

          {!isLogin && (
            <Input
              placeholder="Confirm Password"
              fontSize={{ base: 12, md: 14 }}
              type="password"
              name="confirmpassword"
              value={inputs.confirmpassword}
              onChange={handleChange}
            />
          )}

          <Button
            w={"full"}
            colorScheme="blue"
            size={{ base: "md", md: "sm" }}
            fontSize={{ base: 16, md: 14 }}
            onClick={handleAuth}
          >
            {isLogin ? "Log in" : "Sign Up"}
          </Button>

          <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"gray.500"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>

          <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
            <Image src="/google.png" w={5} alt="google-img" />
            <Text mx={2} color={"blue.500"} fontSize={{ base: 14, md: 16 }}>
              Log in with Google
            </Text>
          </Flex>
        </VStack>
      </Box>  

      <Box
        border="1px solid gray"
        borderRadius={4}
        padding={5}
        mt={4}
        maxW={{ base: "100%", md: "400px" }} 
        mx="auto" 
      >
        <Flex alignItems="center" justifyContent="center">
          <Box mx={2} fontSize={{ base: 12, md: 14 }}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color="blue.500"
            cursor="pointer"
            fontSize={{ base: 12, md: 14 }}
          >
            {isLogin ? "Sign up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;





