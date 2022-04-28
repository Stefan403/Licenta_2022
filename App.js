import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
} from "react-router-dom";
import { Home,  Login, Recovery, Registration } from "./pages/Export";




export const App = () => (
 <div>
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/recovery" element={<Recovery />} />
    </Switch>
  </div>
);
