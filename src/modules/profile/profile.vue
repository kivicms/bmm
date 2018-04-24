<template>
  <f7-page>
    <f7-navbar title="Мой профиль" back-link="Back">
      <f7-nav-right>
        <f7-link v-on:click="saveProfile()">Сохранить</f7-link>
      </f7-nav-right>
    </f7-navbar>

    <div class="card">
      <div class="card-header">Мой профиль</div>
      <div class="card-content card-content-padding">
        <profile-update v-bind:model="model"></profile-update>
      </div>
    </div>
  </f7-page>
</template>
<script>
  import F7BlockTitle from "../../../node_modules/framework7-vue/src/components/block-title.vue";
  import F7Block from "../../../node_modules/framework7-vue/src/components/block.vue";
  import ProfileUpdate from "./profile-update.vue";

  export default {
    components: {
      ProfileUpdate,
      F7Block,
      F7BlockTitle},
    name: 'profile',
    data: function () {
      return {
        model: {}
      }
    },
    created () {
      this.$http.get('profiles/9').then(response => {
        this.model = response.body
      }, response => {})
    },
    methods: {
      saveProfile() {
        console.log(this.model)
      }
    }
  }
</script>
