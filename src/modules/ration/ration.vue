<template>

    <div class="card">
      <div class="card-header">Мой рацион</div>
      <div class="card-contentc  card-content-padding">
        <span v-html="model.ration_content"></span>
        <br><br>
      </div>
    </div>

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
