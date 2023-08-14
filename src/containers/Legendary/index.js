import {Flex, useBreakpointValue} from "@chakra-ui/react";
import LegendaryProfile from "../../components/LegendaryProfile";
import {useState} from "react";
import LegendaryCard from "../../components/LegendaryCard";
import {leastSquaresFitCalc, legendaryPokemons} from "../../utils";
import {ArrowLeft} from "../../components/Icons/arrowLeft";
import {ArrowRight} from "../../components/Icons/arrowRight";

const Legendary = () => {
    const [selectedPokemon, setSelectedPokemon] = useState(legendaryPokemons[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePokemonClick = (name) => {
        const newSelected = legendaryPokemons.find(p => p.name === name);
        setSelectedPokemon(newSelected);
    };

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
        md: 6
    });

    return (
        <Flex bg="#212121">
            <Flex direction="column" mx={leastSquaresFitCalc(new Map([
                [375,25],[1440,158]
            ]))}>
                <LegendaryProfile pokemon={selectedPokemon}/>
                <Flex justifyContent="center" alignItems="center" gap="20px">
                    <div style={{cursor: "pointer"}} onClick={handleArrowLeftClick}>
                        <ArrowLeft/>
                    </div>
                    <Flex gap={leastSquaresFitCalc(new Map([
                        [375, 4], [1440, 28]
                    ]))} my={leastSquaresFitCalc(new Map([
                        [375, 4], [1440, 64]
                    ]))}>
                        {legendaryPokemons.slice(currentIndex, currentIndex + cardsPerPage).map((p) => {
                            return (
                                <LegendaryCard
                                    text={p.name}
                                    onClick={() => handlePokemonClick(p.name)}
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
