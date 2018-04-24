<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>Beauty Matrix</f7-nav-title>
<!--      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>-->
    </f7-navbar>
    <div class="views tabs ios-edges">
      <!-- Tabbar for switching views-tabs -->
      <div class="toolbar tabbar-labels toolbar-bottom-md">
        <div class="toolbar-inner">

          <a href="#view-home" class="tab-link tab-link-active">
            <i class="icon f7-icons ios-only">home</i>
            <i class="icon material-icons md-only">home</i>
            <span class="tabbar-label">Главная</span>
          </a>

          <a href="#view-train" class="tab-link">
            <!--<i class="icon f7-icons ios-only">film</i>-->
            <i class="f7-icons">film</i>
            <span class="tabbar-label">Тренировки</span>
          </a>

          <a href="#view-progress" class="tab-link">
            <!--<i class="icon f7-icons ios-only">data</i>-->
            <i class="f7-icons">data</i>
            <span class="tabbar-label">Прогресс</span>
          </a>

          <a href="#view-ration" class="tab-link">
            <!--<i class="icon f7-icons ios-only">list</i>-->
            <i class="f7-icons">view_list</i>
            <span class="tabbar-label">Рацион</span>
          </a>

          <a href="#view-other" class="tab-link">
            <!--<i class="icon f7-icons ios-only">more_vertical</i>-->
            <i class="f7-icons">more_vertical</i>
            <span class="tabbar-label">Прочее</span>
          </a>
        </div>
      </div>

      <div id="view-home" class="view view-main tab tab-active pasge-content" style="padding-top: 24px;">
        <!-- Page, data-name contains page name which can be used in page callbacks -->

      </div>
      <div id="view-train" class="view tab page-content" style="padding-top: 24px;">
        <training></training>
      </div>

      <div id="view-progress" class="view tab page-content">
        <!-- Catalog page will be loaded here dynamically from /catalog/ route -->
        <user-progress></user-progress>
      </div>

      <div id="view-ration" class="view tab page-content" style="padding-top: 24px;">
        <!-- Catalog page will be loaded here dynamically from /catalog/ route -->
        <ration></ration>
      </div>

      <!-- Other View -->
      <div id="view-other" class="view tab page-content"  style="padding-top: 24px;">
        <div class="list links-list">
          <ul>
            <li><a href="/specialoffer/">Спец. предложения</a></li>
            <li><a href="/payment/">Платежи</a></li>
            <li><a href="/question/">Вопросы</a></li>
            <li><a href="/message/">Сообщения</a></li>
            <li><a href="/motivation/">Мотивация</a></li>
            <li><a href="/recipe/">Рецепты</a></li>
            <li><a href="/faq-food/">FAQ питание</a></li>
            <li><a href="/faq-train/">FAQ тренировки</a></li>
            <li><a href="/profile/">Мой профиль</a></li>
            <li class="item-divider"></li>
            <li><a href="#">Выйти</a></li>
          </ul>
        </div>
      </div>
    </div>

<!--      <f7-block strong>
        <p>Here is your blank Framework7 app. Let's see what we have here.</p>
      </f7-block>
      <f7-block-title>Navigation</f7-block-title>
      <f7-list>
        <f7-list-item link="/about/" title="About"></f7-list-item>
        <f7-list-item link="/form/" title="Form"></f7-list-item>
      </f7-list>
      <f7-block-title>Modals</f7-block-title>
      <f7-block strong>
        <f7-row>
          <f7-col width="50">
            <f7-button fill raised popup-open="#popup">Popup</f7-button>
          </f7-col>
          <f7-col width="50">
            <f7-button fill raised login-screen-open="#login-screen">Login Screen</f7-button>
          </f7-col>
        </f7-row>
      </f7-block>
      <f7-block-title>Panels</f7-block-title>
      <f7-block strong>
        <f7-row>
          <f7-col width="50">
            <f7-button fill raised panel-open="left">Left Panel</f7-button>
          </f7-col>
          <f7-col width="50">
            <f7-button fill raised panel-open="right">Right Panel</f7-button>
          </f7-col>
        </f7-row>
      </f7-block>
      <f7-list>
        <f7-list-item link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="Dynamic Route"></f7-list-item>
        <f7-list-item link="/load-something-that-doesnt-exist/" title="Default Route (404)"></f7-list-item>
      </f7-list>-->
  </f7-page>
</template>
<script>
  import Ration from "../modules/ration/ration.vue";
  import UserProgress from "../modules/progress/progress.vue"
  import Training from "../modules/training/training.vue";
  export default {components: {
    Training,
    UserProgress,
    Ration}}
</script>
