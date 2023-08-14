import {Flex, Text} from "@chakra-ui/react";
import {MewPokemon} from "../Icons/mewPokemon";
import {leastSquaresFitCalc} from "../../utils";

const LegendaryCard = ({onClick, text}) => {
    return (
        <Flex
            width={leastSquaresFitCalc(new Map([[375, 100], [1440, 127]]))}
            height={leastSquaresFitCalc(new Map([[375, 140], [1440, 180]]))}
            onClick={onClick}
            direction="column"
            style={{cursor: "pointer"}}
            alignItems="center"
            bgGradient="linear-gradient(134.44deg,rgb(181, 126, 16) 0%,rgb(181, 126, 16) 20.3125%,rgb(249, 223, 123) 39.5833%,rgb(255, 243, 166) 59.375%,rgb(249, 223, 123) 78.125%,rgb(181, 126, 16) 100%)"
            borderRadius={leastSquaresFitCalc(new Map([[375, 8], [1440, 16]]))}
        >
            <MewPokemon/>
            <Flex
                bg="white"
                textStyle="heading3"
                fontSize={leastSquaresFitCalc(new Map([[375, 12], [1440, 14]]))}
                shadow="4px 4px 4px rgba(33, 33, 33, 0.10)"
                fontWeight="400"
                width="100%"
                borderRadius={leastSquaresFitCalc(new Map([[375, 8], [1440, 16]]))}
            >
                <Text my={leastSquaresFitCalc(new Map([[375, 6], [1440, 12]]))}
                      mx={leastSquaresFitCalc(new Map([[375, 4], [1440, 8]]))}>{text}</Text>
            </Flex>
        </Flex>
    );
};

export default LegendaryCard;
