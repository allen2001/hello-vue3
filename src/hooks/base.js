/* 自定义hooks */

import { ref } from 'vue'

export const useName = () => {
    let userName = ref('allen')

    const setUserName = (name) => {
        userName.value = name
    }

    return {
        userName,
        setUserName
    }
}