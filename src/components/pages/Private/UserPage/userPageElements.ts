import { AppBar, createStyles, makeStyles, Theme, withStyles } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  background: #1c2025;
  height: 100vh;
`;

export const StyledAppBar = withStyles({
  root: {
    background: '#282C34',
    height: '55px',
    zIndex: 1300,
  },
})(AppBar);

export const LogoWrap = styled.div`
`

export const ToolbarIconWrap = styled.div`
  display: flex;
  align-items: center;
`

const drawerWidth = 200;

export const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    grow: {
      flexGrow: 1,
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
      marginRight: "5px",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(8) - 1,
      },
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      background: '#282C34',
      color: '#fff',
      flexDirection: 'column',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    closeNone: {
      display: 'none',
    },
    subMenuTitle: {
      fontSize: '0.875rem',
      boxSizing: 'border-box',
      listStyle: 'none',
      fontWeight: 500,
      lineHeight: '48px',
      marginTop: '20px',
    },
  })
)


