import {Flex, useBreakpointValue} from "@chakra-ui/react";
import {useState} from "react";
import {leastSquaresFitCalc, legendaryPokemons} from "../../utils";
import {ArrowLeft} from "../../components/Icons/arrowLeft";
import {ArrowRight} from "../../components/Icons/arrowRight";
import {useQuery} from "react-query";
import pokemonApi from "../../api";
import Profile from "./Components/Profile";
import Card from "./Components/Card";

const Legendary = () => {

    const {data, isLoading} = useQuery({
        queryKey: ["legendary"],
        queryFn: () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const {data} = await pokemonApi.get("/pokemon-species", {params: {limit: 2000}})
                    const promises = data.results.map(({name}) => pokemonApi.get("/pokemon-species/" + name))
                    const results = await Promise.allSettled(promises);

                    resolve(results.filter(({status, value, reason}) => {
                        if (status === "rejected") {
                            console.warn(reason);
                            return false;
                        }

                        return value.data.is_legendary;
                    }).map(({value}) => {
                        return {
                            ...value.data,
                            icon: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${value.data.id}.png`
                        }
                    }))
                } catch (e) {
                    reject(e)
                }
            })
        }
    })

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentPokemonName, setCurrentPokemonName] = useState(data?.[0].name)

    const handleArrowRightClick = () => {
        if (currentIndex + cardsPerPage < legendaryPokemons.length) {
            setCurrentIndex(currentIndex + cardsPerPage);
        }
    };

    const handleArrowLeftClick = () => {
        if (currentIndex - cardsPerPage >= 0) {
            setCurrentIndex(currentIndex - cardsPerPage);
        }
    };

    const cardsPerPage = useBreakpointValue({
        base: 2,
        md: 4
    });

    return (
        <Flex bg="#212121">
            <Flex direction="column" mx={leastSquaresFitCalc(new Map([
                [375, 25], [1440, 158]
            ]))}>
                <Profile name={currentPokemonName}/>
                <Flex justifyContent="center" alignItems="center" gap="20px">
                    <div style={{cursor: "pointer"}} onClick={handleArrowLeftClick}>
                        <ArrowLeft/>
                    </div>
                    <Flex gap={leastSquaresFitCalc(new Map([
                        [375, 24], [1440, 80]
                    ]))} my={leastSquaresFitCalc(new Map([
                        [375, 4], [1440, 64]
                    ]))} mx="36px">
                        {data?.slice(currentIndex, currentIndex + cardsPerPage).map((p) => {
                            return (
                                <Card
                                    key={p.id}
                                    name={p.name}
                                    icon={p.icon}
                                    onClick={() => setCurrentPokemonName(p.name)}
                                    selected={p.name === currentPokemonName}
                                />
                            );
                        })}
                    </Flex>
                    <div style={{cursor: "pointer"}} onClick={handleArrowRightClick}>
                        <ArrowRight/>
                    </div>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Legendary
