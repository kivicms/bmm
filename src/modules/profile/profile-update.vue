<template>


    <f7-list form id="profile-form">

      <f7-list-item>
        <f7-label>Фамилия</f7-label>
        <f7-input type="text" placeholder="Фамилия" :value="model.lastname" @input="model.lastname = $event.target.value"></f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Имя</f7-label>
        <f7-input type="text" placeholder="Имя" :value="model.firstname" @input="model.firstname = $event.target.value"></f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Отчество</f7-label>
        <f7-input type="text" placeholder="Отчество" :value="model.middlename" @input="model.middlename = $event.target.value"></f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Дата рождения</f7-label>
        <f7-input type="date" :value="model.birthday" @input="model.birthday = $event.target.value"></f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Пол</f7-label>
        <f7-input type="select" placeholder="Пол" :value="model.sex">
          <option value="0">Женский</option>
          <option value="1">Мужской</option>
        </f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Телефон</f7-label>
        <f7-input type="tel" placeholder="Телефон" :value="model.phone" @input="model.phone = $event.target.value"></f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Рост</f7-label>
        <f7-input type="number" placeholder="Рост" :value="model.height" @input="model.height = $event.target.value"></f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Вес</f7-label>
        <f7-input type="number" placeholder="Вес" :value="model.weight" @input="model.weight = $event.target.value"></f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Объем груди (см)</f7-label>
        <f7-input type="number" placeholder="Объем груди (см)" :value="model.breast_volume" @input="model.breast_volume = $event.target.value"></f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Объем талии (в см)</f7-label>
        <f7-input type="number" placeholder="Объем талии (в см)" :value="model.waist_volume" @input="model.waist_volume = $event.target.value"></f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Объем бёдер (в см)</f7-label>
        <f7-input type="number" placeholder="Объем бёдер (в см)" :value="model.hip_volume" @input="model.hip_volume = $event.target.value"></f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Какой рацион вам нужен?</f7-label>
        <f7-input type="select" placeholder="Рацион" :value="model.diet_needed" @input="model.diet_needed = $event.target.value">
          <option value="0" selected>на похудение</option>
          <option value="1">На набор массы</option>
          <option value="2">На поддержание и качество тела</option>
        </f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Вы сейчас кормите грудью?</f7-label>
        <f7-input type="select" :value="model.breastfeeding_now" @input="model.breastfeeding_now = $event.target.value">
          <option value="0" selected>Нет</option>
          <option value="1">Да, полноценное ГВ (ребенок преимущественно на груди)</option>
          <option value="2">Да, эпизодическое (2-3 раза в день недолгое прикладывание)</option>
        </f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Что вы ели последние три дня? </f7-label>
        <f7-input type="textarea" placeholder="Что вы ели последние три дня? " :value="model.eat_last_three_day" @input="model.eat_last_three_day = $event.target.value"></f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Вы вегетарианец?</f7-label>
        <f7-input type="select" :value="model.is_vegetarian" @input="model.is_vegetarian = $event.target.value">
          <option value="0" selected>Нет</option>
          <option value="1">Да</option>
        </f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Какие продукты вы не едите? Если что-то едите но редко, то укажите, сколько раз в неделю.</f7-label>
        <f7-input type="textarea" placeholder="Какие продукты вы не едите? Если что-то едите но редко, то укажите, сколько раз в неделю." :value="model.do_not_eat" @input="model.do_not_eat = $event.target.value"></f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Программу какого типа тренировок вы хотели бы получить?</f7-label>
        <f7-input type="select" :value="model.training_programm" @input="model.training_programm = $event.target.value">
          <option value="0">Для зала (полностью здоров)</option>
          <option value="1">Для дома (полностью здоров)</option>
          <option value="2">Есть ограничения</option>
          <option value="3">Участвую без силовых тренировок</option>
          <option value="4">Индивидуальная программа</option>
        </f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Вы курите?</f7-label>
        <f7-input type="select" :value="model.is_smouker" @input="model.is_smouker = $event.target.value">
          <option value="0">Нет</option>
          <option value="1">Да</option>
        </f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Как часто вы употребляете алкоголь?</f7-label>
        <f7-input type="select" :value="model.alcohol" @input="model.alcohol = $event.target.value">
          <option value="0">Регулярно и часто</option>
          <option value="1">Очень редко и несистематически</option>
          <option value="2">Не употребляю вообще</option>
        </f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Есть ли у вас сахарный диабет?</f7-label>
        <f7-input type="select" :value="model.is_diabetes" @input="model.is_diabets = $event.target.value">
          <option value="0">Нет</option>
          <option value="1">Да</option>
        </f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Беременность</f7-label>
        <f7-input type="select" :value="model.pregnancy" @input="model.pregnancy = $event.target.value">
          <option value="0">я точно НЕ беременна сейчас</option>
          <option value="1">я скорее всего не беременна, но надо провериться</option>
          <option value="2">я беременна (1 триместр</option>
          <option value="3">я беременна (2 триместр</option>
          <option value="4">я беременна (3 триместр</option>
          <option value="5">я уже не беременна, но рожала в последние три месяца</option>
        </f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Есть ли у вас ограничения по здоровью для физических нагрузок?</f7-label>
        <f7-input type="textarea" placeholder="Есть ли у вас ограничения по здоровью для физических нагрузок?" :value="model.health" @input="model.health = $event.target.value"></f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Есть ли что-то, что вам нужно сообщить кураторам до начала занятий?</f7-label>
        <f7-input type="textarea" placeholder="Есть ли что-то, что вам нужно сообщить кураторам до начала занятий?" :value="model.for_curator" @input="model.for_curator = $event.target.value"></f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Есть ли у вас опыт тренировок в тренажерном зале? Если да, опишите его.</f7-label>
        <f7-input type="textarea" placeholder="Есть ли у вас опыт тренировок в тренажерном зале? Если да, опишите его." :value="model.experience" @input="model.experience = $event.target.value"></f7-input>
      </f7-list-item>



    </f7-list>
</template>
<script>
  import F7ListItem from "../../../node_modules/framework7-vue/src/components/list-item.vue";
  import F7Label from "../../../node_modules/framework7-vue/src/components/label.vue";

  export default {
    components: {
      F7Label,
      F7ListItem},
    name: 'profile-update',
    props: ['model'],
    date: function() {
      return {
        model: this.model
      }
    },
    created() {
      console.log(this.model)
    }
  }
</script>
