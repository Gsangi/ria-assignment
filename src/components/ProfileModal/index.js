import {Box, Flex, Modal, ModalContent, ModalOverlay, Text, useBreakpointValue} from "@chakra-ui/react";
import {DragonPikachu} from "../Icons/dragonPikachu";
import CustomProfileCircle from "../CustomProfileCircle";
import {leastSquaresFitCalc} from "../../utils";

const ProfileModal = ({isOpen, onClose}) => {
    const breakpoint = useBreakpointValue({base: "base", md: "md"});

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={breakpoint === 'base' ? "full" : "xl"}>
            <ModalOverlay/>
            <ModalContent mx="auto" my="auto" overflow="hidden">
                <Flex direction={breakpoint === "base" ? "column" : "row"}>
                    <Flex bg="custom.danger" width={breakpoint === "base" ? "100%" : "365px"}
                          height={leastSquaresFitCalc(new Map([[375, 200], [1440, 371]]))} justifyContent="center"
                          alignItems="center">
                        <DragonPikachu/>
                    </Flex>
                    <Flex direction="column" bg="linear-gradient(180deg, #732119 42.19%, #D93E30 100%)"
                          width={breakpoint === "base" ? "100%" : "460px"}
                          height={leastSquaresFitCalc(new Map([[375, 200], [1440, 371]]))} overflow="hidden">
                        <Text textStyle="cardTitleModal"
                              fontSize={leastSquaresFitCalc(new Map([[375, 16], [1440, 32]]))}
                              textShadow="4px 4px 4px rgba(33, 33, 33, 0.10)"
                              textColor="white" mt="30px" ml="12px" mr="25px">Chazirad</Text>
                        <Text textStyle="GenerationModalTitle"
                              fontSize={leastSquaresFitCalc(new Map([[375, 14], [1440, 28]]))} ml="25px">Generation
                            1</Text>
                        <Flex direction="column" bg="white" mt={2}>
                            <Text>Abilities</Text>
                            <Text>Overgrow - </Text>
                        </Flex>
                        <Flex direction="row" bg="white" mt={2} justifyContent="space-between">
                            <Text>Healty</Text>
                            <Text>Experience</Text>
                        </Flex>
                        <Flex direction="row" mt={2} justifyContent="space-between">
                            <Box bg="white"><CustomProfileCircle/></Box>
                            <Box bg="white"><CustomProfileCircle/></Box>
                            <Box bg="white"><CustomProfileCircle/></Box>
                            <Box bg="white"><CustomProfileCircle/></Box>
                        </Flex>
                    </Flex>
                </Flex>
            </ModalContent>
        </Modal>
    );
}

export default ProfileModal;
