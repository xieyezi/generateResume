import * as types from './mutation-types';

const mutations = {
    [types.SET_PERSON_INFO](state, personinfo) {
        state.personinfo = personinfo;
    }
};
export default mutations;