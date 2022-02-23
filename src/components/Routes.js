import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

import loadable from "@loadable/component";
import Layout from "./Layout";

const HomePage = loadable(() => import("../containers/Homepage"), {
  fallback: <p>Loading...</p>,
});
const Authgate = loadable(() => import("../containers/Authgate/Authgate"), {
  fallback: <p>Loading...</p>,
});

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path='/auth' element={<Authgate />} />
        <Route path='*' element={<HomePage />} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;
