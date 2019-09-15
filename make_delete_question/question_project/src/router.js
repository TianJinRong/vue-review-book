import Vue from 'vue'
import Router from 'vue-router'
import Questions from '@/components/Questions'
import AddQuestion from '@/components/AddQuestion'
import Question from '@/components/Question'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'questions',
      component: Questions
    },
    {
      path: '/question',
      name: 'add-question',
      component: AddQuestion
    },
    {
      path: '/question/:id',
      name: 'add-question',
      component: Question
    }
  ]
})
