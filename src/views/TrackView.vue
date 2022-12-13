<template>
  <div class="map-wrap">
    <ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" class="map">

      <ol-view ref="view" :center="[longitude, latitude]" :rotation="rotation" :zoom="zoom" :projection="projection" />

      <ol-tile-layer>
        <ol-source-osm />
      </ol-tile-layer>
      <MapMarker :position="[longitude, latitude]" :type="vehicle_type" :driver="{name: shipment.driver }" :shipment="[shipment]" />
    </ol-map>
    <InfoPanel :data="data"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted , computed} from 'vue';
import { useMainStore } from '@/stores/main';
import { useRouter } from 'vue-router';
import InfoPanel from '@/components/InfoPanel.vue'
import MapMarker from '@/components/MapMarker.vue'
const router = useRouter()

const mainStore = useMainStore();
const shipment = computed(() => {
  return data.value.shipment
})
const longitude = computed(() => {
  return data.value.shipment.vehicles[0].longitude
})
const latitude = computed(() => {
  return data.value.shipment.vehicles[0].latitude
})
const vehicle_type = computed(() => {
  return data.value.shipment.vehicles[0].vehicle_type
})
const rotation = ref(0)
const zoom = ref(10)
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
