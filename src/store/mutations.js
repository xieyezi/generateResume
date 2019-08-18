import * as types from './mutation-types';

const mutations = {
    [types.SET_PERSON_INFO](state, person) {
        state.person = person;
    }
};
export default mutations;