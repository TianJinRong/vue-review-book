import Vue from 'vue'
import * as Types from './mutation-types'
export default {
    [Types.TEST_MUTATION](state, testword) {
        Vue.set(state, 'test', testword); // make test mutation
    }
}