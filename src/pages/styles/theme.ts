import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: true,
}

export const theme = extendTheme({
    config,

    styles: {
        global: {
            body: {
                padding: 0,
                margin: 0,
                color: '#222',
                background: 'orangered',
            },
            h2: {
                fontSize: '44px',
                fontWeight: 'bolder',
            },
            a: {
                color: 'inherit',
                textDecoration: 'none'
            },

        }
    }
})