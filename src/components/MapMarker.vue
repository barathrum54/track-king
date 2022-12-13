<template>
    <div>
        <ol-overlay :position="position">
            <template v-slot="slotProps">
                <div class="overlay-content">
                    <img class="vehicle-icon" @click="toggleInfo" src="@/assets/vehicle-icons/truck.svg" v-if="type == 'Kamyon'" alt="">
                    <img class="vehicle-icon" @click="toggleInfo" src="@/assets/vehicle-icons/tractor.svg" v-else alt="">
                    <div class="info" :class="{ active: infoActive }">
                        <div class="number-plate-wrapper">
                            <div class="number-plate" v-for="item in vehicles">{{ item.plate_number }}</div>
                        </div>
                        <div class="driver-name"> <img class="icon" src="@/assets/icons/steering-wheel.png" alt=""> {{
                                driver.name
                        }}</div>
                        <div class="share-button" @click="shareButton"> Konumu Paylaş</div>
                    </div>
                </div>
            </template>
        </ol-overlay>
    </div>
</template>
<script setup>

import { computed, ref } from 'vue'
import { onMounted } from 'vue';


const props =
    defineProps({
        type: {
            type: Object,
            required: true,
        },
        position: {
            type: Array,
            required: true,
        },
        driver: {
            type: Object,
            required: true,
        },
        shipment: {
            type: Object,
            required: true,
        }
      
    })

const infoActive = ref(false);

const toggleInfo = () => {
    infoActive.value = !infoActive.value;
}

const vehicles = computed(() => {
    return props.shipment[0].vehicles
})
const shareButton = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${props.position[1]}%2C${props.position[0]}`, '_blank');
}
onMounted(() => {
})
</script>
<style scoped>
.overlay-content .vehicle-icon {
    height: 75px;
    width: 75px;
    object-fit: contain;
    cursor: pointer;
}

.overlay-content {
    display: flex;
    justify-content: center;
    align-items: center;
}

.overlay-content .info {
    position: absolute;
    min-width: 200px;
    height: 0px;
    bottom: 75px;
    opacity: 0;
    background: #3f50b5;
    color: black;
    transition: .5s all ease-in-out;
    overflow: hidden;
    border-radius: 20px;
    padding: 10px;
}

.overlay-content .info div {
    font-weight: 800;
    color: white;
}

.overlay-content .info.active {
    min-width: 200px;
    height: 110px;
    opacity: .8;
}

.driver-name {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.number-plate-wrapper {
    gap: 5px;
    display: flex;
}

.number-plate {
    display: flex;
    text-align: center;
    border: 1pt solid white;
    width: fit-content;
    margin: 0 auto;
    padding: 0px 10px;
    margin-bottom: 5px;
    white-space: nowrap;

}

.share-button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 100%;
    float: right;
    padding: 2px 0px;
    margin-top: 5px;
    border-radius: 5px;
    transition: .3s all ease;
}

.share-button:hover {
    background: white;
    color: black !important;
}
</style>