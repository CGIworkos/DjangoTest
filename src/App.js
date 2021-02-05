import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import UsersList from "./components/UsersList";
import User from "./components/User";

const App = () => {
  return (
      <Router>
        <Header />
        <main>
          <Container>
            <Route path='/' component={UsersList} exact/>
            <Route path='/user/:id' component={User} />
          </Container>
        </main>
      <Footer />
    </Router>
  );
}

export default App;


