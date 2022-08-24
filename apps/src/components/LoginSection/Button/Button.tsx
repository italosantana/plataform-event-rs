import { Button as MuiButton } from '@mui/material';


type Props = {
    children?: React.ReactNode;
    className?: string;
    href?: string;
    onClick?: React.MouseEventHandler;
};

export const GreenButton = ({
    children,
    className,
    href,
    onClick,
}: Props) => {
    return (
        <MuiButton
            // className={className}
            // variant="outlined"
            // href={href}
            // onClick={onClick}
            sx={{
                color: '#FFFFFF',
                height: '54px',
                width: "326px",
                border: '1px solid none',
                borderRadius: '4px',
                backgroundColor: "#00875F",
                // mb: '16px',
                ml: '27px',
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: '14px',
                textTransform: 'Capitlize',
                // transform: 'matrix(-1, 0, 0, 1, 0, 0) rotateY(-180deg)',
                // transition: 'transform 0.8s',
                // transitionDelay: '1ms',
                '&:hover': {
                    backgroundColor: "#00874F",
                },
            }}
        >
            {children}
        </MuiButton>
    );
};