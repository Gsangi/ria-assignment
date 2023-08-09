import { Button } from "@chakra-ui/react";

const CustomButton = (props)=> {
    return (
        <Button
            borderRadius="100px"
            bg="custom.levoBlue"
            color="white"
            fontFamily="poppins"
            {...props}
        >
            {props.children}
        </Button>
    );
};

export default CustomButton;
