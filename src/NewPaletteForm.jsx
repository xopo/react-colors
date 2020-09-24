import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import DraggableColorBoxStyled from './DraggableColorbox';

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: 'calc(100vh - 64px)',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const trimLowerCase = (s) => s.trim().toLowerCase();

export default function NewPaletteForm({ history, newPalette, updateNewPalette }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [newColor, setNewColor] = React.useState('teal');
  const [newName, setNewName] = React.useState('');
  const [colors, addNewColor] = React.useState(newPalette.colors)

  const handleDrawerOpen = () => {
    setOpen(true);
  };


  React.useEffect(() => {
    ValidatorForm.addValidationRule('colorExists', (name) => !colors.some(item => trimLowerCase(item.name) === trimLowerCase(name)));

    return (() => ValidatorForm.removeValidationRule('colorExists'));
  }, [colors]);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const appendNewColor = () => {
      if (!colors.find(col => col.color === newColor)) {
        addNewColor([...colors, { color: newColor, name: newName}]);
      }
  }

  const savePalette = () => {
    updateNewPalette({
      ...newPalette, 
      id: newPalette.paletteName.replace(/ /g, '-').toLowerCase(),
      colors:  [...colors]
    });
    history.push('/')
  }

  console.log({newColor})

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color='default'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
            <Button variant='outlined' color='primary' onClick={savePalette}>Save Palettea</Button>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Typography variant="h4" noWrap>Pick a color</Typography>
        <div>
            <Button variant='outlined' color='secondary'>ClearPalette</Button>
            <Button variant='outlined' color='primary'>RandomColor</Button>
        </div>
        <ChromePicker color={newColor} onChangeComplete={({hex}) => setNewColor(hex)} />
        <ValidatorForm onSubmit={appendNewColor}>
          <TextValidator 
            value={newName}
            onChange={({target: { value }}) => setNewName(value)}
            validators={['required', 'colorExists']}
            errorMessages={['New color name is required', 'Name already used']}
          />
        
          <Button 
              variant='contained' 
              color='primary' 
              type='submit'
              style={{backgroundColor: newColor}}
          >Add color </Button>
      </ValidatorForm>
      </Drawer>
      <main
        className={clsx(classes.content, {

            [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {colors.map(({color, name},i) => (
            // <li style={{ backgroundColor:color }}>{color}</li>
            <DraggableColorBoxStyled key={`${color}- ${name}-${i}`} background={color} name={name} />
        ))}
      </main>
    </div>
  );
}