import './styles/_reset.scss';
import './styles/app.scss';

import React from 'react';

import Header from './components/header';
import Footer from './components/footer';
import RESTy from './components/resty';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <RESTy />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;