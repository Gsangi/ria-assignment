import {Button, Flex, Text} from "@chakra-ui/react";
import * as React from 'react'
import {PikachuHome} from "../../components/Icons/pikachuHome";

const Home = () => {
    return (
        <Flex direction="row"
              bgGradient="linear-gradient(180deg, #F5DB13 0%, #F2B807 100%)">
            <Flex id="fav-pok" justifyContent="center">
                <Flex direction="column" gap={12} py="60px">
                    <Text textStyle="heading1">Find all your favourite Pokemon</Text>
                    <Text textStyle="heading2">You can know the type of Pokemon, its strengths, disadvantages and
                        abilities</Text>
                    <Button m={16}
                            mx={0}
                            borderRadius={11}
                            background="#73D677"
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
            <Flex>
                <PikachuHome/>
            </Flex>
        </Flex>
    )
}

export default Home
