import { defaultThemeOptions } from "../themeNames";

const sansSerifStack = [
  'GreekFallback', // Ensures that greek letters render consistently
  // 'apolline',
  'Calibri',
  '"Gill Sans"',
  '"Gill Sans MT"',
  "Myriad Pro",
  'Myriad',
  '"Liberation Sans"',
  '"Nimbus Sans L"',
  'Open Sans',
  'Tahoma',
  'Geneva',
  'FiraGO',
  '"Helvetica Neue"',
  'Helvetica',
  'Arial',
  'sans-serif'
].join(',')

const serifStack = [
  'Alegreya',
  'apolline',
  // "Grenze",
  'warnock-pro',
  // 'IM Fell English SC',
  'Palatino',
  '"Palatino Linotype"',
  '"Palatino LT STD"',
  '"Book Antiqua"',
  'FiraGO',
  'Georgia',
  'serif'
].join(',')


export const lessWrongTheme: SiteThemeSpecification = {
  shadePalette: {
    fonts: {sansSerifStack, serifStack},
  },
  componentPalette: (shadePalette: ThemeShadePalette) => ({
    primary: {
      // main: '#5f9b65',
      main: '#A9A496',
    },
    secondary: {
      // main: '#5f9b65',
      main: '#A9A496',
    },
    lwTertiary: {
      // main: "#69886e",
      main: "#7f7979",
      dark: "#21672b"
    },
    error: {
      main: '#bf360c',
    },
    background: {
      // if shade.Pale
      default: shadePalette.type === 'light' ? '#F2F2EF' : shadePalette.grey[30],
      // primaryDim: '#e2f1f4',
      // paper: shadePalette.type === 'light' ? '#F2F2EF' : shadePalette.grey[200],
      pageActiveAreaBackground: shadePalette.type === 'light' ? '#FCFCFB' : shadePalette.grey[30],
    },
    panelBackground: {
      default: shadePalette.type === 'light' ? '#FCFCFB': shadePalette.grey[55],
      recentDiscussionThread: shadePalette.type === 'light' ? "#FCFCFB" : shadePalette.grey[55],
    },
    header: {
      // text: "#f8f8f8",
      // text: shadePalette.type === 'light' ? shadePalette.grey[0] : "#FCFCFB",
      // fontSize: "2.0rem",
      background: shadePalette.type === 'light' ? '#F2F2EF' : shadePalette.grey[30],
      // background: shadePalette.grey[900],
    },
  }),
  make: (palette: ThemePalette) => ({
    typography: {
      fontFamily: sansSerifStack,
      fontDownloads: ['https://use.typekit.net/ufy6jqt.css',
                      'https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,500;1,400&display=swap',
                      'https://free.bboxtype.com/embedfonts/?family=FiraGO:400,400i,700,700i'],
      postStyle: {
        fontFamily: serifStack,
      },
      postsItemTitle: {
        fontFamily: sansSerifStack,
      },
      headerStyle: {
        fontFamily: sansSerifStack,
        // fontFamily: "arial",
      },
      caption: {
        // captions should be relative to their surrounding content, so they are unopinionated about fontFamily and use ems instead of rems
        fontFamily: "unset",
        fontSize: '.85em'
      },
      body2: {
        fontSize: "1.16rem"
      },
      commentStyle: {
        fontFamily: sansSerifStack,
      },
      errorStyle: {
        color: palette.error.main,
        fontFamily: sansSerifStack
      },
      // headline: {
      //   fontFamily: 'Diplomata SC',
      // },
      subheading: {
        fontFamily: serifStack,
      },
      title: {
        // fontFamily: 'cabazon',
        fontFamily: 'Mechanics Regular',
        // fontSize: "25px !important",
        // fontWeight: 700,
        // fontFamily: serifStack,
        // fontWeight: 10,
      },
    },
    overrides: {
      PostsVote: {
        voteScores: {
          margin: "25% 15% 15% 15%"
        }
      },
      MuiTooltip: {
        tooltip: {
          fontSize: "1rem",
          padding: ".7rem",
          zIndex: 10000000
        }
      },
      MuiDialogContent: {
        root: {
          fontFamily: sansSerifStack,
          fontSize: "1.16rem",
          lineHeight: "1.5em"
        }
      },
      MuiMenuItem: {
        root: {
          fontFamily: sansSerifStack,
          color: palette.grey[800],
          fontSize: "1.1rem",
          lineHeight: "1em"
        }
      },
      MuiListItem: {
        root: {
          paddingTop: 8,
          paddingBottom: 8
        }
      },
      MuiCard: {
        root: {
          borderRadius: 1,
          boxShadow: palette.boxShadow.lwCard,
        }
      }
    }
  }),
};
