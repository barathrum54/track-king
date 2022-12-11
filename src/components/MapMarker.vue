<template>
    <div>
        <ol-overlay :position="[40, 40]">
            <template v-slot="slotProps">
                <div class="overlay-content">
                    Hello world!<br>
                    Position: {{ slotProps.position }}
                </div>
            </template>
        </ol-overlay>
    </div>
</template>
<script setup>

</script>
<style scoped>
.overlay-content {
    background: #efefef;
    box-shadow: 0 5px 10px rgb(2 2 2 / 20%);
    padding: 10px 20px;
    font-size: 16px;
    color: black;
}
</style>