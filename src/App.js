// Используя React и сервис для тестового REST api https://jsonplaceholder.typicode.com/ - вывести список пользователей. В этом списке должны быть
// Имя, Фамилия, емейл и полный адрес(одной строкой).
// По нажатию на пользователя нужно показать его посты (доступны по запросу /post) и все комментарии к посту (доступны по запросу /comments)
// А так же вывести все его альбомы доступные по запросу (/albums) и под каждым альбомом вывести слайдер с фотографиями (/photos). Стили и тд - на ваше усмотрение.
import React from "react";
import './App.css';
import { Container } from "react-bootstrap";
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
      <>
        <Header />
        <main>
          <Container>
            <h1>Main content must be here</h1>
          </Container>
        </main>
      <Footer />
    </>
  );
}

export default App;


