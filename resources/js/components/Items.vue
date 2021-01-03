<template>
        <div class="card col-6 col-md-3">
            <div class="card-body item">
                <span>
                    <slot></slot>
                </span>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .card-body {
        font-size: 20px;
        color: blue;
    }

    .item {
        cursor: pointer;
    }

    .item:hover {
        background-color: blanchedalmond;
    }
</style>