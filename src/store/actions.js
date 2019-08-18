import * as types from './mutation-types'
import { savePersonInfo, deletePersonInfo, } from '../cache/cache'
import { person } from "./getters";

/**保存个人信息
 *
 * @param commit
 * @param person
 */
export const savePerson = function ({ commit }, person) {
    commit(types.SET_PERSON_INFO, savePersonInfo(person));
};
/**
 * 删除个人信息
 * @param commit
 * @param person
 */
export const deletePerson = function ({ commit }, person) {
    commit(types.SET_PERSON_INFO, deletePersonInfo(person));
};
