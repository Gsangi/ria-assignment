import {extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: {
            // styles for the `body`
            body: {
                height: "100%",
                color: "#212121",
            },
            html: {
                height: "100%",
            },
            "#root": {
                height: "100%",
            },
        },
    },
    fonts: {
        heading: "Karla",
        body: "Source Sans Pro",
    },
    colors: {
        custom: {
            riaDarkRock: "#A1A1A1",
            riaGrassBug: "#70A83B",
            riaIceWater: "#A2CFF0",
            riaFightingDragon: "#F76545",
            riaNormalGosth: "#76AAD8",
            riaFairyGhost: "#A974BC",
            riaGround: "#9B897B",
            riaElectric: "#F7C545",
            third: "#F5DB13",
            primary: "#F2B807",
            secondary: "#F28F16",
            white: "#F6F7F9",
            danger: "#D93E30",
            dark: "#212121"

        }
    },
    textStyles: {
        heading1: {
            color: "#000",
            fontFamily: "karla",
            fontSize: "72px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
            letterSpacing: "4px",
        },
        heading2: {
            fontFamily: "karla",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal"
        },
        heading3: {
            fontFamily: "Karla",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
        },
        errorHeading: {
            color: "#F2F2F2",
            fontFamily: "Karla",
            fontSize: "48px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal"
        },
        errorWatermark: {
            color: "rgba(0, 0, 0, 0.50)",
            fontFamily: "Karla",
            fontSize: "700px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
            letterSpacing: "4px"
        },
        buttonText: {
            color: "#212121",
            textAlign: "center",
            fontFamily: "Karla",
            fontSize: "23px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
        },
        circleProfileText: {
            color: "#4B4B4B",
            textAlign: "center",
            fontFamily: "Karla",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal"
        }
    }
})

export {theme}
