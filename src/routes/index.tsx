import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Pokemon from '../Pokemon';
import App from '../App';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/pokemon" component={Pokemon} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
