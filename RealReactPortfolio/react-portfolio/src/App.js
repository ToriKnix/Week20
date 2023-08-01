import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import AboutMe from './components/aboutMe';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './resume';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
            <Route path="/aboutMe" component={AboutMe} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

