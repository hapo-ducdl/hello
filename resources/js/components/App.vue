<template>
    <div class="container">
        <layout-component :items="items" @deleteCard="removeCard"></layout-component>
        <new-item @addItem="addNewItem" :items="items" @duplicate="duplicate"></new-item>
        <switch-component v-model="isActive"></switch-component>
        <p>{{ isActive }}</p>
    </div>    
</template>

<script>
import ItemsLayout from './ItemsLayout.vue';
import NewItem from './NewItem.vue';
import Switch from './Switch.vue';
export default {
    data() {
        return {
            items: [
                'I love you',
                'hello'
            ],
            maxItems: 10,
            index:'',
            isActive: true
        }
    },
    created() {
    },
    components: {
        'layout-component': ItemsLayout,
        newItem: NewItem,
        'switch-component': Switch
    },
    methods: {
        addNewItem(item) {
                this.items.push(item);
        },

        removeCard(index) {
            this.items.splice(index, 1);
        },

        duplicate(message) {
            alert(message);
        }
            
    },
}
</script>