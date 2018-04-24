// import router from '../router/index'

// URL and endpoint constants
const API_URL = 'http://beauty-matrix.ru/admin/api_v1/'
const LOGIN_URL = API_URL + 'logins'

export default {

  // User object will let us check authentication status
  user: {
    authenticated: false
  },
  login (context, creds) {
    // context.Alert('Выполняется проверка', 'info', 'icon-hourglass')
    context.$http.post(LOGIN_URL, creds).then(response => {
      if (response.body.error === true) {
        //context.Alert(response.body.errorMessage, 'danger', 'icon-shield')
        return false
      } else {
        // context.Alert('Выполянется вход в систему', 'success', 'icon-info')
        localStorage.setItem('uid', response.body.id)
        localStorage.setItem('username', response.body.username)
        localStorage.setItem('access_token', response.body.access_token)
        localStorage.setItem('avatar', response.body.avatar)
        localStorage.setItem('role', response.body.role)
        localStorage.setItem('profileId', response.body.profileId)
        this.user.authenticated = true
        return true
      }
    }, response => {
      console.log('error')
      console.log(response)
    })
  },
  logout () {
    localStorage.removeItem('uid')
    localStorage.removeItem('username')
    localStorage.removeItem('access_token')
    localStorage.removeItem('avatar')
    localStorage.removeItem('role')
    localStorage.removeItem('profileId')
    this.user.authenticated = false
    window.location = '#/login'
  },

  checkAuth () {
    var jwt = localStorage.getItem('access_token')
    if (jwt) {
      this.user.authenticated = true
      return true
    } else {
      this.user.authenticated = false
      return false
    }
  },
  getAvatar () {
    return 'static/img/avatars/' + localStorage.getItem('avatar')
  },
  getUserId () {
    return localStorage.getItem('uid')
  },
  getProfileId () {
    return localStorage.getItem('profileId')
  },
  getRole () {
    return localStorage.getItem('role')
  },
  getUserName () {
    return localStorage.getItem('username')
  },
  // The object to be passed as a header for authenticated requests
  getBearer () {
    return 'Bearer ' + 'XbIiClzAzJuy2VW15jLJSYYEzhqCQ0h7'
    // return 'Bearer ' + localStorage.getItem('access_token')
  },
  getAuthHeader () {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    }
  }
}
