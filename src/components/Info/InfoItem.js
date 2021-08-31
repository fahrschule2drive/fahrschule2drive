import classnames from 'classnames';
import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  title: {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '20px',
  },
  description: {
    color: 'var(--color-secondary-text)',
  },
  warning: {
    color: 'var(--color-primary)',
  },
}));

const Benefit = ({
  data,
  index,
}) => {
  const styles = useStyles();

  return (
    <div>
      <h3 className={classnames(styles.title, {
        [styles.warning]: index === 2,
      })}>
        {data.title}
      </h3>
      <p className={styles.description}>
        {data.description}
      </p>
    </div>
  );
}

export default Benefit;
