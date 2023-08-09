import {Box, Circle, Flex, Text} from "@chakra-ui/react";

const CustomProfileCircle = ({number, text}) => {
    return (
        <Flex direction="column" justifyContent="center" alignContent="center" id = "CustomProfileCircle">
            {/*<Circle size="38px" border="3px" my="6px" borderColor="black">*/}
            {/*    {number}*/}
            {/*</Circle>*/}
            <Circle size='40px' border="4px" borderColor="black" color='white'>
                    <Box as='span' fontWeight='bold' fontSize='lg' color="black">
                        1
                    </Box>
            </Circle>
           <Text textStyle="circleProfileText">{text}</Text>
        </Flex>
    )
}

export default CustomProfileCircle
