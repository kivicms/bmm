<template>
  <f7-page>
    <f7-navbar title="Рацион" back-link="Back"></f7-navbar>
    <f7-block-title>{{ model.title }}</f7-block-title>
    <f7-block>
      <span v-html="model.description"></span>
    </f7-block>
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
        this.$http.get('http://localhost:8082/catalog/rations/1').then(response => {
          this.model = response.body
        }, response => {})
    }
  }
</script>
