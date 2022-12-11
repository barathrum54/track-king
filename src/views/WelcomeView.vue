<script setup>
import { onMounted, ref } from 'vue';
import { getShipmentData } from '@/services/main.service';
import { loading, _alert } from '@/helpers/common.js'

import { useMainStore } from '@/stores/main';

import { useRouter } from 'vue-router';



const router = useRouter()

const mainStore = useMainStore();

const trackingCode = ref(944414);

onMounted(() => {
  console.log(mainStore.getData)
})
const checkCode = () => {
  if (!trackingCode.value) {
    _alert('Please enter your tracking code', true)
  } else {
    getShipmentData(trackingCode.value).then((res) => {
      mainStore.setData(res.data)
      router.push({ path: '/track' })
    }).catch((err) => {
      console.log(err)
      _alert(err.error, true)

    })
  }
}

</script>

<template>
  <main>
    <div>
      <div class="uc-wrap">
        <h1>Please enter your tracking code</h1>
        <input v-model="trackingCode" type="text" name="" id="" placeholder="Tracking code">
        <button @click="checkCode" type="button">Check</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.uc-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.uc-wrap input {
  width: 100%;
  height: 30px;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 0 10px;
  margin-top: 10px;
}

.uc-wrap button {
  width: 100%;
  font-family: Roboto;
  height: 30px;
  border-radius: 5px;
  padding: 0 10px;
  margin-top: 10px;
  cursor: pointer;
}
</style>
