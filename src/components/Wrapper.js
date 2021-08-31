import classnames from 'classnames';
import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  wrapper: {
    width: '100%',
    maxWidth: '1350px',
    margin: '0 auto',
    padding: '0 20px',

    '@media screen and (min-width: 992px)': {
      paddingLeft: '30px',
      paddingRight: '30px',
    },
  },
}));

const Wrapper = ({ children, className }) => {
  const styles = useStyles();

  return (
    <div
      className={classnames(styles.wrapper, {
        [className]: className,
      })}
    >
      {children}
    </div>
  );
}

export default Wrapper;
