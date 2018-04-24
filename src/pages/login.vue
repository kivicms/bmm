<template>
  <f7-login-screen id="login-screen" v-bind:opened="opened">
    <f7-view>
      <f7-page login-screen>
        <f7-login-screen-title>Авторизация</f7-login-screen-title>
        <f7-list form>
          <f7-list-item>
            <f7-label>Логин</f7-label>
            <f7-input :value="username" @input="username = $event.target.value" placeholder="Логин" type="text"></f7-input>
          </f7-list-item>
          <f7-list-item>
            <f7-label>Пароль</f7-label>
            <f7-input :value="password" @input="password = $event.target.value" type="password" placeholder="Пароль"></f7-input>
          </f7-list-item>
        </f7-list>
        <f7-list>
          <f7-list-button title="Войти" v-on:click="signin()"></f7-list-button>
          <f7-block-footer>
            <p>{{ message }}</p>
          </f7-block-footer>
        </f7-list>
      </f7-page>
    </f7-view>
  </f7-login-screen>
</template>

<script>
  import auth from '../auth/index'
  export default {
    name: 'login',
    data: function () {
      return {
        opened: true,
        username: '',
        password: '',
        message: ''
      }
    },
    methods: {
      signin() {
        console.log(this.username + ' - ' + this.password)
        const result = auth.login(this,{username: this.username, password: this.password})
        if (result) {
          this.opened = false
        }
      }
    }
  }
</script>
