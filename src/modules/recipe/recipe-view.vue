<template>
  <f7-page>
    <f7-navbar title="Рецепты" back-link="Назад"></f7-navbar>
    <f7-block-title>{{ model.title }}</f7-block-title>
    <f7-block v-if="loaded" ref="recipeView" id="recipeView">
      <div class="text-align-center">
        <img style="width: 100%"
          :src="`https://lk.beauty-matrix.ru/gallery/images/image-by-item-and-alias?item=${model.images[0].modelName}${model.images[0].itemId}&dirtyAlias=${model.images[0].urlAlias}.jpg`"/>
      </div>
      <br>
      <span v-html="model.description"></span>
    </f7-block>
  </f7-page>
</template>
<script>
  import F7BlockTitle from "../../../node_modules/framework7-vue/src/components/block-title.vue";
  import F7Block from "../../../node_modules/framework7-vue/src/components/block.vue";
  import Dom7 from '../../../node_modules/dom7/dist/dom7.js'

  export default {
    components: {
      F7Block,
      F7BlockTitle
    },
    name: 'recipe-view',
    data: function () {
      return {
        loaded: false,
        blockWidth: 0,
        model: {
          images: []
        }
      }
    },
    created() {
      this.$http.get('http://localhost:8082/catalog/recipes/' + this.$f7route.params['id'] + '?expand=category,images').then(response => {
        this.model = response.body
        this.loaded = true
      }, response => {
      })
    },
    mounted() {
      var $$ = Dom7;
      this.blockWidth = $$('div#recipeView').width()
      console.log(this.blockWidth)
    }
  }
</script>
