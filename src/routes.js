import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';
import FormPage from './pages/form.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/not-found.vue';

import Message from './modules/message/message.vue'
import FaqFood from './modules/faq/faq-food.vue'
import FaqTrain from './modules/faq/faq-train.vue'
import Motivation from './modules/motivation/motivation.vue'
import Payment from './modules/payment/payment.vue'
import Progress from './modules/progress/progress.vue'
import Question from './modules/question/question.vue'
import Ration from './modules/ration/ration.vue'
import Recipe from './modules/recipe/recipe.vue'
import RecipeView from './modules/recipe/recipe-view.vue'
import SpecialOffer from './modules/specialoffer/specialoffer.vue'
import Training from './modules/training/training.vue'
import Profile from './modules/profile/profile.vue'

import PanelLeftPage from './pages/panel-left.vue';
import PanelRightPage from './pages/panel-right.vue';

import Login from './pages/login.vue'

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/login/',
    component: Login
  },
  {
    path: '/message/',
    component: Message
  },
  {
    path: '/faq-food',
    component: FaqFood
  },
  {
    path: '/faq-train',
    component: FaqTrain
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
    path: '/recipe-view/:id',
    component: RecipeView
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
    path: '/profile/',
    component: Profile
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
