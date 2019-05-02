import React, { Component } from "react";
import injectSheet from "react-jss";
import { Route, Switch, Redirect } from "react-router-dom";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {toggleTitleColor} from './store';

import Video from './components/Video';
import MemeText from './components/MemeText';
import ReadMe from './components/ReadMe';
import Navbar from './components/Navbar';

const styles = theme => ({
  '@global body': {
    background: theme.palette.background,
    color: theme.palette.text
  },
  App: {
    padding: '20px',
    background: 'black',
    maxWidth: '800px',
    minHeight: '600px',
    margin: 'auto',
    '&  h1': {
      fontSize: '5rem',
      textAlign: 'center',
      fontFamily: 'serif',
      cursor: 'pointer'
    },
    '& input': {
      margin: '10px'
    },
    '& a': {
      color: theme.palette.text,
    }
  },
  'title-primary': {
    color: theme.palette.primary
  },
  'title-secondary': {
    color: theme.palette.secondary
  },

});

const stp = (state) => ({
  titleColor: state.memeState.titleColor
})

const dtp = (dispatch) => bindActionCreators( {
  toggleTitleColor: () => toggleTitleColor()
}, dispatch)

class App extends Component {

  vidRefInput = React.createRef();


    handleSubmit = e => {
        e.preventDefault();

        console.log(this.vidRefInput);

    };

  render() {
    const { classes, titleColor, toggleTitleColor } = this.props;
    return (
      <div className={classes.App}>
      <div id="content"></div>
        <header className="App-header">
          <h1 onClick={toggleTitleColor} className={ classes[`title-${titleColor}`] }>Vintage Meme Machine</h1>
        </header>
        <main>
          <Switch>
            <Route path="/home">
              <>
                <Video vidRefInput={this.vidRefInput}/>
                <MemeText />
              </>
            </Route>
            <Route path="/readme">
              <ReadMe />
            </Route>
            <Redirect to="/home" />
          </Switch>
        </main>
        <footer>
          <Navbar />
        </footer>
      </div>
    );
  }
}

export default connect(stp,dtp)(injectSheet(styles)(App));
