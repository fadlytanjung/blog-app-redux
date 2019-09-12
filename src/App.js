import React from 'react';
import Navbar from './components/navbar';
import NotFound from './components/notfound';
import Home from './components/home';
import Detail from './components/detail';
import Newpost from './components/newpost';
import Editpost from './components/editpost';
import Passgenerator from './components/passgenerate';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {store,persistor}from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter >
        <div>
          <Navbar/>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/posts" component={Home} exact/>
            <Route path="/posts/:id" component={Detail} exact/>
            <Route path="/post/new" component={Newpost} exact/>
            <Route path="/post/edit/:id" component={Editpost} />
            <Route path="/passgenerator" component={Passgenerator}  />
            <Route default component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
