import { createTheme } from '@mui/material/styles';

const theme = createTheme({

    palette: {
        primary: {
            main: '#0889A3',
            contrastText: '#000000',
        },
    },

    components: {
        MuiInput: {
            styleOverrides: {
                width: '100%',
            },
            width: '100%',
        },

        MuiTextField: {
            styleOverrides: {
                root: {
                    input: {
                        color: '#7A869A',
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '16px',
                        lineHeight: '24px',
                        width: '100%',
                    },
                    fieldset: {
                        borderRadius: '10px',
                        borderColor: '#7A869A',
                    },
                    fontWeight: 400,
                    fontSize: 16,
                    color: '#7A869A',
                    justifySelf: 'left',
                    stroke: '#7A869A',
                    backgroundColor: '#FFFFFF',
                    padding: '8px, 0px, 10px, 13px',
                },
            },
        },

        MuiFormControl: {
            styleOverrides: {
                root: {
                    gap: '7px',
                    width: '100%',
                },
            }
        },

        MuiFormControlLabel: {
            styleOverrides: {
                label: {
                    color: '#343640',
                    fontWeight: 400,
                    fontSize: '14px',
                    width: '88px',
                    height: '18px',
                },
            }
        },

        MuiFormLabel: {
            stylesOverrides: {
                root: {
                    color: 'black',
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    fontSize: '14px',
                    letterSpacing: '0.01em',

                },
            },
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#FFFFFF',
                    padding: '8px 16px',
                    gap: '8px',
                    width: '138px',
                    height: '40px',
                    borderRadius: '30px',
                    fontWeight: 500,
                    fontSize: '14px',
                    alignSelf: 'center',
                },
            }
        },

        MuiInputBase: {
            styleOverrides: {
                root: {
                    width: '100%',
                    input: {
                        width: '100%',
                    }
                },
            },
        },

    }
});

export default theme;