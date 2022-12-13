<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref, computed } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { useMainStore } from '@/stores/main';

const mainStore = useMainStore();


const isLoading = ref(false)

onMounted(() => {
  mainStore.resetData();

  document.addEventListener("loading", function (e) {
    isLoading.value = e.detail
  })
})

</script>

<template>
  <div class="wrapper">
    
    <div class="content">
      <loading v-model:active="isLoading" :can-cancel="false" :on-cancel="onCancel" :is-full-page="fullPage" />

      <RouterView />
    </div>
    <!-- <div class="navbar-wrapper">
      <nav>
        <RouterLink to="/">Welcome</RouterLink>
        <RouterLink to="/track">Track</RouterLink>
      </nav>
    </div> -->
  </div>

</template>

<style>
.swal2-confirm{
  background-color: #3f50b5 !important;
  color: white;
}
.wrapper {
  height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-color: #3f50b5;
}

.content {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar-wrapper {
  border: 1pt solid blue;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

nav {
  display: flex;
  justify-content: space-around;
  width: 50%;
}

nav a {
  text-decoration: none;
  color: white;
}
.icon{
  width: 20px;
  height: 20px;
}
</style>
