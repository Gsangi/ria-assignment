import {Flex, Input, Text, Box, Button, useDisclosure} from "@chakra-ui/react";
import PokemonProfile from "../../components/PokemonProfile";
import usePokemonApi from "../../hooks/usePokemonApi";
import { useState } from "react";
import ProfileModal from "../../components/ProfileModal";

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
                placeholder="medium size"
                size="md"
                marginLeft="176px"
                marginRight="176px"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                mt="17px"
                mb="25px"
                width="1088px"
            />
            <Flex wrap="wrap" justify="center" mx="157px">
                {currentItems.map((pokemon) => {
                    return (
                        <PokemonProfile
                            key={pokemon.number}
                            text={pokemon.name}
                            number={pokemon.number}
                            circleText={pokemon.circleText}
                            onClick={() => openModal(pokemon)}  // New onClick prop
                        />
                    );
                })}
                {selectedPokemon && (
                    <ProfileModal
                        isOpen={isOpen}
                        onClose={onClose}
                        pokemon={selectedPokemon}
                    />
                )}
            </Flex>
            <Box>
                {pageNumbers.map((number) => (
                    <Button onClick={() => paginate(number)} key={number}>
                        {number}
                    </Button>
                ))}
            </Box>
        </Flex>
    );
};

export default PokemonDirectory;
