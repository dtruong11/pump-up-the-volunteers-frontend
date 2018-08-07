const request = require('../request/request')
const renderError = require('./02-registerError')
const loginMode = require('../modes/loginMode')

function verify(event) {
  event.preventDefault()
  console.log('hey')
  const email = document.getElementById('register-email').value.toLowerCase()
  const password = document.getElementById('register-password').value
  const name = document.getElementById('register-name').value
  const ein = document.getElementById('register-ein').value
  const logo = document.getElementById('register-logo').value
  const description = document.getElementById('register-description').value

  request.signup(email, password, name, ein, logo, description).then(response => {
    const token = localStorage.setItem('token_org', response.data.token)

    loginMode()
  }).catch(error => {
    renderError(error)
  })
}

module.exports = verify
