
// Import Vue
import Vue from 'vue';

// Import F7
import Framework7 from 'framework7/dist/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js';

// Import F7 Styles
import Framework7Styles from 'framework7/dist/css/framework7.css';

// Import Icons and App Custom Styles
import IconsStyles from './css/icons.css';
import AppStyles from './css/app.css';

import VueResource from 'vue-resource'

// Import Routes
import Routes from './routes.js'
import auth from './auth/index.js'


// Import App Component
import App from './app'

// Init F7 Vue Plugin
Vue.use(Framework7Vue, Framework7)
Vue.use(VueResource)

// const router = Framework7.Router
// console.log(router)

Vue.http.headers.common['Authorization'] = auth.getBearer()

Vue.http.options.root = 'http://beauty-matrix.ru/admin/api_v1/'


// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  // Init Framework7 by passing parameters here
  framework7: {
    id: 'io.framework7.testapp', // App bundle ID
    name: 'Beauty-Matrix.ru', // App name
    theme: 'auto', // Automatic theme detection
    // App routes
    routes: Routes,
  },
/*  methods: {
    onF7RouteChange(newRoute, previousRoute, router) {
      if (!auth.checkAuth() && newRoute.path !== '/login/') {
        console.log(newRoute.path)
        console.log('not auth')
        // router.navigate('/login/')
        //var loginScreen = this.app.loginScreen.create({ /!* parameters *!/ })
        //loginScreen.open()
        console.log(this)
      }

      // console.log(newRoute)
    }
  },*/
  // Register App Component
  components: {
    app: App
  }
});
