<template>
  <div class="map-wrap">
    <ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" class="map">

      <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" />

      <ol-tile-layer>
        <ol-source-osm />
      </ol-tile-layer>
      <MapMarker />
    </ol-map>
    <InfoPanel :data="data"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue';
import { useMainStore } from '@/stores/main';
import { useRouter } from 'vue-router';
import InfoPanel from '@/components/InfoPanel.vue'
import MapMarker from '@/components/MapMarker.vue'
const router = useRouter()

const mainStore = useMainStore();

const center = ref([40, 40])
const rotation = ref(0)
const zoom = ref(8)
const projection = ref('EPSG:4326')
const data = ref(mainStore.getData)
onMounted(() => {
  if (!data) {
    router.push({ path: '/' })
  }
})
</script>
<style scoped>

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
