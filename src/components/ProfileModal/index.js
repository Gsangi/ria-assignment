// ProfileModal.js
import { Box, Flex, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from "@chakra-ui/react";

const ProfileModal = ({ isOpen, onClose, pokemon }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{pokemon.name}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Flex>
                        <Flex>Image</Flex>
                        <Flex>
                            <Text>{pokemon.name}</Text>
                            <Text>Generation</Text>
                            <Box>
                                <Text>Healthy Points</Text>
                                <Text>{pokemon.hp}</Text>
                                <Text>Healthy Points</Text>
                                <Text>{pokemon.hp}</Text>
                            </Box>
                        </Flex>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ProfileModal;
