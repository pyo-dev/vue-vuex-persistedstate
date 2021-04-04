<template>
    <div class="parnets-box">
        <div>{{ $store.state.scholl.grade }}학년 {{ $store.state.scholl.class }}반</div>
        형 이름 :  {{ $store.state.brother1.name }}<br>
        형 별명 : {{ $store.state.brother1.nick }}<br>
        동생 이름 : {{ $store.state.brother2.name }}<br>
        동생 별명 : {{ $store.state.brother2.nick }}

        <div class="change-box">
            <div class="title-box">바꿔볼까</div>
            <div>
                학년 : <input type="text" v-model="CHANGE_DATA.grade">
                반 : <input type="text" v-model="CHANGE_DATA.class">
            </div>
            <div class="bt-wrap">
                <button @click="changeData">바꿔</button>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'parent',

    data() {
        return {
            CHANGE_DATA: {
                grade: '',
                class: '',
            }
        }
    },

    methods: {
        changeData() {
            this.$store.dispatch('scholl/updateData', this.CHANGE_DATA);
        }
    },
}
</script>