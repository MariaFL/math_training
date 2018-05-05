<template>
    <div class="alert alert-secondary">
        <h3>{{ x }} + {{ y }} = ?</h3>
        <hr>
        <div class="buttons">
            <button class="btn btn-success" v-for="number in answer" @click="onAnswer(number)">
                {{ number }}
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['settings'],
        data() {
            return {
                x: mtRund(this.settings.from, this.settings.to),
                y: mtRund(this.settings.from, this.settings.to)
            }
        },
        computed: {
            good() {
                return this.x + this.y;
            },
            answer() {
                let res = [this.good];

                while(res.length < this.settings.variants) {
                    let num = mtRund(this.good - this.settings.range, this.good + this.settings.range);
                    if (res.indexOf(num) === -1) {
                        res.push(num);
                    }
                }

                return res.sort(function () {
                    return Math.random() > 0.5;
                });
            }
        },
        methods: {
            onAnswer(num) {
                if (num === this.good) {
                    this.$emit('success')
                } else {
                    this.$emit('error', `${this.x} + ${this.y} = ${this.good}!`)
                }
            }
        }
    }

    function mtRund(min, max) {
        let diff = max - min;
        return Math.floor(Math.random() * (diff + 1)) + min;
    }
</script>

<style scoped>
    .alert {
        text-align: center;
    }
    h3, .btn {
        margin: 30px 0;
    }
    .buttons {
        display: flex;
        justify-content: space-around;
    }
</style>