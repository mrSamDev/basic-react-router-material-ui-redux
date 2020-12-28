import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import PropTypes from 'prop-types';

import Header from './Header';
import Drawer from './Drawer';
import useStyles from './styles';

function Layout(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header {...{classes, handleDrawerOpen, open}} />
      <Drawer {...{classes, handleDrawerClose, open}} />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {props.children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
