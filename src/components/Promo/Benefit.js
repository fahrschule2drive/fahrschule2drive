import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  benefitItem: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  benefitImage: {
    marginBottom: '30px',
  },
  title: {
    color: 'var(--color-white)',
    textAlign: 'center',
  },
  benefitLanguages: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '8px',
    '& > img': {
      display: 'block',
      height: '20px',
      margin: '0 6px',
      width: '20px',
    }
  },
}));

const Benefit = ({
  benefit,
  children,
}) => {
  const styles = useStyles();

  return (
    <div className={styles.benefitItem}>
      <img
        alt="benefit"
        className={styles.benefitImage}
        src={benefit.icon.url}
      />
      <p className={styles.title}>
        {benefit.title}
      </p>
      {children}
    </div>
  );
}

export default Benefit;
