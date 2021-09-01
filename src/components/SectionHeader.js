import classnames from 'classnames';
import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  wrapper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  icon: {
    backgroundPosition: '0 0',
    backgroundRepeat: 'no-repeat',

    '@media screen and (max-width: 767px)': {
      transform: 'scale(0.8)',
    },
  },
}));

const SectionHeader = ({
  className,
  iconUrl,
  title,
}) => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <div className={classnames(styles.icon, className)} style={{ backgroundImage: `url(${iconUrl})` }}/>
      <h2 className={styles.title}>
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
