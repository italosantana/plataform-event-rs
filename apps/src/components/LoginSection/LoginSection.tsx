import { Box, Input, TextField, Typography } from "@mui/material"
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
                    // justifyContent: 'center',
                    flexDirection: "column",
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
                >Inscreva-se gratuitamente</Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: 'center',
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Input
                        sx={{ border: '1px solid #FFF', borderRadius: 1, color: '#8D8D99', height: "56px", width: "327px", pl: "27px" }}
                        disableUnderline
                        placeholder="Digite seu nome completo"
                        id="basic-input"
                    />
                    <Input
                        sx={{ border: '1px solid #FFF', borderRadius: 1, mt: '27px', mb: "24px", color: '#8D8D99', height: "56px", width: "327px", pl: "27px" }}
                        disableUnderline
                        placeholder="Digite seu email"
                        id="basic-input"
                    />
                </Box>
                {/* <TextField label="email" id="fullWidth" /> */}
                <GreenButton>GARANTIR MINHA VAGA</GreenButton>
            </Box>
        </Box>
    )
}