<template>
    <div class="row">
        <items-component v-for="(item, index) in items" :key="item" @click.native="removeMethod(index)" style="white-space: pre;">{{item}}</items-component>
    </div>
</template>

<script>
import Items from './Items.vue';
export default {
    props: [
        'items'
    ],

    components: {
        'items-component': Items,
    },

    methods: {
        removeMethod(index) {
            this.$emit('deleteCard', index);
        }
    },

}
</script>

<style scoped>
</style>