import React from 'react';
import { makeStyles } from '@material-ui/core';

export default function Footer() {
  // Style Hook
  const useStyles = makeStyles({
    footer: {
      minHeight: '50px',
      position: 'relative',
      display: 'flex',
      textAlign: 'center',
    },
    footerSpan: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '3px',
      backgroundColor: '#247B7B',
      color: '#FFFFFA',
      fontSize: '16px',
      fontFamily: 'Pacifico',
    },
  });
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <span className={classes.footerSpan}>Finch</span>
    </footer>
  );
}
