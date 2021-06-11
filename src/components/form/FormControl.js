export function checkName() {
  const username = document.querySelector('#username')
  const usernameValue = username.value.trim()

  if (usernameValue === '') {
    setErrorFor(username, 'Пожалуйста введите имя!')
  } else if (!isName(usernameValue)) {
    setErrorFor(username, 'Некорректное имя!')
  } else {
    setSuccessFor(username)
  }
}

export function checkText() {
  const text = document.querySelector('#text')
  const textValue = text.value.trim()

  if (textValue === '') {
    setErrorFor(text, 'Пожалуйста введите text!')
  } else {
    setSuccessFor(text)
  }
}

export function checkEmail() {
  const email = document.querySelector('#email')
  const emailValue = email.value.trim()

  if (emailValue === '') {
    setErrorFor(email, 'Пожалуйста введите Email!')
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Некорректный Email!')
  } else {
    setSuccessFor(email)
  }
}

export function checkPhone() {
  const phone = document.querySelector('#phone')
  const phoneValue = phone.value.trim()

  if (phoneValue === '') {
    setErrorFor(phone, 'Пожалуйста введите телефонный номер!')
  } else if (!isPhone(phoneValue)) {
    setErrorFor(phone, 'Некорректный телефонный номер!')
  } else {
    setSuccessFor(phone)
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement
  const small = formControl.querySelector('small')

  small.innerText = message

  formControl.className = 'form-control error'
}

function setSuccessFor(input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

function isEmail(email) {
  return /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhone(phone) {
  return /^\+?(\d{1,3})?[-]?\(?(?:\d{2,3})\)?[-]?\d\d\d[-]?\d\d[-]?\d\d$/.test(phone);
}

function isName(name) {
  return /^[A-ZА-ЯЁ\s-]*$/i.test(name);
}