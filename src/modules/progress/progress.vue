<template>
  <f7-page>
    <f7-navbar title="Прогресс" back-link="Back">
    </f7-navbar>

    <div class="toolbar tabbar">
      <div class="toolbar-inner">
        <a href="#tab-1" class="tab-link tab-link-active">Иснтр</a>
        <a href="#tab-2" class="tab-link">пан</a>
        <a href="#tab-3" class="tab-link">Таб</a>
        <a href="#tab-4" class="tab-link">граф</a>
      </div>
    </div>
    <div class="tabs">
      <div id="tab-1" class="page-content tab tab-active">
        <div class="card">
          <div class="card-content-padding">
            <div class="row">
              <div class="col-100 tablet-50">
                <img style="width: 100%" src="http://lk.beauty-matrix.ru/images/photo_figure.jpg" alt="Фото фигуры"/>
              </div>
              <div class=" col-100 tablet-50">
                <p>
                  Замеры желательно снимать в одно и то же время, например всегда утром натощак.
                </p>
                <p>
                  Сантиметровой лентой. Талия - самой узкое место. Живот - самое широкое место, обычно в районе пупка.  </p>
                <p>
                  Ягодицы - удобно измерять боком к зеркалу. Бедра- удобно измерять лицом к зеркалу, это наши ноги в самом широком месте. </p>
                <p>Бедро - одна нога.</p>
                <p>Плюс минус см вверх/вниз по телу - не важно. Важно запомнить, где измеряетесь в первый раз,
                  и потом на протяжении программы замерять те же самые параметры, наблюдать их в динамике.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="tab-2" class="page-content tab">
        <div class="block">
          <p>панели</p>
<!--          <f7-card v-for="m in models" class="col-100 tablet-30 desctop-33" >
            <f7-card-header>{{ m.week }} неделя</f7-card-header>
            <f7-card-content>
              {{ m.weight }}
            </f7-card-content>
          </f7-card>-->
        </div>
      </div>
      <div id="tab-3" class="page-content tab">
        <div class="block">
          <p>таблица</p>
          ...
        </div>
      </div>
      <div id="tab-4" class="page-content tab">
        <div class="block">
          <p>График</p>
          ...
        </div>
      </div>
    </div>
  </f7-page>
</template>
<script>
  import F7Card from "../../../node_modules/framework7-vue/src/components/card.vue";
  import F7CardHeader from "../../../node_modules/framework7-vue/src/components/card-header.vue";
  import F7CardContent from "../../../node_modules/framework7-vue/src/components/card-content.vue";

  export default {
    components: {
      F7CardContent,
      F7CardHeader,
      F7Card
    },
    name: 'user-progress',
    data: function () {
      return {
        models: {}
      }
    },
    created() {
      this.$http.get('progresses?ProgressSearch[user_id]=5&sort=week').then(response => {
        this.models = response.body.items
      }, response => {
      })
    }
  }
</script>
