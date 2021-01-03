<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-md-6">
                <h1 v-text="'somthing else'"></h1>
                <p v-html="'<h1>text</h1>'"></p>
                <p v-custom-color.delayed.blink="'red'">NoNo</p>
            </div>    
        </div>
    </div>
</template>

<script>
export default {
    directives: {
        'custom-color': {
            bind(el, binding, vNode) {
                var delay = 0;
                if (binding.modifiers.delayed) {
                    delay = 5000;
                }
                if (binding.modifiers.blink) {
                    setTimeout(function() {
                        var mainColor = binding.value;
                        var secondColor = 'black';
                        var curentColor = mainColor;
                    setInterval(function() {
                        curentColor === secondColor ? curentColor = mainColor : curentColor = secondColor;
                        el.style.backgroundColor = curentColor;
                    }, 500);
                    }, delay);
                } else {
                    setTimeout(function() {
                    if (binding.arg === "background") {
                        el.style.backgroundColor = binding.value;
                    } else {
                        el.style.color =binding.value
                    }
                }, delay);
                }
            }
        }
    }
}
</script>
