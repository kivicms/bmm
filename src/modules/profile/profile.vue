<template>
  <f7-page>
    <f7-navbar title="Мой профиль" back-link="Back">
      <f7-nav-right>
        <f7-link>Сохранить</f7-link>
      </f7-nav-right>
    </f7-navbar>

    <div class="card">
      <div class="card-header">Мой профиль</div>
      <div class="card-content card-content-padding">
        <div class="list media-list">
          <ul>
            <li>ыы
            </li>
          </ul>
        </div>
      </div>
    </div>
  </f7-page>
</template>
<script>
  import F7BlockTitle from "../../../node_modules/framework7-vue/src/components/block-title.vue";
  import F7Block from "../../../node_modules/framework7-vue/src/components/block.vue";

  export default {
    components: {
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
    }
  }
</script>
