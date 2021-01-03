<template>
    <div class="row">
        <form>
            <div class="col-sm-8 col-sm-offset-2 col-md-6 col-sm-offset-3 form-group">
                <label for="">add more</label>
                <textarea name="" id="" cols="30" rows="10" v-model="item"></textarea>
                <div class="btn btn-success" @click.prevent="createNew">
                    Add
                </div>
            </div>
        </form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            item: '',
            messageDuplicate: 'Trùng dữ liệu với các ô đã tồn tại'
        }
    },
    props: [
        'items'
    ],
    methods: {
        createNew() {
            if (this.item.length > 0) {
                if (!this.items.includes(this.item)) {
                    this.$emit('addItem', this.item);
                    this.item = '';
                } else {
                    this.$emit('duplicate', this.messageDuplicate);
                }
            }
        }
    }

}
</script>

<style scoped>
</style>