import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import FinancePage from './FinancePage'
import Expenses from './Expenses'
import Ledger from './Ledger'

const App = () => (
  <Router>
    <div className="container">
      <h1 className="title is-1">No Six</h1>
      <Route path="/" component={Nav} />
      <Route path="/login" component={Login} />
      <Route path="/Register" component={Register} />
      <hr/>
      <Route path="/home" component={FinancePage} />
      <Route path="/expenses" component={Expenses} />
      <Route path="/ledger" component={Ledger} />
    </div>
  </Router>
)

export default App
