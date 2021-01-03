<template>
    <div>
        <div
            id="on" 
            :class="{active: value}" 
            @click="switchStatus(true)">
            On
         </div>
        <div id="off"
            :class="{active: !value}"
            @click="switchStatus(false)">
            Off
          </div>
    </div>
</template>

<script>
    export default {
        props: [
            'value'
        ],
        methods: {
            switchStatus(checkStatus) {
                this.$emit('input', checkStatus);
            }
        }
    }
</script>

<style scoped>
    #on, #off {
        width: 40px;
        height: 20px;
        background-color: lightgrey;
        padding: 2px;
        display: inline-block;
        margin: 10px -2px;
        box-sizing: content-box;
        cursor: pointer;
        text-align: center;
    }

    #on:hover, #on.active {
        background-color: lightseagreen;
    }

    #off:hover, #off.active {
        background-color: red;
    }
</style>
