import { useState } from 'react';
import './App.css';
import checkInputs from './components/FormControl'

function App() {

  const [form, setForm] = useState({ lang: 'Default', name: '', email: '', phone: '' })

  const handlerLang = () => {
    let drop = document.querySelector('#Language')
    setForm(form => form = { ...form, lang: drop.value })
  }

  const handlerName = () => {
    let field = document.querySelector('#username')
    setForm(form => form = { ...form, name: field.value })
  }

  const handlerEmail = () => {
    let field = document.querySelector('#email')
    setForm(form => form = { ...form, email: field.value })
  }

  const handlerPhone = () => {
    let field = document.querySelector('#password')
    setForm(form => form = { ...form, phone: field.value })
  }

  const handlerSubmit = event => {
    event.preventDefault()
    checkInputs()
    console.log('hello')
  }

  return (
    <div className="container">
      <form action="" id="form" onSubmit={handlerSubmit} className="form">
        <div className="form-control">
          <div className="header">
            <h1>Регистрация</h1>
            <span>У вас уже есть аккаунт?</span><span><a href="https://www.bing.com/">Войти</a></span>
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="username">Имя</label>
          <input type="text" id="username" defaultValue={form.name} onChange={handlerName} placeholder="Введите Ваше Имя" />
          <i className="fas fa-check-circle"></i>
          <i className="fas fa-exclamation-circle"></i>
          <small>Error message</small>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" defaultValue={form.email} onChange={handlerEmail} placeholder="Введите Ваш Email" />
          <i className="fas fa-check-circle"></i>
          <i className="fas fa-exclamation-circle"></i>
          <small>Error message</small>
        </div>
        <div className="form-control">
          <label htmlFor="password">Номер телефона</label>
          <input type="password" id="password" defaultValue={form.phone} onChange={handlerPhone} placeholder="Введите номер телефона" />
          <i className="fas fa-check-circle"></i>
          <i className="fas fa-exclamation-circle"></i>
          <small>Error message</small>
        </div>
        <div className="form-control">
          <label htmlFor="Language">Язык</label>
          <select name="Language" id="Language" defaultValue={form.lang} onChange={handlerLang} required>
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
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
