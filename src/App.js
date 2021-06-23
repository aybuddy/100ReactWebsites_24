import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';

//Components
import Page1 from './pages/Page1/Page1';
import Page2 from './pages/Page2/Page2';
import Page3 from './pages/Page3/Page3';
import Home from './pages/home/Home';
import ScrollToTop from './components/shared/ScrollToTop';
import Navigation from './components/navigation/Navigation';
import Menu from './pages/Menu/Menu';
import About from './pages/About/About';

function App() {
  return (
    <div className='app'>
      <GlobalStyle />
      <ScrollToTop />
      <Navigation />
      <Switch>
        <Route path='/menu' component={Menu} />
        <Route path='/about' component={About} />
        <Route path='/page3' component={Page3} />
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
