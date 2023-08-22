import {Circle, Flex, Input, Text} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {leastSquaresFitCalc} from "../../utils";
import {useQuery} from "react-query";
import pokemonApi from "../../api";
import PokemonCard from "./Components/PokemonCard";
import styles from "./styles.module.css"

const PokemonDirectory = () => {
    const itemsPerPage = 30
    const [searchTerm, setSearchTerm] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedType, setSelectedType] = useState("")
    const inputWidth = leastSquaresFitCalc(new Map([[375, 320], [1440, 1088]]))

    const {data: pokemons, isLoading} = useQuery({
        queryKey: ["pokemons"],
        queryFn: () => pokemonApi.get("/pokemon", {params: {limit: 20000}}).then(res => res.data)
    })
    const {data: types, isLoading: isTypesLoading} = useQuery({
        queryKey: ["types"],
        queryFn: () => pokemonApi.get("/type", {params: {limit: 100}}).then(res => res.data)
    })
    const {data: filterPokemon, isLoading: isFilterLoading, refetch} = useQuery({
        queryKey: ["type", selectedType],
        queryFn: () => pokemonApi.get("/type/" + selectedType).then(res => res.data.pokemon.map(({pokemon}) => pokemon)),
        enabled: !!selectedType
    })

    useEffect(() => {
        if (currentPage !== 1 && searchTerm) {
            setCurrentPage(1)
        }
    }, [searchTerm])

    useEffect(() => {
        if (currentPage !== 1 && selectedType) {
            setCurrentPage(1)
        }
        if (selectedType) {
            refetch(); //Refetch filterPokemon
        }
    }, [selectedType])

    const handleChangeType = (event) => {
        setSelectedType(event.currentTarget.value);
    }

    if (isLoading || isTypesLoading || isFilterLoading) {
        return <Text>Loading...</Text>
    }

    const pokeList = (selectedType ? filterPokemon : pokemons.results).filter(({name}) => {
        if (!searchTerm) return true;
        return name.includes(searchTerm) || searchTerm.includes(name);
    });

    return (
        <div className={styles.pokemonGrid}>
            <Text textStyle="heading2" textAlign="center" gridColumn="1/-1">
                {pokemons.results.length} <b> Pokemons </b> for you to choose your favorite
            </Text>
            <Input
                placeholder="Enter Pokémon name"
                size="md"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                width={inputWidth}
                maxW="100%"
                borderRadius="40px"
                boxShadow="4px 4px 16px 0px rgba(1,28,64, 0.20)"
                background="#F2F2F2"
                border="0"
                gridColumn="1/-1"
            />
            <div className={styles.filterContainer}>
                <select value={selectedType} onChange={handleChangeType}>
                    <option value="" defaultChecked disabled>Select type</option>
                    {types.results.map(({name, url}) => <option value={name}>{name}</option>)}
                </select>
            </div>
            {pokeList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map(({name, url}) => (
                <PokemonCard key={url} name={name}/>
            ))}
            <Flex direction="row" alignItems="center" justifyContent="center" mb="64px" gridColumn="1/-1">
                {Array.from(Array(Math.ceil(pokeList.length / itemsPerPage)).keys()).map((number) => {
                    number = number + 1;
                    return <Circle
                        key={number}
                        size="8px"
                        m="2px"
                        bgColor={currentPage === number ? "black" : "gray.400"}
                        cursor="pointer"
                        transition={{duration: 0.3}}
                        _hover={{bgColor: "black"}}
                        onClick={() => setCurrentPage(number)}
                    />
                })}
            </Flex>
        </div>
    );
};

export default PokemonDirectory;

