import { useState } from 'react';
import './App.css';

function App() {

  const [lang, setLang] = useState('Default')

  const handler = () => {
    let drop = document.querySelector('#Language')
    setLang(lang => lang = drop.value)
  }
  
  return (
    <div className="container">
      <form action="" id="form" className="form">
        <div className="header">
          <h1>Регистрация</h1>
          <span>У вас уже есть аккаунт?</span><span><a href="https://www.bing.com/">Войти</a></span>
        </div>
        <div className="form-control">
          <label htmlFor="username">Имя</label>
          <input type="text" id="username" placeholder="Введите Ваше Имя" />
          <i className="fas fa-check-circle"></i>
          <i className="fas fa-exclamation-circle"></i>
          <small>Error message</small>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Введите Ваш Email" />
          <i className="fas fa-check-circle"></i>
          <i className="fas fa-exclamation-circle"></i>
          <small>Error message</small>
        </div>
        <div className="form-control">
          <label htmlFor="password">Номер телефона</label>
          <input type="password" id="password" placeholder="Введите номер телефона" />
          <i className="fas fa-check-circle"></i>
          <i className="fas fa-exclamation-circle"></i>
          <small>Error message</small>
        </div>
        <div className="form-control">
          <label htmlFor="Language">Язык</label>
          <select name="Language" id="Language" defaultValue={lang} onChange={handler} required>
            <option value="Default" disabled>Язык</option>
            <option value="Russian">Русский</option>
            <option value="English">Английский</option>
            <option value="Chinese">Китайский</option>
            <option value="Spanish">Испанский</option>
          </select>
          <i className="fas fa-check-circle"></i>
          <i className="fas fa-exclamation-circle"></i>
          <small>Error message</small>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
