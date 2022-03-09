<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <!-- <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul> -->
    <h3>
      <span @click="setUserName('allen2001')">{{ userName }}</span> test mock
      data
    </h3>
    <ul>
      <li v-for="item in dataList" :key="item.url">
        <a :href="item.url" rel="noopener">{{ item.name }}</a>
      </li>
    </ul>
    <h3>vueuse play</h3>
    <div>
      <h4>Mouse: {{ x }} x {{ y }}</h4>
    </div>
    <div style="margin-bottom: 20px">
      <p>Interval fired: {{ counter }}</p>
      <button @click="pause">暂停</button>
      <button @click="resume">继续</button>
    </div>
    <div>
      <TestForm
        v-model:name="formData.name"
        v-model:age="formData.age"
        v-model:sex="formData.sex"
      ></TestForm>
      <p>{{ formData }}</p>
      <button @click="handleSubmit">提交</button>
    </div>
  </div>
</template>

<script setup>
// 引入依赖
import { getDataList } from "../api/mock";
import { ref, reactive, onMounted } from "vue";
import { useName } from "../hooks/base";
import { useMouse, useInterval } from "@vueuse/core";
import TestForm from "./TestForm.vue";

// 引入hooks
const { userName, setUserName } = useName();
const { x, y } = useMouse();
const { counter, pause, resume } = useInterval(1000, { controls: true });

defineProps({
  msg: String,
})
const emit = defineEmits(['update:msg'])

let dataList = ref([]);
const getMockData = async () => {
  dataList.value = await getDataList();
  emit("update:msg", "get mock data succ");
};

onMounted(getMockData);

const formData = reactive({
  name: "",
  age: "",
  sex: "",
});
const handleSubmit = () => {
  console.log("handleSubmit", formData);
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
