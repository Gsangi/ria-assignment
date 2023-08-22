import React, {useState} from "react";
import {Box, Collapse, Flex, IconButton, Link as ChakraLink, useBreakpointValue} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {HamburgerIcon} from "@chakra-ui/icons";
import {PokemonIcon} from "../Icons/pokemonIcon";
import {leastSquaresFitCalc} from "../../utils";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const linkDirection = useBreakpointValue({base: "column", md: "row"});

    const Links = () => (
        <Flex flexDir={linkDirection} alignItems="center" justifyContent="center" mt={{base: 2, md: 0}}
              gap={leastSquaresFitCalc(new Map([[768,24],[1440,64]]))}
              mr={leastSquaresFitCalc(new Map([[768,20],[1440,158]]))}>
            <ChakraLink as={Link} to="/home" mr={4}>
                Home
            </ChakraLink>
            <ChakraLink as={Link} to="/pokedex" mr={4}>
                Pokedex
            </ChakraLink>
            <ChakraLink as={Link} to="/legendaries" mr={4}>
                Legendaries
            </ChakraLink>
            <ChakraLink as={Link} to="/documentation">
                Documentation
            </ChakraLink>
        </Flex>
    );


    return (
        <Flex bg="custom.third" p={4} flexDirection="column" boxShadow="0px 4px 16px 0px rgba(1, 28, 64, 0.20)">
            <Flex width="100%" justifyContent="space-between" alignItems="center">
                <Box ml={leastSquaresFitCalc(new Map([[375,14],[1440,158]]))}>
                    <PokemonIcon width={leastSquaresFitCalc(new Map([[375, 58], [1440, 158]]))}
                                 height={leastSquaresFitCalc(new Map([[375, 22], [1440, 63]]))}/>
                </Box>
                <Box display={{base: "none", md: "block"}} alignSelf="center">
                    <Links/>
                </Box>
                <Box display={{base: "block", md: "none"}}>
                    <IconButton
                        aria-label="Open menu"
                        icon={<HamburgerIcon/>}
                        onClick={toggleMenu}
                    />
                </Box>
            </Flex>
            <Box display={{base: "block", md: "none"}} mt={2}>
                <Collapse in={isMenuOpen} animateOpacity>
                    <Links/>
                </Collapse>
            </Box>
        </Flex>
    );
};

export default Header;
