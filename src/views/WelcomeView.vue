<script setup>
import { onMounted, ref } from 'vue';
import { getShipmentData } from '@/services/main.service';
import { loading, _alert } from '@/helpers/common.js'

import { useMainStore } from '@/stores/main';

import { useRouter } from 'vue-router';

import { vMaska } from "maska"


const router = useRouter()

const mainStore = useMainStore();

const trackingCode = ref('');

onMounted(() => {
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
      _alert(err.error || 'Unknown error, please try again later.', true)

    })
  }
}

</script>

<template>
  <main>
    <div class="ocean">
      <div class="wave"></div>
    </div>
    <div>
      <div class="uc-wrap">
        <img src="@/assets/logo.svg" class="logo" alt="">
        <h1>Please enter your tracking code</h1>
        <input v-maska data-maska="### ###" v-model="trackingCode" type="text" name="" id="" placeholder="___ ___">
        <button @click="checkCode" type="button">Check Shipment</button>
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
  background-color: #fff;
  padding: 50px;
  border-radius: 20px;
  color: #002884;
  box-shadow: 0 15px 25px rgb(3 3 3 / 30%);
  gap: 20px;
  z-index: 1;
}

.uc-wrap input {
  width: 100%;
  text-align: center;
  height: 75px;
  border: 2px solid #002884;
  border-radius: 5px;
  padding: 0 15px;
  font-size: 35px;
  letter-spacing: 2px;
  font-weight: 600;

}

.uc-wrap button {
  width: 100%;
  font-family: Roboto;
  border-radius: 10px;
  padding: 0 10px;
  margin-top: 10px;
  height: 75px;
  cursor: pointer;

  background-color: #002884;
  color: rgba(255, 255, 255, 0.8);
  font-size: 22px;
  padding: 10px 20px;
  text-transform: uppercase;
  font-weight: 800;
  transition: .3s all ease;
}

.uc-wrap button:hover {
  color: rgba(255, 255, 255, 1);
}
.uc-wrap h1 {
    font-size: 24px;
    margin-top: 10px;
  }

@media screen and (max-width: 600px) {
  .uc-wrap {
    padding: 30px 20px;
    width: 90%;
    margin: 0 auto;
  }

  .uc-wrap h1 {
    font-size: 20px;
  }

  .uc-wrap input {
    height: 50px;
  }

  .uc-wrap button {
    height: 50px;
    font-size: 24px;
  }

  .wave {
    bottom: -300px !important;
    height: 70vh !important;
    opacity: .5 !important;
  }
}

.ocean {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100vh;
}

.wave {
  background: url(@/assets/wave.svg) repeat-x;
  background-size: cover;
  position: absolute;
  opacity: 0.18;
  left: 0px;
  bottom: 0px;
  height: 500px;
  width: 100vw;
  animation: wave 30s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite, swell 8s ease -1.25s infinite;

}



@keyframes wave {
  0% {
    background-position: -1600px 0;
    
  }

  50% {
    background-position: 1600px 0;
  }

  100% {
    background-position: -1600px 0;
  }
}

@keyframes swell {

  0%,
  100% {
    transform: translate3d(0, -40px, 0);
  }

  50% {
    transform: translate3d(0, -10px, 0);
  }
}

.endWave {
  display: none;
}
</style>
