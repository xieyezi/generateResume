//用于缓存

import storage from 'xieyezi-storage'

const PERSON_KEY = '_person_';

//将个人信息保存至缓存
export function savePersonInfo(personInfo) {
    storage.set(PERSON_KEY,personInfo);
    return personInfo;
}
//每次都从缓存中取出个人信息
export function loadPersonInfo() {
    return storage.get(PERSON_KEY,{});
}

//清空缓存里面的个人信息
export function deletePersonInfo() {
    storage.remove(PERSON_KEY);
    return {};
}