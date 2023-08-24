import {Flex, Grid, Text} from "@chakra-ui/react";

const CustomLegendaryPoints = ({text, points}) => {
    return (
        <Flex textStyle="heading3" textColor="#FDFDFD" direction="column">
            <Text>{text}</Text>
            <Text>{points}</Text>
            <Grid width="180px" height="8px" bg="white" gridTemplateColumns="repeat(10,1fr)" borderRadius="4px" overflow="hidden">
                <Grid bg="yellow" gridColumn="1/9" />
            </Grid>
        </Flex>
    )
}

export default CustomLegendaryPoints
