import Auth from './AuthHoc';
import Layout from './components/molecules/layout';
import {Route, Switch} from 'react-router-dom';
import Dashboard from './components/pages/dashboard';
import About from './components/pages/about';

function App() {
  return (
    <Layout>
      <main>
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/about" component={About} />
        </Switch>
      </main>
    </Layout>
  );
}

export default Auth(App);
