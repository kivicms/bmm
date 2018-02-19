<template>
  <f7-page>
    <f7-navbar title="Рецепты" back-link="Назад">
    </f7-navbar>
    <f7-block>
      <f7-label>Категории</f7-label>
      <f7-input type="select">
        <option v-for="c in categories">{{ c.title }}</option>
      </f7-input>
    </f7-block>
    <div class="list media-list">
      <ul>
        <li v-for="i in items">
          <a :href="`/recipe-view/${i.id}`" class="item-link item-content">
            <div class="item-media">
              <!--<img :src="`https://lk.beauty-matrix.ru/uploads/gallery/images/store/${i.images[0].filePath}`" width="44"/> -->
              <img :src="`https://lk.beauty-matrix.ru/gallery/images/image-by-item-and-alias?item=${i.images[0].modelName}${i.images[0].itemId}&dirtyAlias=${i.images[0].urlAlias}_70x70.jpg`" />
            </div>
            <div class="item-inner">
              <div class="item-title-row">
                <div class="item-title">{{ i.title }}</div>
              </div>
              <div class="item-subtitle">{{ i.category.title }}</div>
            </div>
          </a>
        </li>
      </ul>
    </div>

  </f7-page>
</template>
<script>

  export default {
    components: {},
    name: 'recipe',
    data: function () {
      return {
        categories: [],
        items: []
      }
    },
    created() {
      this.$http.get('http://localhost:8082/catalog/recipe-categories').then(response => {
        this.categories = response.body
      }, response => {
      })

      this.$http.get('http://localhost:8082/catalog/recipes?expand=category,images').then(response => {
        this.items = response.body
      }, response => {
      })
    }
  }
</script>
