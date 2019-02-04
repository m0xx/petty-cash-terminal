import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Users from './screens/Users';
import Products from './screens/Products';

import Home from './screens/Home';
const About = () => <h2>About</h2>;

const AppRouter = () => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/users/">users</Link>
                    </li>
                    <li>
                        <Link to="/products/">products</Link>
                    </li>
                </ul>
            </nav>

            <Route path="/" exact component={Home} />
            <Route path="/users/" component={Users} />
            <Route path="/products/" component={Products} />
        </div>
    </Router>
);

export default AppRouter;