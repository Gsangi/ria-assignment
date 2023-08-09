import { Flex, Spinner } from "@chakra-ui/react";

const Loader = ({ color }) => (
    <Flex height="100%" width="100%" justifyContent="center" alignItems="center">
        <Spinner size="lg" color={color} />
    </Flex>
);

export default Loader;
