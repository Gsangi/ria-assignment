import {Box, Circle, Flex, Text} from "@chakra-ui/react";

const CustomProfileCircle = ({text}) => {
    return (
        <Flex direction="column" justifyContent="center" alignContent="center" id = "CustomProfileCircle">
            <Circle size='40px' border="4px" borderColor="black" color='white'>
                    <Box as='span' fontSize='15px' color="black" textStyle="circleProfileText">
                        499
                    </Box>
            </Circle>
           <Text textStyle="circleProfileText" my="6px">{text}</Text>
        </Flex>
    )
}

export default CustomProfileCircle
