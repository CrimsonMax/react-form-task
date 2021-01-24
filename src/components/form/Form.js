import './Form.css'
import { useEffect, useRef, useState } from 'react';
import checkInputs, { checkName, checkEmail, checkLanguage, checkPassword } from './FormControl'
import setErrorFor from './FormControl'

const Form = () => {

  const [form, setForm] = useState({ lang: '', name: '', email: '', phone: '', check: false })
  // const [errors, setErrors] = useState()

  const firstRender = useRef(true)

  let ok = () => {
    let btn = document.querySelector('#btn')

    if (form.lang && form.name && form.email && form.phone && form.check) {
      btn.removeAttribute('disabled')
    } else {
      btn.setAttribute('disabled', 'disabled')
    }
  }

  // let not = () => {
  //   if (!form.name || !form.phone || !form.lang || !form.email || !form.check) {
  //     let btn = document.querySelector('#btn')
  //       btn.getAttribute('disabled')
  //   }
  // }

  useEffect(() => {
    console.log('hey!')
    if (firstRender.current) {
      firstRender.current = false
    } else {
      ok()
    }
  }, [form])


  // useEffect(() => {
  //   console.log('hey!')
  //   if (firstRender.current) {
  //     firstRender.current = false
  //   } else {
  //     not()
  //   }
  // }, [form])

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

  const handlerCheck = () => {
    let box = document.querySelector('#password2')
    setForm(form => form = { ...form, check: box.checked })
  }

  const handlerSubmit = event => {
    event.preventDefault()
    checkInputs()
    valid()
  }

  function valid() {
    const errors = []
    const error = document.querySelectorAll('small')
    error.forEach(el => {
      if (el.innerText) {
        errors.push(el.innerText)
      }
    })
    if (errors.length === 0) {
      const date = document.querySelector('#form')
      date.submit()
    }
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
          <input type="text" id="username" onBlur={checkName} defaultValue={form.name} onChange={handlerName} placeholder="Введите Ваше Имя" />
          <i className="fas fa-check-circle"></i>
          <i className="fas fa-exclamation-circle"></i>
          <small></small>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onBlur={checkEmail} defaultValue={form.email} onChange={handlerEmail} placeholder="Введите Ваш Email" />
          <i className="fas fa-check-circle"></i>
          <i className="fas fa-exclamation-circle"></i>
          <small></small>
        </div>
        <div className="form-control">
          <label htmlFor="password">Номер телефона</label>
          <input type="password" id="password" onBlur={checkPassword} defaultValue={form.phone} onChange={handlerPhone} placeholder="Введите номер телефона" />
          <i className="fas fa-check-circle"></i>
          <i className="fas fa-exclamation-circle"></i>
          <small></small>
        </div>
        <div className="form-control">
          <label htmlFor="Language">Язык</label>
          <select name="Language" id="Language" onBlur={checkLanguage} defaultValue={form.lang} onChange={handlerLang} required>
            <option value="" disabled>Язык</option>
            <option value="Russian">Русский</option>
            <option value="English">Английский</option>
            <option value="Chinese">Китайский</option>
            <option value="Spanish">Испанский</option>
          </select>
          <i className="fas fa-check-circle"></i>
          <i className="fas fa-exclamation-circle"></i>
          <small></small>
        </div>
        <div className="form-control">
          <div className="checkbox">
            <input type="checkbox" defaultValue={form.check} onChange={handlerCheck} className="custom-checkbox" id="password2" />
            <label htmlFor="password2">Номер телефона</label>
            <i className="fas fa-check-circle"></i>
            <i className="fas fa-exclamation-circle"></i>
          </div>
          <small></small>
        </div>
        <button id="btn" type='submit' disabled>Submit</button>
      </form>
    </div>
  )
}

export default Form