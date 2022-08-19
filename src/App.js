import React, { Suspense } from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import Quotes from "./screens/Quotes";
import Details from "./screens/Details";
// import AddQuote from "./screens/AddQuote";

import Layout from "./components/layout/Layout";
import NotFound from "./screens/NotFound";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const AddQuote = React.lazy(() => import("./screens/AddQuote"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes"></Redirect>
          </Route>
          <Route path="/quotes" exact>
            <Quotes />
          </Route>
          <Route path="/add-quote">
            <AddQuote />
          </Route>
          <Route path="/quotes/:quoteId">
            <Details />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
