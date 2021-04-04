<template>
  <div class="parnets-box">
    쌍둥이 형 <br>
    이름 : {{ $store.state.brother1.name }}<br>
    별명 : {{ $store.state.brother1.nick }}

    <div class="change-box">
        <div class="title-box">바꿔볼까</div>
        <div>
            동생 이름 : <input type="text" v-model="CHANGE_DATA.name">
            동생 별명 : <input type="text" v-model="CHANGE_DATA.nick">
        </div>
        <div class="bt-wrap">
            <button @click="changeData">바꿔</button>
        </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Child-second',

    data() {
      return {
        CHANGE_DATA: {
          name: '',
          nick: ''
        }
      }
    },

    methods: {
        changeData() {
          this.$store.dispatch('brother2/updateData', this.CHANGE_DATA);
        }
    },
  }
</script>