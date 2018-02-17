<template>
  <f7-page>
    <f7-navbar title="Тренировки" back-link="Back"></f7-navbar>
    <f7-block-title>Недели</f7-block-title>
    <f7-block>
      <f7-row>
        <template v-for="b in buttons">
          <f7-button fill>{{ b.title }} </f7-button>
        </template>
      </f7-row>
    </f7-block>
    <f7-block-title>Дни</f7-block-title>
    <div class="block">
      <div class="row">
        <a class="button">1 день</a>
        <a class="button">2 день</a>
        <a class="button">3 день</a>
        <a class="button">4 день</a>
        <a class="button">5 день</a>
        <a class="button">6 день</a>
        <a class="button">7 день</a>
      </div>
    </div>
  </f7-page>
</template>
<script>
  export default {
    name: 'training',
    data: function () {
      return {
        items: [],
        buttons: [],
        activeButton: 1
      }
    },
    created() {
      for (let i = 1; i < 10; i++) {
        this.buttons.push({title: i + '-я неделя', active: i === this.activeButton})
      }
      console.log('on created')
    }
  }
</script>

