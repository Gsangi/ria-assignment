import {Flex, Text} from "@chakra-ui/react";
import {TeamRocket} from "../../components/Icons/teamRocket";
import {leastSquaresFitCalc} from "../../utils";

const NoMatchPage = () => {
    return (
        <Flex bg="custom.danger" justifyContent="center" alignItems="center" height="100vh" flexDirection="column">
            <Text textAlign="center" textStyle="errorWatermark" zIndex="1" position="absolute"
                  fontSize={leastSquaresFitCalc(
                      new Map([
                          [375, 200],
                          [1440, 700],
                      ])
                  )}>404</Text>
            <Flex position='relative' zIndex="2" alignItems="center" flexDirection="column">
                <TeamRocket width={
                    leastSquaresFitCalc(
                        new Map([
                            [375, 262], [1440, 690]
                        ])
                    )}
                            height={
                                leastSquaresFitCalc(
                                    new Map([
                                        [375, 262], [1440, 690]
                                    ])
                                )}/>
                <Flex direction="row" align="center" justify="center">
                    <Text textStyle="errorHeading" color="white" fontSize={
                        leastSquaresFitCalc(
                            new Map([
                                [375, 25], [1440, 48]
                            ])
                        )}>The rocket team</Text>
                    <Text ml="2px" textStyle="errorHeading" color="black" fontSize={
                        leastSquaresFitCalc(
                            new Map([
                                [375, 25], [1440, 48]
                            ])
                        )}> has won this time</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default NoMatchPage;
