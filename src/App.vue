<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="wrapper">
    <div class="content">
      <RouterView />
    </div>
    <div class="navbar-wrapper">
      <nav>
        <RouterLink to="/">Welcome</RouterLink>
        <RouterLink to="/track">Track</RouterLink>
      </nav>
    </div>
  </div>

</template>

<style scoped>

.wrapper {
  height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.content{
  border: 1pt solid red;
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.navbar-wrapper{
  border: 1pt solid blue;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
nav{
  display: flex;
  justify-content: space-around;
  width: 50%;
}
nav a{
  text-decoration: none;
  color: white;
}
</style>
