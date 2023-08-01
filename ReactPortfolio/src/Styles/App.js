import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import AboutMe from '../pages/aboutMe';
import Portfolio from '../pages/portfolio';
import Contact from '../pages/contact';
import Resume from '../pages/resume';
import Footer from '../components/Footer';
import '../Styles/App';

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
            <Route path="/aboutMe" exact component={AboutMe} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
