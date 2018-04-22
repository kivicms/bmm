<template>
  <f7-page>
    <f7-navbar title="Рацион" back-link="Назад"></f7-navbar>
    <div class="card">
      <div class="card-header">Мой рацион</div>
      <div class="card-content card-content-padding"><span v-html="model.ration_content"></span></div>
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
    name: 'ration',
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
