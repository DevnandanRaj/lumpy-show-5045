import { useState } from "react";
import { Link, useNavigate, BrowserRouter as Router } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSearch, FiHeart } from "react-icons/fi";
import { RiContactsLine } from "react-icons/ri";

export const Navbar = () => {
  const navigate = useNavigate();
  const z = JSON.parse(localStorage.getItem("user")) || "Login";
  const [refreser, setRefreser] = useState(false);
  const toast = useToast();

  const handleCart = () => {
    if (z === "Login") {
      toast({
        title: "Please log in",
        description: "You must log in to access the cart.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      navigate("/login");
      return;
    }
    navigate("/checkoutpage");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("sephoraAddress");
    localStorage.removeItem("sai");
    setRefreser(!refreser);
  };

  return (
    <Router>
      <Box as="nav" bgColor="white" py={2} boxShadow="md">
        <Flex align="center" maxW="6xl" mx="auto">
          <Box flex="1">
            <InputGroup>
              <InputLeftElement children={<FiSearch />} />
              <Input
                type="text"
                placeholder="Search SEPHORA"
                rounded="full"
                _focus={{ outline: "none", boxShadow: "outline" }}
              />
            </InputGroup>
          </Box>
          <Box>
            <Link to={`/`}>
              <Heading as="h1" size="lg">
                SEPHORA
              </Heading>
            </Link>
          </Box>
          <Spacer />
          <Flex align="center">
            <IconButton
              aria-label="favorites"
              icon={<FiHeart />}
              mr={2}
              variant="ghost"
            />
            <IconButton
              aria-label="cart"
              icon={<HiOutlineShoppingBag />}
              mr={2}
              variant="ghost"
              onClick={handleCart}
              cursor="pointer"
            />
            {z === "Login" ? (
              <Link to={`/login`}>
                <IconButton
                  aria-label="login"
                  icon={<RiContactsLine />}
                  variant="ghost"
                  mr={2}
                />
              </Link>
            ) : null}
            <Text
              fontSize="md"
              fontWeight="bold"
              mr={2}
              color={z !== "Login" ? "pink.500" : "black"}
              cursor={z !== "Login" ? "pointer" : "default"}
              _hover={{ textDecoration: "underline" }}
            >
              {z}
            </Text>
            {z !== "Login" ? (
              <Text
                fontSize="md"
                fontWeight="bold"
                color="pink.500"
                cursor="pointer"
                _hover={{ textDecoration: "underline" }}
                onClick={handleLogout}
              >
                Logout
              </Text>
            ) : null}
          </Flex>
        </Flex>
      </Box>
      </Router>
  );
};
