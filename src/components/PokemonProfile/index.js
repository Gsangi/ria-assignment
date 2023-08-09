import { Flex, Text } from "@chakra-ui/react";
import CustomProfileCircle from "../CustomProfileCircle";

const PokemonProfile = ({ text, number, circleText, onClick }) => {
    return (
        <Flex height="136px" width="352px" onClick={onClick}>
            <Flex display="column">
                <Text my="6px" textStyle="heading3">{text}</Text>
                <Flex direction="row">
                    <CustomProfileCircle number={number} text={circleText}/>
                    <CustomProfileCircle number={number} text={circleText}/>
                </Flex>
            </Flex>
            <Flex>
                Image
            </Flex>
        </Flex>
    )
}

export default PokemonProfile;
