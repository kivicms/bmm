<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Left Panel -->
    <f7-panel left reveal theme-dark>
      <f7-view url="/panel-left/"></f7-view>
    </f7-panel>

    <!-- Right Panel -->
<!--    <f7-panel right cover theme-dark>
      <f7-view url="/panel-right/"></f7-view>
    </f7-panel>-->

    <!-- Main View -->
    <f7-view id="main-view" url="/" main></f7-view>

    <!-- Popup -->
 <!--   <f7-popup id="popup">
      <f7-view>
        <f7-page>
          <f7-navbar title="Popup">
            <f7-nav-right>
              <f7-link popup-close>Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>-->

    <login></login>
    <!-- Login Screen -->
<!--    <f7-login-screen id="login-screen" v-bind:opened="true">
      <f7-view>
        <f7-page login-screen>
          <f7-login-screen-title>Авторизация</f7-login-screen-title>
          <f7-list form>
            <f7-list-item>
              <f7-label>Логин</f7-label>
              <f7-input name="username" placeholder="Логин" type="text"></f7-input>
            </f7-list-item>
            <f7-list-item>
              <f7-label>Пароль</f7-label>
              <f7-input name="password" type="password" placeholder="Пароль"></f7-input>
            </f7-list-item>
          </f7-list>
          <f7-list>
            <f7-list-button title="Войти" login-screen-close></f7-list-button>
            <f7-block-footer>
              <p>Click Sign In to close Login Screen</p>
            </f7-block-footer>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-login-screen>-->

  </div>
</template>

<script>
import F7LoginScreen from "../node_modules/framework7-vue/src/components/login-screen.vue";
import Login from "./pages/login.vue";

export default {components: {
  Login,
  F7LoginScreen}}
</script>
