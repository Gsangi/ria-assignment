import {Flex, Text} from "@chakra-ui/react";
import CustomProfileCircle from "../CustomProfileCircle";
import {DragonPikachu} from "../Icons/dragonPikachu";
import {leastSquaresFitCalc} from "../../utils";

const PokemonProfile = ({text, number, onClick}) => {
    return (
        <Flex
            height={leastSquaresFitCalc(new Map([[375, 120], [1440, 136]]))}
            width={leastSquaresFitCalc(new Map([[375, 280], [1440, 352]]))}
            onClick={onClick}
            ml={leastSquaresFitCalc(new Map([[375, 10], [1440, 17]]))}
            my={leastSquaresFitCalc(new Map([[375, 15], [1440, 23]]))}
            bg="rgba(246, 247, 249, 1)"
            borderRadius="8px"
        >
            <Flex display="column" flex="0.75">
                <Text mt="6px" mb="12px" textStyle="heading3"
                      fontSize={leastSquaresFitCalc(new Map([[375, 14], [1440, 18]]))} textAlign="center">{text}</Text>
                <Flex direction="row" mt="6px" gap="18px" mr="2px" justifyContent="end">
                    <CustomProfileCircle number={number} text="Attack"/>
                    <CustomProfileCircle number={number} text="Defense"/>
                </Flex>
            </Flex>
            <Flex bg="custom.danger" flex="1.25" justifyContent="center" alignItems="center" borderTopRightRadius="8px"
                  borderBottomRightRadius="8px">
                <DragonPikachu/>
            </Flex>
        </Flex>
    )
}

export default PokemonProfile;
