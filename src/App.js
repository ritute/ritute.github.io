import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faFacebookF,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';

import flowerOuterImage from './images/flower-outer.png';
import flowerInnerImage from './images/flower-inner.png';

const styles = theme => ({
  app: {
    height: '100vh',
    color: '#fff',
    [theme.breakpoints.up('xs')]: {
      padding: 100,
    },
    [theme.breakpoints.only('xs')]: {
      padding: 20,
    },
  },
  headingContainer: {
    position: 'relative',
  },
  heading: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(2)}px`,
    marginBottom: theme.spacing(1),
    fontWeight: 400,
  },
  nickname: {
    backgroundColor: 'rgb(151, 34, 156)',
    fontWeight: 500,
  },
  fullname: {
    backgroundColor: 'rgb(70, 70, 70)',
    fontSize: '3.5rem',
  },
  jobTitle: {
    backgroundColor: 'rgb(44, 44, 44)',
    fontSize: '3.5rem',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.only('xs')]: {
      fontSize: '3rem',
    },
  },
  flower: {
    pointerEvents: 'none',
    position: 'absolute',
    right: 0,
    top: -40,
  },
  flowerOuter: {
    width: 338,
    height: 300,
    background: `transparent url(${flowerOuterImage}) no-repeat 0 0`,
    animation: '$outer-spin infinite 12s linear'
  },
  flowerInner: {
    width: 56,
    height: 54,
    background: `transparent url(${flowerInnerImage}) no-repeat 0 0`,
    animation: '$inner-spin infinite 12s linear'
  },
  '@keyframes outer-spin': {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '50%': {
      transform: 'rotate(10deg) scale(1,1)'
    },
    '100%': {
      transform: 'rotate(0deg)'
    }
  },
  '@keyframes inner-spin': {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '100%': {
      transform: 'rotate(360deg)'
    }
  },
  divider: {
    height: 4,
    backgroundColor: 'rgb(151, 34, 156)',
  },
  socialButton: {
    color: '#fff',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#000',
      transform: 'scale(1.1)',
      transition: `all .5s ${theme.transitions.easing.easeInOut}`,
    }
  },
  social: {
    paddingTop: theme.spacing(4),
    textAlign: 'center',
    [theme.breakpoints.only('xs')]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
  },
  socialLink: {
    flexBasis: 0,
  },
  socialIcon: {
    marginRight: theme.spacing(1),
  },
});

const App = ({ classes }) => {

  const renderHeadings = () => (
    <Grid
      container
      item
      direction="column"
      alignItems="flex-start"
      className={classes.headingContainer}
    >
      <Grid item>
        <Typography
          variant="h1"
          className={classNames(classes.nickname, classes.heading)}
        >
          {'ritut\u0117'}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="h2"
          className={classNames(classes.fullname, classes.heading)}
        >
          rita bancevicius
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="h2"
          component="h3"
          gutterBottom
          className={classNames(classes.jobTitle, classes.heading)}
        >
          software engineer
        </Typography>
      </Grid>
      <Hidden smDown>
        {renderFlower()}
      </Hidden>
    </Grid>
  );

  const renderFlower = () => (
    <Grid item className={classes.flower}>
      <Grid
        container
        item
        className={classes.flowerOuter}
        justify="center"
        alignItems="center"
      >
        <Grid item className={classes.flowerInner}></Grid>
      </Grid>
    </Grid>
  );

  const socialLinks = [
    {
      label: 'Email',
      icon: faEnvelope,
      link: 'mailto:rita@ritute.com'
    },
    {
      label: 'LinkedIn',
      icon: faLinkedinIn,
      link: 'https://linkedin.com/in/ritute'
    },
    {
      label: 'Github',
      icon: faGithub,
      link: 'https://github.com/ritute'
    },
    {
      label: 'Facebook',
      icon: faFacebookF,
      link: 'https://www.facebook.com/rituteb'
    },
  ];

  const renderSocialLinks = () => (
    <Grid
      container
      item
      className={classes.social}
      justify="center"
      spacing={2}
    >
      {socialLinks.map((socialLink, index) => (
        <Grid
          item
          xs={6} sm={4} md={3}
          className={classes.socialLink}
          key={index}
        >
          <Button
            className={classes.socialButton}
            size="large"
            href={socialLink.link}
            target="_blank"
          >
            <FontAwesomeIcon
              icon={socialLink.icon}
              size="lg"
              className={classes.socialIcon}
            />
          {socialLink.label}
          </Button>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <React.Fragment>
      <CssBaseline/>
      <Container maxWidth="md" className={classes.app}>
        <Grid container direction="column">
          {renderHeadings()}
          <Divider className={classes.divider}/>
          {renderSocialLinks()}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default withStyles(styles)(App);
