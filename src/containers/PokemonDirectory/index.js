import { Flex, Input, Text, useDisclosure, Circle } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import PokemonProfile from "../../components/PokemonProfile";
import usePokemonApi from "../../hooks/usePokemonApi";
import { useState } from "react";
import ProfileModal from "../../components/ProfileModal";

const MotionFlex = motion(Flex);

const pageTransitionVariants = {
    hidden: { opacity: 0, y: "-10%" },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: "10%" }
};

const PokemonDirectory = () => {
    const { data: pokemonList, isLoading } = usePokemonApi();
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    const itemsPerPage = 50;

    const openModal = (pokemon) => {
        setSelectedPokemon(pokemon);
        onOpen();
    };

    if (isLoading) {
        return <Text>Loading...</Text>;
    }

    const filteredPokemonList = pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredPokemonList.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredPokemonList.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <Flex direction="column" mt="73px" justifyContent="center">
            <Text textStyle="heading2" textAlign="center" mb="17px">
                800 Pokemons for you to choose your favorite
            </Text>
            <Input
                placeholder="Enter Pokémon name"
                size="md"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                mt="17px"
                mb="25px"
                width="1088px"
            />
            <AnimatePresence mode = 'wait'>
                <MotionFlex
                    wrap="wrap"
                    justify="center"
                    mx="157px"
                    key={currentPage}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={pageTransitionVariants}
                >
                    {currentItems.map((pokemon) => (
                        <PokemonProfile
                            key={pokemon.number}
                            text={pokemon.name}
                            number={pokemon.number}
                            circleText={pokemon.circleText}
                            onClick={() => openModal(pokemon)}
                        />
                    ))}
                    {selectedPokemon && (
                        <ProfileModal
                            isOpen={isOpen}
                            onClose={onClose}
                            pokemon={selectedPokemon}
                        />
                    )}
                </MotionFlex>
            </AnimatePresence>

            {/* Pagination dots */}
            <Flex direction="row" alignItems="center" justifyContent="center" mt="16px">
                {pageNumbers.map((number) => (
                    <Circle
                        key={number}
                        size="8px"
                        m="2px"
                        bgColor={currentPage === number ? "black" : "gray.400"}
                        cursor="pointer"
                        transition={{ duration: 0.3 }}
                        _hover={{ bgColor: "black" }}
                        onClick={() => paginate(number)}
                    />
                ))}
            </Flex>
        </Flex>
    );
};

export default PokemonDirectory;
