import { Switch, Route, Redirect} from 'react-router-dom';
import Home from './Components/Home';
import Shows from './Components/Shows';
import NotFound from './Components/NotFound';
import ShowDetails from './Components/ShowDetails';
import routes from './routes';
import Layout from './Components/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path={routes.home} exact component={Home}></Route>
        <Route path={routes.showDetails} component={ShowDetails}></Route>
        <Route path={routes.shows} component={Shows}></Route>
        {/* <Redirect to='/'></Redirect> */}
        <Route component={NotFound}></Route>
      </Switch>
    </Layout>
  );
}

export default App;
