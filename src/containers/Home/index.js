import {Button, Flex, Text, useBreakpointValue} from "@chakra-ui/react";
import * as React from 'react'
import {PikachuHome} from "../../components/Icons/pikachuHome";
import {leastSquaresFitCalc} from "../../utils";

const Home = () => {
    const displayDirection = useBreakpointValue({
        base: 'column-reverse',
        md: 'row'
    })
    const headingText = useBreakpointValue({
        base: 'heading4',
        md: 'heading1'
    })
    const textAlign = useBreakpointValue({
        base: 'center',
        md: ''
    })
    const flexChildHeight = useBreakpointValue({
        base: '50%',
        md: 'auto'
    })
    return (
        <Flex direction={displayDirection} height="100%"
              bgGradient="linear-gradient(180deg, #F5DB13 0%, #F2B807 100%)">
            <Flex id="fav-pok" justifyContent="center">
                <Flex direction="column" gap={leastSquaresFitCalc(new Map([
                    [375, 6], [1440, 64]
                ]))} py="60px" mx={leastSquaresFitCalc(new Map([
                    [375, 7], [1440, 157]
                ]))} justifyContent='center' alignItems="center">
                    <Text textStyle={headingText}>Find all your favourite Pokemon</Text>
                    <Text textStyle="heading2" textAlign={textAlign}>You can know the type of Pokemon, its strengths,
                        disadvantages and
                        abilities</Text>
                    <Button m="16px"
                            mx={0}
                            borderRadius={11}
                            bgColor="#73D677"
                            textAlign="center"
                            justifyContent="center"
                            boxShadow="0px -9px 0px 0px rgba(0, 0, 0, 0.18) inset"
                            textStyle="buttonText"
                            width={231}
                            height={66}
                            flex-shrink={0}
                    >See pokemons</Button>
                </Flex>
            </Flex>
            <Flex height={flexChildHeight}>
                <PikachuHome/>
            </Flex>
        </Flex>
    )
}

export default Home
