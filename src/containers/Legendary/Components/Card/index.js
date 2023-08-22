import {Flex, Text} from "@chakra-ui/react";
import {leastSquaresFitCalc} from "../../../../utils";
import {ReactComponent as PokeBall} from "./pokeball.svg"

const Card = ({name, icon, selected, onClick}) => {
    return (
        <Flex
            width={leastSquaresFitCalc(new Map([[375, 100], [1440, 127]]))}
            height={leastSquaresFitCalc(new Map([[375, 140], [1440, 180]]))}
            onClick={onClick}
            direction="column"
            cursor="pointer"
            alignItems="stretch"
            position="relative"
            bgGradient="linear-gradient(134.44deg,rgb(181, 126, 16) 0%,rgb(181, 126, 16) 20.3125%,rgb(249, 223, 123) 39.5833%,rgb(255, 243, 166) 59.375%,rgb(249, 223, 123) 78.125%,rgb(181, 126, 16) 100%)"
            borderRadius={leastSquaresFitCalc(new Map([[375, 8], [1440, 16]]))}
            opacity={!selected ? "0.5" : "1"}
        >
            <img src={icon} style={{
                position: "absolute",
                left: '50%',
                top: '30%',
                transformOrigin: 'center',
                transform: 'translate(-50%, -50%) scale(1.5)'
            }}/>
            <Flex
                bg="white"
                textStyle="heading3"
                align="center"
                fontSize={leastSquaresFitCalc(new Map([[375, 12], [1440, 14]]))}
                shadow="4px 4px 4px rgba(33, 33, 33, 0.10)"
                fontWeight="400"
                width="100%"
                px="6px"
                mt="auto"
                borderRadius={leastSquaresFitCalc(new Map([[375, 8], [1440, 16]]))}
                overflow="hidden"
            >
                <Text
                    my={leastSquaresFitCalc(new Map([[375, 6], [1440, 12]]))}
                    mx={leastSquaresFitCalc(new Map([[375, 4], [1440, 8]]))}
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                    overflow="hidden"
                    flex={1}
                >
                    {name}
                </Text>
                <PokeBall width={28} height={28} style={{marginTop: "4px"}}/>
            </Flex>
        </Flex>
    )
}

export default Card
