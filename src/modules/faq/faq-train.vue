<template>
  <f7-page>
    <f7-navbar title="FAQ тренировки" back-link="Back"></f7-navbar>
    <div class="list accordion-list">
      <ul>
        <li v-for="item in items" class="accordion-item">
          <a href="#" class="item-content item-link">
            <div class="item-inner">
              <div class="item-title">{{ item.question }}</div>
            </div>
          </a>
          <div class="accordion-item-content">
            <div class="block">
              <span v-html="item.answer"></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </f7-page>
</template>
<script>
  export default {
    name: 'faq-food',
    data: function () {
      return {
        items: []
      }
    },
    created() {
      this.$http.get('faqs?FaqSearch[category_id]=1').then(response => {
        this.items = response.body.items
      }, response => {
      })

    }
  }
</script>
