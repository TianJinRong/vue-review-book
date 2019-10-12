import Vue from 'vue'
import Router from 'vue-router'
import Questions from '@/components/Questions'
import AddQuestion from '@/components/AddQuestion'
import Question from '@/components/Question'
import EditQuestion from '@/components/EditQuestion'

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
      name: 'show-question',
      component: Question
    },
    {
      path: '/question/:id/edit',
      name: 'edit-question',
      component: EditQuestion
    }
  ]
})
