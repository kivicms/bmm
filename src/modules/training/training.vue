<template>
  <div>
    <f7-list-item>
      <f7-label>Неделя</f7-label>
      <f7-input type="select" placeholder="Пол" name="sex">
        <option v-for="(w, index) in weeks" v-bind:value="w.id">{{ w.title }}</option>
      </f7-input>
    </f7-list-item>
    <div v-show="showSelectedWeek">{{ selectedWeek }}</div>
 <!--   <div class="list links-list" v-show="showWeeks">
      <ul>
        <li v-for="w in weeks">
          <a href="#" v-on:click="weekChanged(w.id, w.title)" class="list-button item-link">{{ w.title }} </a>
        </li>
      </ul>
    </div>-->
  </div>
</template>
<script>
  export default {
    name: 'training',
    data: function () {
      return {
        items: [],
        weeks: [],
        activeWeek: 1,
        showWeeks: true,
        showSelectedWeek: false,
        selectedWeek: ''
      }
    },
    mounted() {
      this.showWeeks = true
      this.showSelectedWeek = false
      this.selectedWeek = ''
    },
    created() {
      for (let i = 1; i < 10; i++) {
        this.weeks.push({id: i, title: i + '-я неделя', active: i === this.activeWeek})
      }
      this.$http.get('http://localhost:8082/catalog/trainings').then(response => {
        this.items = response.body
      }, response => {})
    },
    methods: {
      weekChanged: function(week, title) {
        this.activeWeek = week
        this.showWeeks = false
        this.showSelectedWeek = true
        this.selectedWeek = title
        console.log(week)
      }
    }
  }
</script>

