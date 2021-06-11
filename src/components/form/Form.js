import './Form.css'
import { useEffect, useRef, useState } from 'react';
import { checkName, checkEmail, checkPhone, checkText } from './FormControl'

const Form = () => {

  const [form, setForm] = useState({ lang: '', name: '', email: '', phone: '', text: '', check: false })

  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
    } else {
      ok()
    } // eslint-disable-next-line
  }, [form])

  function ok() {
    let btn = document.querySelector('#btn')
    
    const errors = []
    const error = document.querySelectorAll('small')
    error.forEach(el => {
      if (el.innerText) {
        errors.push(el.innerText)
      }
    })

    if (form.lang && form.name && form.email && form.phone && form.check && form.text && errors.length === 0) {
      btn.removeAttribute('disabled')
    } else {
      btn.setAttribute('disabled', 'disabled')
    }
  }

  const handlerLang = () => {
    let drop = document.querySelector('#Language')
    setForm(form => form = { ...form, lang: drop.value })
  }

  const handlerName = () => {
    let field = document.querySelector('#username')
    setForm(form => form = { ...form, name: field.value })
  }

  const handlerText = () => {
    let field = document.querySelector('#text')
    setForm(form => form = { ...form, text: field.value })
  }

  const handlerEmail = () => {
    let field = document.querySelector('#email')
    setForm(form => form = { ...form, email: field.value })
  }

  const handlerPhone = () => {
    let field = document.querySelector('#phone')
    setForm(form => form = { ...form, phone: field.value })
  }

  const handlerCheck = () => {
    let box = document.querySelector('#check')
    setForm(form => form = { ...form, check: box.checked })
  }
  
  return (
    <div className="container">
      <form autoComplete="off" action="" id="form" className="form">
        <div className="form-control">
          <div className="header">
            <h1>Регистрация</h1>
            <span>У вас уже есть аккаунт?</span><span><a href="https://www.bing.com/">Войти</a></span>
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="username">Имя</label>
          <input type="text" id="username" onInput={checkName} defaultValue={form.name} onChange={handlerName} placeholder="Введите Ваше Имя" />
          <small></small>
        </div>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <textarea maxLength="5" id="text" onInput={checkText} defaultValue={form.text} onChange={handlerText} placeholder="Введите Text" />
          <small></small>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onInput={checkEmail} defaultValue={form.email} onChange={handlerEmail} placeholder="Введите Ваш Email" />
          <small></small>
        </div>
        <div className="form-control">
          <label htmlFor="phone">Номер телефона</label>
          <input type="text" id="phone" onInput={checkPhone} defaultValue={form.phone} onChange={handlerPhone} placeholder="Введите номер телефона" />
          <small></small>
        </div>
        <div className="form-control">
          <label htmlFor="Language">Язык</label>
          <select name="Language" id="Language" defaultValue={form.lang} onChange={handlerLang} required>
            <option value="" disabled>Язык</option> 
            <option value="Russian">Русский</option>
            <option value="English">Английский</option>
            <option value="Chinese">Китайский</option>
            <option value="Spanish">Испанский</option>
          </select>
        </div>
        <div className="form-control">
          <div className="checkbox">
            <input type="checkbox" defaultValue={form.check} onChange={handlerCheck} className="custom-checkbox" id="check" />
            <label htmlFor="check">Принимаю <span><a href="https://www.bing.com/">условия</a></span> использования.</label>
          </div>
        </div>
        <button id="btn" type='submit' disabled>Зарегестрироваться</button>
      </form>
    </div>
  )
}

export default Form