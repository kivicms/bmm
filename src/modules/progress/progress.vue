<template>
  <div>

    <div class="toolbar tabbar">
      <div class="toolbar-inner">
        <a href="#progress-instruction" class="tab-link tab-link-active">
          <i class="icon f7-icons">document_text_fill</i>
        </a>
        <a href="#progress-table" class="tab-link">
          <i class="icon f7-icons">data_fill</i>
        </a>
        <a href="#progress-graph" class="tab-link">
          <i class="icon f7-icons">graph_square</i>
        </a>
      </div>
    </div>
    <div class="tabs">
      <div id="progress-instruction" class="page-content1 tab tab-active">
        <progress-instruction></progress-instruction>
      </div>

      <div id="progress-table" class="page-content1 tab">
        <progress-table v-bind:models="models"></progress-table>
      </div>
      <div id="progress-graph" class="page-conten1t tab">
        <div class="block">
          <p>График</p>
          ...
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import F7Card from '../../../node_modules/framework7-vue/src/components/card.vue';
  import F7CardHeader from '../../../node_modules/framework7-vue/src/components/card-header.vue';
  import F7CardContent from '../../../node_modules/framework7-vue/src/components/card-content.vue';
  import ProgressInstruction from './instruction.vue'
  import ProgressTable from './table.vue';
  export default {
    components: {
      ProgressTable,
      ProgressInstruction,
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
