import React,{useState} from "react"
import Layout from "../components/layout"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default function Studies({location}) {
  const [shown, setShown] = useState(0);
  const studiesList = ['C','Django','Godo','React','Python','Android'];

  return (
    <Layout sideList={studiesList} setSideCurrent={setShown} pathName={location.pathname}>
      <Router>
        <Switch>
          <Route path={`/C`} >
            <h1>HelloWorld</h1>
          </Route>
        </Switch>
      </Router>
      <p>{studiesList[shown]} Clicked!!!</p>
    </Layout>
  )
}