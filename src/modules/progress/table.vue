<template>
  <div class="data-table">
    <table>
      <thead>
      <tr>
        <th class="label-cell">Дата</th>
        <th class="numeric-cell">Вес</th>
        <th class="numeric-cell">Об. груди</th>
        <th class="numeric-cell">Об. талии</th>
        <th class="numeric-cell">Об. живота</th>
        <th class="numeric-cell">Об. ягодиц</th>
        <th class="numeric-cell">Об. бедер</th>
        <th class="numeric-cell">Биц. руки</th>
        <th class="numeric-cell">Бедро</th>
        <th class="numeric-cell">Игры</th>
        <th class="numeric-cell">Оп.</th>

      </tr>
      </thead>
      <tbody>
      <tr v-for="m in models">
        <td class="label-cell">{{ m.date}}</td>
        <td class="numeric-cell">{{ m.weight }}</td>
        <td class="numeric-cell">{{ m.breast_volume }}</td>
        <td class="numeric-cell">{{ m.waist_measurement }}</td>
        <td class="numeric-cell">{{ m.abdomen_volume }}</td>
        <td class="numeric-cell">{{ m.buttoks_volume }}</td>
        <td class="numeric-cell">{{ m.thigh_size }}</td>
        <td class="numeric-cell">{{ m.arm_biceps }}</td>
        <td class="numeric-cell">{{ m.thigh_1 }}</td>
        <td class="numeric-cell">{{ m.caviar }}</td>
        <td class="numeric-cell"></td>
      </tr>

      </tbody>
    </table>
    <br><br><br><br>
  </div>
</template>
<script>
  export default {
    name: 'progress-table',
    props: ['models'],
    filters: {
      asRusDate (value) {
        console.log(value)
        if (value === null) {
          return ''
        }
        return moment(value).format('DD.MM.YYYY')
      }
    },
    date: function() {
      return {
        models: this.models
      }
    }
  }
</script>
