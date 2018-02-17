import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';
import FormPage from './pages/form.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/not-found.vue';

import Message from './modules/message/message.vue'
import Motivation from './modules/motivation/motivation.vue'
import Payment from './modules/payment/payment.vue'
import Progress from './modules/progress/progress.vue'
import Question from './modules/question/question.vue'
import Ration from './modules/ration/ration.vue'
import Recipe from './modules/recipe/recipe.vue'
import SpecialOffer from './modules/specialoffer/specialoffer.vue'
import Training from './modules/training/training.vue'

import PanelLeftPage from './pages/panel-left.vue';
import PanelRightPage from './pages/panel-right.vue';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/message/',
    component: Message
  },
  {
    path: '/motivation/',
    component: Motivation
  },
  {
    path: '/payment/',
    component: Payment
  },
  {
    path: '/progress/',
    component: Progress
  },
  {
    path: '/question/',
    component: Question
  },
  {
    path: '/ration/',
    component: Ration
  },
  {
    path: '/recipe/',
    component: Recipe
  },
  {
    path: '/specialoffer/',
    component: SpecialOffer
  },
  {
    path: '/training/',
    component: Training
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/panel-right/',
    component: PanelRightPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
