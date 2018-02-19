<template>
  <f7-page>
    <f7-navbar title="Редактирование профиля" back-link="Back"></f7-navbar>
    <f7-list form>
      <f7-list-item>
        <f7-label>Фамилия</f7-label>
        <f7-input type="text" placeholder="Фамилия"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Имя</f7-label>
        <f7-input type="text" placeholder="Имя"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Отчество</f7-label>
        <f7-input type="text" placeholder="Отчество"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>E-mail</f7-label>
        <f7-input type="email" placeholder="E-mail"></f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Телефон</f7-label>
        <f7-input type="text" placeholder="Телефон"></f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Рост</f7-label>
        <f7-input type="text" placeholder="Рост"></f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Вес</f7-label>
        <f7-input type="text" placeholder="Вес"></f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>URL</f7-label>
        <f7-input type="url" placeholder="URL"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Password</f7-label>
        <f7-input type="password" placeholder="Password"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Phone</f7-label>
        <f7-input type="tel" placeholder="Phone"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Gender</f7-label>
        <f7-input type="select">
          <option selected>Male</option>
          <option>Female</option>
        </f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Birth date</f7-label>
        <f7-input type="date" placeholder="Birth date" value="2014-04-30"></f7-input>
      </f7-list-item>
      <f7-list-item title="Toggle">
        <f7-toggle slot="after"></f7-toggle>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Slider</f7-label>
        <f7-input>
          <f7-range min="0" max="100" value="50" step="1" :label="true"></f7-range>
        </f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Textarea</f7-label>
        <f7-input type="textarea" placeholder="Bio"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Resizable</f7-label>
        <f7-input type="textarea" placeholder="Bio" resizable></f7-input>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
  export default {
    name: 'profile-update'
  }
</script>
