import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Components/Home';
import Movies from './Components/Movies';
import MovieDetailsPage from './Components/MovieDetailsPage';
import Navigation from './Components/Navigation';
import routes from './routes';

function App() {
  return (
    <div>
      <Navigation/>
      <hr/>
      <Switch>
        <Route path={routes.home} exact component={Home}></Route>
        <Route path={routes.movieDetails} component={MovieDetailsPage}></Route>
        <Route path={routes.movies} component={Movies}></Route>
        <Redirect to={routes.home}></Redirect>
      </Switch>
    </div>
  );
}

export default App;
