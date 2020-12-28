import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import {withRouter} from 'react-router-dom';

const DrawerMod = ({classes, handleDrawerClose, open, ...props}) => {
  const onPress = (path) => props.history.replace(path);
  const isSelected = (path) => props.location.pathname === path;

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}>
      <div className={classes.toolbarIcon}>
        <Fade in={open}>
          <Typography component="h1" variant="h6" color="primary" noWrap>
            HyperBlox IDE
          </Typography>
        </Fade>

        <IconButton data-test="increment-button" onClick={handleDrawerClose}>
          <ChevronLeftIcon color="primary" />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button onClick={() => onPress('/')} style={isSelected('/') ? {backgroundColor: '#f5f5f5'} : {}}>
          <ListItemIcon>
            <DashboardIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => onPress('/about')} style={isSelected('/about') ? {backgroundColor: '#f5f5f5'} : {}}>
          <ListItemIcon>
            <DashboardIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </List>
    </Drawer>
  );
};

DrawerMod.propTypes = {
  handleDrawerClose: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(DrawerMod);
