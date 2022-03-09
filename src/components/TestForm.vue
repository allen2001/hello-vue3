<template>
    <div class="test-form">
        name:
        <input type="text" v-model="_name">
        age:
        <input type="text" v-model="_age">
        sex:
        <input type="text" v-model="_sex">
    </div>
</template>

<script>
import { useVModel } from '@vueuse/core'
export default {
    props: {
        name: String,
        age: String,
        sex: String
    },
    setup(props) {
        // const emit = context.emit
        const _name = useVModel(props, 'name')
        const _age = useVModel(props, 'age')
        const _sex = useVModel(props, 'sex')

        return {
            _name,
            _age,
            _sex
        }
    },
}
</script>