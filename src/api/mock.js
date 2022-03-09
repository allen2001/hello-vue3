exports.getDataList = () => {
    let list = []
    return new Promise((resolve) => {
        setTimeout(() => {
            list = [
                { url: 'https://router.vuejs.org', name: 'vue-router' },
                { url: 'https://vuex.vuejs.org', name: 'vuex' },
                { url: 'https://github.com/vuejs/vue-devtools#vue-devtools', name: 'vue-devtools' },
            ]
            resolve(list)
        }, 1000)
    })
}