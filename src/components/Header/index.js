import { Box, Flex, Spacer, Text, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PokemonIcon } from "../Icons/pokemonIcon";

const Header = () => {
    return (
        <Flex bg="custom.third" p={4} alignItems="center" boxShadow = "0px 4px 16px 0px rgba(1, 28, 64, 0.20)">
            <Box>
                <PokemonIcon />
            </Box>
            <Spacer />
            <Box>
                <Text as={ChakraLink} as={Link} to="/home" mr={4}>
                    Home
                </Text>
                <Text as={ChakraLink} as={Link} to="/pokedex" mr={4}>
                    Pokedex
                </Text>
                <Text as={ChakraLink} as={Link} to="/legendaries" mr={4}>
                    Legendaries
                </Text>
                <Text as={ChakraLink} as={Link} to="/documentation">
                    Documentation
                </Text>
            </Box>
        </Flex>
    );
};

export default Header;
