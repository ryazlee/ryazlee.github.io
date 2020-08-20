import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
  subtext: '#8078b8',
  link: '#329582',
  palette: {
    primary: {
      main: '#5d297c', 
    },
    secondary: {
      main: '#4860a8',
    },
  },
});

const useStyles = makeStyles({
  root: {
    margin: 'auto',
    maxWidth: 600, 
  },
  title: {
    fontSize: 25,
    color: theme.palette.primary.main,
  },
  subtext: {
    marginBottom: '3%',
    fontSize: 15,
    color: theme.subtext,
  },
  center: {
    margin: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  content: {
    padding: '5%',
  },
  body: {
    fontSize: 15, 
    padding: '3%, 0',
    color: theme.palette.secondary.main,
  },
  footer: {
    fontSize: 15,
    paddingTop: 15,
    color: theme.palette.secondary.main,
  },
  link: {
    color: theme.link,
    textDecoration: 'none',
    '&:hover': {
      fontWeight: 'bold',
    }
  },
});


export default function OutlinedCard() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root + ' ' + classes.center} variant="outlined" raised="true">
        <CardContent className={classes.content}>
          <Typography className={classes.title}>
            Ryan Lee 💻 🥏
          </Typography>
          <Typography className={classes.subtext}> 
            SWE Intern @ Apple
          </Typography>
          <Typography className={classes.body}>
            Hi! My name is Ryan and I am currently a software engineering intern at <a class={classes.link} href="https://www.apple.com/">Apple</a> working for the AppleCare Field Diagnostics and Tools team. This past summer, I interned at <a class={classes.link} href="https://www.snap.com/en-US/">Snap Inc</a> where I was a client developer for the Search team.
            <br/>
            In my free time I enjoy playing ultimate frisbee for <a class={classes.link} href="https://www.youtube.com/channel/UCKgR8SJmRb23k9WPwN0B-zg">Cal UGMO</a> as well as doing small side projects that you can find on my <a class={classes.link} href="https://github.com/ryazlee">Github</a> :).
          </Typography>
          <Typography className={classes.footer}> 
            Want to learn more about me?  Feel free to check out my <a class={classes.link} href="https://ryazlee.github.io/files/ryan_lee_resume.pdf">resume</a>, connect with me on <a class={classes.link} href="https://www.linkedin.com/in/ryazlee/">LinkedIn</a>, or shoot me an <a class={classes.link} href="mailto:ryanjlee@berkeley.edu">email</a>.  I am happy to connect!
          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}

