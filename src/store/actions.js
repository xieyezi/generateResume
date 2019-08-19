import * as types from './mutation-types'
import { savePersonInfo, deletePersonInfo, } from '../cache/cache'
import { personinfo } from "./getters";

/**保存个人信息
 *
 * @param commit
 * @param person
 */
export const savePerson = function ({ commit }, personinfo) {
    commit(types.SET_PERSON_INFO, savePersonInfo(personinfo));
};
/**
 * 删除个人信息
 * @param commit
 * @param person
 */
export const deletePerson = function ({ commit }, personinfo) {
    commit(types.SET_PERSON_INFO, deletePersonInfo(personinfo));
};
