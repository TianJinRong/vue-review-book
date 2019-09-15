import * as Types from './mutation-types';

export default {
    [Types.TEST_MUTATION] ({commit}, testword) {
        commit(Types.TEST_MUTATION, testword); // make test action
    }
}