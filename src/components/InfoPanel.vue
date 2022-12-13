<template>
    <div>
        <div class="info-panel" :class="{ hidden: isHidden }">
            <div class="info-panel-header">
                <div class="info-panel-header-title">
                    <div class="info-panel-hide" @click="toggleInfoPanel">X</div>
                    <h3>{{ client }} - Sevkiyat #{{ data.tc }} </h3>
                </div>

            </div>
            <div class="info-panel-content">
                <div class="route">
                    <div class="route-item" v-for="item in routes" :key="index">{{ item.name }}</div>
                </div>
                <div class="additional-info">
                    <div class="status-text">Tamamlandı</div>
                    <div class="weight-info">
                        <h4>{{ data.shipment.weight }} Kg</h4>
                    </div>
                </div>
                <div class="dates">
                    {{ data.shipment.start_at }} - {{ data.shipment.end_at || '-' }}
                </div>
            </div>
        </div>
        <div v-if="isHidden" @click="toggleInfoPanel" class="show-panel-btn">Detay</div>
    </div>
</template>
<script setup>

import { ref, computed } from 'vue'
import { onMounted } from 'vue';

const isHidden = ref(false);

const props =
    defineProps({
        data: {
            type: Object,
            required: true,
        },
    })
const routes = computed(() => {
    return props.data.shipment.routes
})
const client = computed(() => {
    return props.data.shipment.client
})
const toggleInfoPanel = () => {
    isHidden.value = !isHidden.value;
}

onMounted(() => {
    console.log(props.data)
})

</script>
<style scoped>
.info-panel {
    border-radius: 5px;
    background-color: #3f50b5;
    box-shadow: 0 5px 10px rgb(2 2 2 / 20%);

    width: 500px;
    height: 150px;

    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;

    position: fixed;
    bottom: 20px;
    left: 0;
    right: 0;

    margin: 0 auto;

    transition: .5s all ease;
    opacity: .85;
}

.info-panel.hidden {
    transform: translateY(200px);
    opacity: 0;
}

.info-panel-header {
    width: 100%;
    height: 50px;

    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    position: relative;

}

.info-panel-hide {
    position: absolute;
    left: 10px;
    top: 10px;
    bottom: 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.info-panel-header-title {
    width: 100%;
    height: 100%;

    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;

    color: white;
    text-transform: capitalize;
    font-size: 24px;
}

.show-panel-btn {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    width: 70px;
    height: 70px;
    bottom: 20px;
    left: 20px;
    right: 0;
    background-color: #3f50b5;
    color: white;
    font-weight: bolder;
    border-radius: 50%;
    text-transform: uppercase;
    padding: 10px 20px;
    cursor: pointer;

    box-shadow: 0 5px 10px rgb(2 2 2 / 20%);
}

.info-panel-content {
    color: white;
    width: 80%;
    padding: 0px 20px;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
}

.route {
    display: flex;
}

.route-item {
    font-size: 22px;
    margin-right: 5px;
}

.route-item:not(:last-child)::after {
    content: '►';
    opacity: .7;
    margin-left: 10px;
    font-size: 15px;
}
.additional-info{
    display: flex;
    gap: 5px;
    margin-bottom: 5px;    
    margin-top: 10px;
}
.status-text{
    background-color: white;
    color: black;
    padding: 0px 5px;
    border-radius: 5px;
}
.weight-info{
    background-color: white;
    color: black;
    padding: 0px 5px;
    border-radius: 5px;
}
</style>