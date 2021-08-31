import classnames from 'classnames';
import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'grid',
    gridGap: '20px 20px',

    '@media screen and (min-width: 992px)': {
        gridGap: '30px 30px',
    },
  },
  columns2: {
    gridTemplateColumns: '1fr 1fr',
  },
  columns3: {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
  columns4: {
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
  },
}));

const Grid = ({
  children,
  columns,
}) => {
  const styles = useStyles();

  return (
    <div
      className={classnames(styles.wrapper, {
        [styles.columns2]: columns === 2,
        [styles.columns3]: columns === 3,
        [styles.columns4]: columns === 4,
      })}
    >
      {children}
    </div>
  );
}

export default Grid;
