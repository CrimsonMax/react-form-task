export function checkName() {
  const username = document.querySelector('#username')
  const usernameValue = username.value.trim()

  if (usernameValue === '') {
    setErrorFor(username, 'Username cannot be blank!')
  } else {
    setSuccessFor(username)
  }
}

export function checkEmail() {
  const email = document.querySelector('#email')
  const emailValue = email.value.trim()

  if (emailValue === '') {
    setErrorFor(email, 'Email needed!')
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid!')
  } else {
    setSuccessFor(email)
  }
}

export function checkPassword() {
  const password = document.querySelector('#password')
  const passwordValue = password.value.trim()

  if (passwordValue === '') {
    setErrorFor(password, 'Input password!')
  } else if (!passLength(passwordValue)) {
    setErrorFor(password, 'Password must be no less than 4 characters!')
  } else {
    setSuccessFor(password)
  }
}

export function checkLanguage() {
  const language = document.querySelector('#Language')
  const languageValue = language.value

  if (languageValue === 'Default') {
    setErrorFor(language, 'Language cannot be blank!')
  } else {
    setSuccessFor(language)
  }
}


export default function checkInputs() {
  const username = document.querySelector('#username')
  const email = document.querySelector('#email')
  const password = document.querySelector('#password')
  const language = document.querySelector('#Language')

  const usernameValue = username.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()
  const languageValue = language.value

  if (usernameValue === '') {
    setErrorFor(username, 'Username cannot be blank!')
  } else {
    setSuccessFor(username)
  }

  if (languageValue === 'Default') {
    setErrorFor(language, 'Language cannot be blank!')
  } else {
    setSuccessFor(language)
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email needed!')
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid!')
  } else {
    setSuccessFor(email)
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Input password!')
  } else if (!passLength(passwordValue)) {
    setErrorFor(password, 'Password must be no less than 4 characters!')
  } else {
    setSuccessFor(password)
  }
}

export function setErrorFor(input, message) {
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
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhone(phone) {
  return /^\+?(\d{1,3})?[-]?\(?(?:\d{2,3})\)?[-]?\d\d\d[-]?\d\d[-]?\d\d$/.test(phone);
}

function isName(name) {
  return /^[A-ZА-ЯЁ\s-]*$/i.test(name);
}

function passLength(passwordValue) {
  let x = passwordValue.split('')
  if (x.length > 3) {
    return true
  } else {
    return false
  }
}