import Jodit from './Jodit';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Quill from './Quill';
import Slate from './Slate';
export class App extends Component {
  render() {
    return (
      <Router>
        <div>
         <ul>
          <li>
            <Link to="/quill">React Quill</Link>
           
          </li>
         <li>
         <Link to="/slate">SLate Editor</Link>
         </li>
         <li>
         <Link to="/jodit">Jodit Editor</Link>
         </li>
        </ul>
          <Switch>
            <Route path="/quill">
              <Quill />
            </Route>
            <Route path="/slate">
              <Slate />
            </Route>
            <Route path="/jodit">
              <Jodit />
            </Route>
            
          </Switch>
      </div>
      </Router>
    )
  }
}

export default App
