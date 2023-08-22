import {Circle, Flex, Input, Text} from "@chakra-ui/react";
import usePokemonApi from "../../hooks/usePokemonApi";
import {useEffect, useState} from "react";
import {leastSquaresFitCalc} from "../../utils";
import {useQuery} from "react-query";
import pokemonApi from "../../api";
import PokemonCard from "./Components/PokemonCard";
import styles from "./styles.module.css"
import PokemonModal from "./Components/PokemonModal";


const PokemonDirectory = () => {
    const itemsPerPage = 50

    const marginTopValue = leastSquaresFitCalc(new Map([[375, 20], [1440, 73]]))

    const inputWidth = leastSquaresFitCalc(new Map([[375, 320], [1440, 1088]]))

    const {data: pokemonList} = usePokemonApi()
    const {data, isLoading} = useQuery({
        queryKey: ["pokemons"],
        queryFn: () => pokemonApi.get("/pokemon", {params: {limit: 500}}).then(res => res.data)
    })
    const [searchTerm, setSearchTerm] = useState("")
    const [currentPage, setCurrentPage] = useState(1)


    useEffect(() => {
        console.log(data)
    }, [data])

    if (isLoading) {
        return <Text>Loading...</Text>
    }

    const filteredPokemonList = pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredPokemonList.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <Flex direction="column" mt={marginTopValue} alignItems="center">

            <Text textStyle="heading2" textAlign="center" mb="17px">
                800 <b> Pokemons </b> for you to choose your favorite
            </Text>
            <Input
                placeholder="Enter Pokémon name"
                size="md"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                mt="17px"
                mb="25px"
                width={inputWidth}
                maxW="100%"
                borderRadius="40px"
                boxShadow="4px 4px 16px 0px rgba(1,28,64, 0.20)"
                background="#F2F2F2"
                border="0"
            />
            <div className={styles.pokemonGrid}>
                {data.results.map(({name, url}) => (
                    <PokemonCard key={url} name={name}/>
                ))}
            </div>

            <Flex direction="row" alignItems="center" justifyContent="center" mt="16px">
                {pageNumbers.map((number) => (
                    <Circle
                        key={number}
                        size="8px"
                        m="2px"
                        bgColor={currentPage === number ? "black" : "gray.400"}
                        cursor="pointer"
                        transition={{duration: 0.3}}
                        _hover={{bgColor: "black"}}
                        onClick={() => paginate(number)}
                    />
                ))}
            </Flex>
            <PokemonModal/>
        </Flex>
    );
};

export default PokemonDirectory;

