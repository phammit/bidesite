import { createMuiTheme } from "@material-ui/core/styles";
import { PaletteType, Theme } from "@material-ui/core";
import propsFactory from "./props";
import green from "@material-ui/core/colors/green";
import yellow from "@material-ui/core/colors/yellow";

export const BREAKPOINT_XS = 0; // Use 375 as reference for XS screens
export const BREAKPOINT_SM = 768;
export const BREAKPOINT_MD = 992;
export const BREAKPOINT_LG = 1200;
export const BREAKPOINT_XL = 1600;

export const FONT_THIN = 100;
export const FONT_REGULAR = 400;
export const FONT_MEDIUM = 500;
export const FONT_BOLD = 600;

export const FONT_BARON_SANS = "BaronSans, Helvetica, Arial";
export const FONT_CASLON = "CaslonRHThin, Big Caslon, Palatino";
export const FONT_MINION = "minion-pro, Times New Roman, serif";
export const FONT_PROXIMA_NOVA = "proxima-nova, Helvetica, Arial, sans-serif";
export const FONT_ACUMIN_PRO = "acumin-pro, Arial, Helvetica, sans-serif";

const theme = createMuiTheme({
  typography: {
    fontFamily: FONT_BARON_SANS,
    htmlFontSize: 12 // default is 14, showing here for easier reading of values, also set in index.css
  },
  palette: {
    primary: {
      main: '#fffff',
    },
    secondary: {
      main: yellow[500],
    }
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: BREAKPOINT_XS,
      sm: BREAKPOINT_SM,
      md: BREAKPOINT_MD,
      lg: BREAKPOINT_LG,
      xl: BREAKPOINT_XL
    }
  },
});

export default theme;

/*
// Breakpoints by the numbers!
export const BREAKPOINT_XS = 0; // Use 375 as reference for XS screens
export const BREAKPOINT_SM = 768;
export const BREAKPOINT_MD = 992;
export const BREAKPOINT_LG = 1200;
export const BREAKPOINT_XL = 1600;

// font weights use Common Weight Name Mapping found at
// https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
export const FONT_THIN = 100;
export const FONT_REGULAR = 400;
export const FONT_MEDIUM = 500;
export const FONT_BOLD = 600;

export const FONT_BARON_SANS = "BaronSans, Helvetica, Arial";
export const FONT_CASLON = "CaslonRHThin, Big Caslon, Palatino";
export const FONT_MINION = "minion-pro, Times New Roman, serif";
export const FONT_PROXIMA_NOVA = "proxima-nova, Helvetica, Arial, sans-serif";
export const FONT_ACUMIN_PRO = "acumin-pro, Arial, Helvetica, sans-serif";

export default (
    type: PaletteType = 'light',
    smDown: boolean = false
) => {
    const defaultTheme = createMuiTheme({
        typography: {
          htmlFontSize: 12
        },
        palette: {
          type
        },
        spacing: 8,
        breakpoints: {
          values: {
            xs: BREAKPOINT_XS,
            sm: BREAKPOINT_SM,
            md: BREAKPOINT_MD,
            lg: BREAKPOINT_LG,
            xl: BREAKPOINT_XL
          }
        }
      });
    
      const theme = createMuiTheme({
        overrides: {
          MuiAppBar: {
            root: {
              boxShadow: "none"
            },
            colorDefault: {
              backgroundColor: defaultTheme.palette.background.paper
            }
          },
          MuiContainer: {
            root: {
              paddingLeft: 16,
              paddingRight: 16,
              [defaultTheme.breakpoints.up("sm")]: {
                paddingLeft: 30,
                paddingRight: 30
              },
              [defaultTheme.breakpoints.up("md")]: {
                paddingLeft: 50,
                paddingRight: 50
              },
              [defaultTheme.breakpoints.up("lg")]: {
                paddingLeft: 40,
                paddingRight: 40
              },
              [defaultTheme.breakpoints.up("xl")]: {
                paddingLeft: 90,
                paddingRight: 90
              }
            }
          },
          MuiFormControl: {
            marginNormal: {
              marginTop: 12,
              marginBottom: 8
            }
          },
          MuiFormLabel: {
            root: {
              "&.Mui-error": {
                transform: "translate(20px, -130%)"
              },
              cursor: "pointer",
              fontSize: "13pt"
            }
          },
          MuiInput: {
            underline: {
              paddingBottom: 10,
              "&:before": {
                transition: "none",
                borderBottom: "1px solid #d8d8d8"
              },
              "&:after": {
                transition: "none",
                borderBottom: "1px solid #d8d8d8"
              }
            }
          },
          MuiInputBase: {
            root: {
              color: "#000000",
              backgroundColor: "#ffffff",
              "&.Mui-disabled": {
                color: "#c9c9c9",
                backgroundColor: "#fafafa",
                "& > .MuiSelect-icon": {
                  color: "#aeaeae"
                }
              }
            },
            input: {
              color: "inherit",
              fontSize: defaultTheme.typography.pxToRem(14)
            }
          },
          MuiInputLabel: {
            root: {
              color: "#999999 !important",
              "&.Mui-disabled": {
                color: "#c9c9c9",
                opacity: 0.5
              }
            },
            outlined: {
              top: "50%",
              transform: "translate(20px, -50%)",
              "&.MuiInputLabel-shrink": {
                top: 0
              }
            }
          },
          MuiOutlinedInput: {
            input: {
              padding: "14px 20px"
            },
            notchedOutline: {
              borderWidth: 1,
              borderColor: "#E9E9E9 !important",
              borderRadius: 0,
              "& legend": {
                "& span": {
                  letterSpacing: "0.34pt"
                }
              }
            }
          },
          MuiInputAdornment: {
            root: {
              fontSize: defaultTheme.typography.pxToRem(11),
              color: "#666666"
            }
          },
          MuiSelect: {
            root: {
              whiteSpace: "normal",
              height: "auto",
              lineHeight: "17px",
              paddingRight: 40
            },
            select: {
              "&:focus": {
                backgroundColor: "#FFFFFF"
              },
              "& option": {
                cursor: "pointer",
                fontSize: "13pt"
              }
            },
            icon: {
              color: "inherit",
              top: "initial",
              right: 14
            },
            iconOutlined: {
              right: 14
            }
          },
          MuiCheckbox: {
            root: {
              width: 30,
              height: 30,
              padding: 0,
              margin: "5px 10px 5px",
              border: "1px solid #E9E9E9",
              borderRadius: "initial",
              backgroundColor: "#ffffff",
              "&:hover": {
                backgroundColor: "#ffffff",
                borderColor: "#CCCCCC"
              }
            },
            colorSecondary: {
              "&.Mui-checked": {
                borderColor: "#CCCCCC",
                color: "#000000",
                "&&:hover": {
                  backgroundColor: "#ffffff"
                }
              }
            }
          },
          MuiRadio: {
            root: {
              color: "#E9E9E9"
            },
            colorPrimary: {
              "&.Mui-checked": {
                color: "#CCCCCC",
                "&&:hover": {
                  backgroundColor: "unset"
                }
              }
            }
          },
          MuiButton: {
            root: {
              fontFamily: FONT_BARON_SANS,
              fontSize: defaultTheme.typography.pxToRem(12),
              fontWeight: FONT_MEDIUM,
              color: "#999999",
              lineHeight: "normal",
              letterSpacing: 1,
              padding: 15,
              borderRadius: 0,
              boxShadow: "none !important"
            },
            text: {
              padding: undefined
            },
            contained: {
              "&$disabled": {
                color: "#FFFFFF",
                backgroundColor: "#DDDDDD"
              }
            },
            containedPrimary: {
              color: "#FFFFFF",
              backgroundColor: "#000000",
              "&:hover": {
                backgroundColor: "#404040",
                borderColor: "#404040"
              }
            },
            containedSecondary: {
              color: "#000000",
              backgroundColor: "#FFFFFF",
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: "#cccccc",
              "&:hover": {
                backgroundColor: "#fafafa",
                borderColor: "#cccccc"
              }
            }
          },
          MuiMobileStepper: {
            root: {
              padding: 10
            },
            dot: {
              width: 6,
              height: 6,
              margin: "0 3px",
              backgroundColor: "#ffffff80"
            },
            dotActive: {
              backgroundColor: "#ffffff"
            }
          },
          MuiLink: {
            root: {
              fontFamily: FONT_BARON_SANS,
              fontWeight: FONT_REGULAR,
              fontSize: defaultTheme.typography.pxToRem(13),
              lineHeight: defaultTheme.typography.pxToRem(20),
              color: "#666666",
              letterSpacing: 0.2,
              textTransform: "initial",
              padding: 0
            }
          },
          MuiCard: {
            root: {
              width: "100%"
            }
          },
          MuiListItem: {
            root: {
              "&:empty": {
                padding: 0
              }
            }
          },
          MuiBackdrop: {
            root: {
              position: "absolute",
              backgroundColor: "#fafafacc"
            }
          },
          MuiDrawer: {
            paper: {
              boxShadow: "0 0 2px 2px #0000001a"
            }
          },
          MuiDialog: {
            paper: {
              boxShadow: "0 1px 2px 1px #0000001a"
            }
          },
          MuiDialogContent: {
            root: {
              margin: 0,
              [defaultTheme.breakpoints.up("xs")]: {
                overflow: "hidden",
                paper: {
                  padding: 0
                },
                padding: "40px 30px",
                overflowY: "auto"
              },
              [defaultTheme.breakpoints.up("sm")]: {
                overflow: "hidden",
                paper: {
                  padding: 0
                },
                padding: "60px 30px"
              },
              [defaultTheme.breakpoints.up("md")]: {
                padding: "60px"
              },
              [defaultTheme.breakpoints.up("lg")]: {
                padding: "60px"
              },
              [defaultTheme.breakpoints.up("xl")]: {
                padding: "80px"
              }
            }
          },
          MuiIconButton: {
            root: {
              padding: 10,
              fontSize: defaultTheme.typography.pxToRem(25),
              "&:hover": {
                backgroundColor: "unset"
              }
            },
            colorPrimary: {
              "&:hover": {
                backgroundColor: "unset"
              }
            }
          },
          MuiTouchRipple: {
            rippleVisible: {
              opacity: 0,
              animation: "unset"
            }
          },
          MuiTooltip: {
            tooltip: {
              backgroundColor: "#f5f5f5",
              padding: "40px 30px"
            },
            tooltipPlacementTop: {
              margin: 0
            },
            popper: {
              pointerEvents: "auto"
            },
            arrow: {
              fontSize: 12,
              color: "#f5f5f5"
            }
          },
          MuiLinearProgress: {
            root: {
              height: 2
            }
          },
          MuiTypography: {
            root: {
              textTransform: "uppercase" as const,
              fontSize: defaultTheme.typography.pxToRem(12),
              display: "block",
              "word-break": "break-word"
            },
            h1: {
              fontFamily: FONT_CASLON,
              fontWeight: FONT_THIN,
              fontSize: defaultTheme.typography.pxToRem(26),
              lineHeight: defaultTheme.typography.pxToRem(24),
              color: "#000000",
              letterSpacing: 0,
              [defaultTheme.breakpoints.up("lg")]: {
                fontSize: defaultTheme.typography.pxToRem(30),
                lineHeight: defaultTheme.typography.pxToRem(28),
                letterSpacing: -0.5
              },
              [defaultTheme.breakpoints.up("xl")]: {
                fontSize: defaultTheme.typography.pxToRem(34),
                lineHeight: defaultTheme.typography.pxToRem(32)
              }
            },
            h2: {
              fontFamily: FONT_CASLON,
              fontWeight: FONT_THIN,
              fontSize: defaultTheme.typography.pxToRem(22),
              lineHeight: defaultTheme.typography.pxToRem(20),
              color: "#000000",
              letterSpacing: 0,
              [defaultTheme.breakpoints.up("lg")]: {
                fontSize: defaultTheme.typography.pxToRem(25),
                lineHeight: defaultTheme.typography.pxToRem(23),
                letterSpacing: -0.5
              },
              [defaultTheme.breakpoints.up("xl")]: {
                fontSize: defaultTheme.typography.pxToRem(28),
                lineHeight: defaultTheme.typography.pxToRem(26)
              }
            },
            h3: {
              fontFamily: FONT_CASLON,
              fontWeight: FONT_THIN,
              fontSize: defaultTheme.typography.pxToRem(18),
              lineHeight: defaultTheme.typography.pxToRem(18),
              color: "#000000",
              letterSpacing: 0,
              [defaultTheme.breakpoints.up("lg")]: {
                fontSize: defaultTheme.typography.pxToRem(20),
                lineHeight: defaultTheme.typography.pxToRem(18)
              },
              [defaultTheme.breakpoints.up("xl")]: {
                fontSize: defaultTheme.typography.pxToRem(22),
                lineHeight: defaultTheme.typography.pxToRem(20)
              }
            },
            h4: {
              fontFamily: FONT_BARON_SANS,
              fontWeight: FONT_MEDIUM,
              fontSize: defaultTheme.typography.pxToRem(14),
              lineHeight: defaultTheme.typography.pxToRem(24),
              color: "#000000",
              letterSpacing: 1
            },
            h5: {
              fontFamily: FONT_BARON_SANS,
              fontWeight: FONT_MEDIUM,
              fontSize: defaultTheme.typography.pxToRem(12),
              lineHeight: defaultTheme.typography.pxToRem(18),
              color: "#000000",
              letterSpacing: 1
            },
            h6: {
              fontFamily: FONT_CASLON,
              fontWeight: FONT_THIN,
              fontSize: defaultTheme.typography.pxToRem(14),
              lineHeight: defaultTheme.typography.pxToRem(15),
              color: "#000000",
              letterSpacing: 0,
              [defaultTheme.breakpoints.up("lg")]: {
                fontSize: defaultTheme.typography.pxToRem(15),
                lineHeight: defaultTheme.typography.pxToRem(15)
              },
              [defaultTheme.breakpoints.up("xl")]: {
                fontSize: defaultTheme.typography.pxToRem(16),
                lineHeight: defaultTheme.typography.pxToRem(16)
              }
            },
            subtitle1: {
              fontFamily: FONT_BARON_SANS,
              fontSize: defaultTheme.typography.pxToRem(14),
              lineHeight: defaultTheme.typography.pxToRem(20),
              color: "#000000",
              letterSpacing: 0.5
            },
            subtitle2: {
              fontFamily: FONT_BARON_SANS,
              fontWeight: FONT_THIN,
              fontSize: defaultTheme.typography.pxToRem(18),
              lineHeight: defaultTheme.typography.pxToRem(22),
              color: "#000000",
              letterSpacing: 0.2
            },
            body1: {
              fontFamily: FONT_BARON_SANS,
              fontSize: defaultTheme.typography.pxToRem(13),
              lineHeight: defaultTheme.typography.pxToRem(20),
              textTransform: "initial" as const,
              color: "#666666",
              letterSpacing: 0.2
            },
            body2: {
              fontFamily: FONT_BARON_SANS,
              fontSize: defaultTheme.typography.pxToRem(14),
              lineHeight: defaultTheme.typography.pxToRem(20),
              color: "#000000",
              letterSpacing: 0.5
            },
            caption: {
              fontFamily: FONT_BARON_SANS,
              fontSize: defaultTheme.typography.pxToRem(12),
              lineHeight: defaultTheme.typography.pxToRem(16),
              color: "#666666",
              letterSpacing: 0.1,
              textTransform: "initial" as const
            },
            button: {
              fontFamily: FONT_BARON_SANS,
              fontWeight: FONT_MEDIUM,
              fontSize: defaultTheme.typography.pxToRem(12),
              lineHeight: "normal"
            }
          },
        },
        props: propsFactory(defaultTheme),
        breakpoints: defaultTheme.breakpoints,
        mixins: {
          toolbar: {
            minHeight: 50,
            paddingLeft: 16,
            paddingRight: 5
          }
        },
        typography: {
          fontFamily: FONT_BARON_SANS,
          htmlFontSize: 12 // default is 14, showing here for easier reading of values, also set in index.css
        },
        spacing: factor => {
          return (smDown ? 8 : 10) * factor;
        },
        palette: {
          primary:
            type === "light"
              ? {
                  light: "#484848",
                  main: "#212121",
                  dark: "#000000",
                  contrastText: "#ffffff"
                }
              : {
                  light: "#ffffff",
                  main: "#fafafa",
                  dark: "#c7c7c7",
                  contrastText: "#000000"
                },
          secondary: {
            light: "#e8e8e8",
            main: "#bdbdbd",
            dark: "#8d8d8d",
            contrastText: "#fafafa"
          },
          background: {
            default: "#ffffff"
          },
          type: type
        },
      });
    
      //return createMuiTheme(defaultTheme, theme);
      return defaultTheme;
    

}
*/


