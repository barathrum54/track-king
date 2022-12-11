<template>
    <div>
        <div class="info-panel" :class="{ hidden: isHidden }">
            <div class="info-panel-header">
                <div class="info-panel-header-title">
                    <div class="info-panel-hide" @click="toggleInfoPanel">X</div>
                    <h3>{{data.tc}} no'lu sefer</h3>
                </div>
            </div>
        </div>
        <div v-if="isHidden" @click="toggleInfoPanel" class="show-panel-btn">Göster</div>
    </div>
</template>
<script setup>

import { ref } from 'vue'
import { onMounted } from 'vue';

const isHidden = ref(false);

const props =
    defineProps({
        data: {
            type: Object,
            required: true,
        },
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
    background-color: #ecf0f1;
    box-shadow: 0 5px 10px rgb(2 2 2 / 20%);

    width: 1000px;
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

    color: black;
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
    background-color: #ecf0f1;
    color: rgba(0, 0, 0, 0.8);
    border-radius: 50%;
    text-transform: uppercase;
    padding: 10px 20px;
    cursor: pointer;

    box-shadow: 0 5px 10px rgb(2 2 2 / 20%);

}
</style>