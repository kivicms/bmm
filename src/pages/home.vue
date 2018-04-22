<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>Beauty Matrix</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <div class="views tabs ios-edges">
      <!-- Tabbar for switching views-tabs -->
      <div class="toolbar tabbar-labels toolbar-bottom-md">
        <div class="toolbar-inner">
          <a href="#view-home" class="tab-link tab-link-active">
            <i class="icon f7-icons ios-only">home</i>
            <i class="icon f7-icons ios-only icon-ios-fill">home_fill</i>
            <i class="icon material-icons md-only">home</i>
            <span class="tabbar-label">Home</span>
          </a>
          <a href="#view-catalog" class="tab-link">
            <i class="icon f7-icons ios-only">list</i>
            <i class="icon f7-icons ios-only icon-ios-fill">list_fill</i>
            <i class="icon material-icons md-only">view_list</i>
            <span class="tabbar-label">Catalog</span>
          </a>
          <a href="#view-settings" class="tab-link">
            <i class="icon f7-icons ios-only">settings</i>
            <i class="icon f7-icons ios-only icon-ios-fill">settings_fill</i>
            <i class="icon material-icons md-only">settings</i>
            <span class="tabbar-label">Settings</span>
          </a>
        </div>
      </div>
      <div id="view-home" class="view view-main tab tab-active">
        <!-- Page, data-name contains page name which can be used in page callbacks -->
        <div class="page" data-name="home">
          Домашняя страница
        </div>
      </div>
      <div id="view-catalog" class="view tab">
        <!-- Catalog page will be loaded here dynamically from /catalog/ route -->
        Каталог
      </div>

      <!-- Settings View -->
      <div id="view-settings" class="view tab">
        <!-- Settings page will be loaded here dynamically from /settings/ route -->

        НАстройки
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
  export default {}
</script>
