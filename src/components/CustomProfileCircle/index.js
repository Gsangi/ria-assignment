import { Box, Circle, Flex, Text } from "@chakra-ui/react";
import { leastSquaresFitCalc } from "../../utils";

const CustomProfileCircle = ({ text }) => {
    return (
        <Flex direction="column" justifyContent="center" alignContent="center" id="CustomProfileCircle">
            <Circle
                size={leastSquaresFitCalc(new Map([[375, 30], [1440, 40]]))}
                borderWidth={leastSquaresFitCalc(new Map([[375, 3], [1440, 4]]))}
                borderColor="black"
                color="white"
            >
                <Box
                    as="span"
                    fontSize={leastSquaresFitCalc(new Map([[375, 10], [1440, 15]]))}
                    color="black"
                    textStyle="circleProfileText"
                >
                    499
                </Box>
            </Circle>
            <Text
                textStyle="circleProfileText"
                my={leastSquaresFitCalc(new Map([[375, 3], [1440, 6]]))}
            >
                {text}
            </Text>
        </Flex>
    );
};

export default CustomProfileCircle;
