// Используя React и сервис для тестового REST api https://jsonplaceholder.typicode.com/ - вывести список пользователей. В этом списке должны быть
// Имя, Фамилия, емейл и полный адрес(одной строкой).
// По нажатию на пользователя нужно показать его посты (доступны по запросу /post) и все комментарии к посту (доступны по запросу /comments)
// А так же вывести все его альбомы доступные по запросу (/albums) и под каждым альбомом вывести слайдер с фотографиями (/photos). Стили и тд - на ваше усмотрение.
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


