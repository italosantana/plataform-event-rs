import { Box, Input, TextField, Typography } from "@mui/material"
import theme from "../../styles/theme"
import { GreenButton } from "./Button/Button"


export const LoginSection = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: 'center',
                flexDirection: "row",
                alignItems: "center",
                height: "100vh",
                maxWidth: "100vw",


            }}
        >
            <Box
                sx={{
                    border: "1px solid #FFF",
                    height: "320px",
                    width: "391px",
                    justifyContent: "center",
                    backgroundColor: "#121214",
                    display: "flex",
                    alignItems: 'center',
                    flexDirection: "column",
                    [theme.breakpoints.down('mobile')]: {
                        maxWidth: "88vw",
                        button: {
                            maxWidth: "70vw",
                            mb: 2,
                        }
                    }
                }}
            >
                <Typography
                    sx={{
                        fontFamily: "Roboto",
                        fontWeight: "700",
                        fontSize: "24px",
                        lineHeight: "33.6px",
                        color: "#E1E1E6",
                        textAlign: "center",
                        m: '19px',
                    }}
                >Acessar sua conta</Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: 'center',
                        flexDirection: "column",
                        alignItems: "center",
                        [theme.breakpoints.down('mobile')]: {
                            ".basic-input": {
                                maxWidth: "70vw"
                            },
                        }
                    }}
                >
                    <Input
                        sx={{ border: '1px solid #FFF', borderRadius: 1, color: '#8D8D99', height: "56px", width: "327px", pl: "27px" }}
                        disableUnderline
                        placeholder="Digite seu email"
                        className="basic-input"
                    />
                    <Input
                        sx={{ border: '1px solid #FFF', borderRadius: 1, mt: '27px', mb: "24px", color: '#8D8D99', height: "56px", width: "327px", pl: "27px" }}
                        disableUnderline
                        placeholder="Digite sua senha"
                        className="basic-input"
                    />
                </Box>
                {/* <TextField label="email" id="fullWidth" /> */}
                <GreenButton>ACESSAR</GreenButton>
            </Box>
        </Box>
    )
}