import {Flex, Text, useBreakpointValue} from "@chakra-ui/react";
import {MewPokemon} from "../Icons/mewPokemon";
import CustomLegendaryPoints from "../CustomLegendaryPoints";
import {leastSquaresFitCalc} from "../../utils";

const LegendaryProfile = ({pokemon}) => {
    const displayBreakpoint = useBreakpointValue({
        base: 'column',
        md: 'flex'
    })

    return (
        <Flex direction="column" my={leastSquaresFitCalc(new Map([[375, 32], [1440, 40]]))}>
            <Text textStyle="heading1" fontSize={leastSquaresFitCalc(new Map([[375, 20], [1440, 24]]))} fontWeight="400"
                  color="#FDFDFD">Legendaries</Text>
            <Flex gap={leastSquaresFitCalc(new Map([[375, 23], [1440, 270]]))} justifyContent="center"
                  alignItems="center" display={displayBreakpoint}>
                <MewPokemon
                    width={leastSquaresFitCalc(new Map([[375, 252], [1440, 373]]))}
                    height={leastSquaresFitCalc(new Map([[375, 283], [1440, 418]]))}
                />
                <Flex direction="column"
                      width={leastSquaresFitCalc(new Map([[375, 325], [1440, 412]]))}
                      height={leastSquaresFitCalc(new Map([[375, 373], [1440, 417]]))}
                >
                    <Text textStyle="heading1" fontSize={leastSquaresFitCalc(new Map([[375, 18], [1440, 22]]))}
                          textColor="#FDFDFD">{pokemon.name}</Text>
                    <Text textStyle="heading3" fontSize={leastSquaresFitCalc(new Map([[375, 14], [1440, 16]]))}
                          textColor="#FDFDFD">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                        quis enim.
                    </Text>
                    <Flex gap={leastSquaresFitCalc(new Map([[375, 20], [1440, 40]]))} flexWrap="wrap" mt={2}>
                        <CustomLegendaryPoints text="Healthy Points" points="100,000"/>
                        <CustomLegendaryPoints text="Experience" points="100,000"/>
                        <CustomLegendaryPoints text="Attack" points="100,000"/>
                        <CustomLegendaryPoints text="Defense" points="100,000"/>
                        <CustomLegendaryPoints text="Special Attack" points="100,000"/>
                        <CustomLegendaryPoints text="Social Defense" points="100,000"/>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default LegendaryProfile;
