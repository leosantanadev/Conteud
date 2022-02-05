import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },

    styles: {
        body: {
            minWidth: 280,
            p: 0,
            m: 0,
        }
    },

    colors: {
        blue: {
            500: '#243b55',
            600: '#1c2f43',
        },
        green: {
            500: '#76b852',
            600: '#69ab46',
        }
    }
})