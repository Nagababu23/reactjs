
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import TeamMatches from './components/TeamMatches'; // Implement this component
import LatestMatch from './components/LatestMatch'; // Implement this component
import NotFound from './components/NotFound'; // Implement this component

import './App.css';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/team-matches" component={TeamMatches} />
        <Route exact path="/team-matches/:name" component={LatestMatch} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default App;