<template>
  <div class="map-wrap">
    <ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" class="map">

      <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" />

      <ol-tile-layer>
        <ol-source-osm />
      </ol-tile-layer>

      <ol-overlay :position="[40, 40]">
        <template v-slot="slotProps">
          <div class="overlay-content">
            Hello world!<br>
            Position: {{ slotProps.position }}
          </div>
        </template>
      </ol-overlay>
    </ol-map>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue';

const center = ref([40, 40])
const rotation = ref(0)
const zoom = ref(8)
const projection = ref('EPSG:4326')

onMounted(() => {

})
</script>
<style scoped>
.overlay-content {
    background: #efefef;
    box-shadow: 0 5px 10px rgb(2 2 2 / 20%);
    padding: 10px 20px;
    font-size: 16px;
    color: black;
}
.map-wrap {
  height: 100%;
  width: 100%;
}

.map {
  height: 100%;
  width: 100%;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
