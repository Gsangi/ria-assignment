import {Flex, Text} from "@chakra-ui/react";

const CustomLegendaryPoints = ({text, points}) => {
    return (
        <Flex textStyle="heading3" textColor="#FDFDFD" direction="column">
            <Text>{text}</Text>
            <Text>{points}</Text>
        </Flex>
    )
}

export default CustomLegendaryPoints
