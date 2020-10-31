import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { Provider } from 'react-redux';
import routes from "./routes";
import { store, rrfProps} from "./store";
import { getAllClients} from "./store/Clients/action";
import { Header } from './component/Header/Menu'
import './App.scss';

function App() {

    useEffect(() => {
        store.dispatch(getAllClients());
    });

    return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Header />
          <section className="main">
              <div className="container">
                  <Switch>
                  {routes.map((router) => (
                      <Route
                          path={router.path}
                          component={router.component}
                          exact={router.exact}
                          key={router.path}
                      />
                  ))}
                  </Switch>
              </div>
          </section>
      </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
    );
}

export default App;
