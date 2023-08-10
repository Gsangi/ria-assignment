import { Flex, Text } from "@chakra-ui/react";
import CustomProfileCircle from "../CustomProfileCircle";
import { DragonPikachu } from "../Icons/dragonPikachu";

const PokemonProfile = ({ text, number, onClick }) => {
    return (
        <Flex height="136px" width="352px" onClick={onClick} ml="17px" my="23px" bg="rgba(246, 247, 249, 1)" borderRadius="8px">
            <Flex display="column" flex="0.75">
                <Text mt="6px" mb="12px" textStyle="heading3" textAlign="center">{text}</Text>
                <Flex direction="row" mt="6px" gap="18px" mr="2px" justifyContent="end">
                    <CustomProfileCircle number={number} text="Attack"/>
                    <CustomProfileCircle number={number} text="Defense"/>
                </Flex>
            </Flex>
            <Flex bg="custom.danger" flex="1.25" justifyContent="center" alignItems="center" borderTopRightRadius="8px" borderBottomRightRadius="8px">
                <DragonPikachu />
            </Flex>
        </Flex>
    )
}

export default PokemonProfile;
