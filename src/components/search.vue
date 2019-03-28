<template>
  <div class="search-wrapper">
    <div class="search">
      <div class="btn-search" :style="{backgroundColor:themeColor}">
        <i class="icon-search ex-icon"></i>
      </div>
      <input class="input-search" type="text" v-model="sInput" :style="{border:inputBorder,width:inputWidth}">
      <div class="btn-search" :style="{backgroundColor:themeColor}">
        <img class="logo" src="../assets/arrow.png" alt="arrow">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "search",
    data() {
      return {
        sInput: ''
      }
    },
    computed: {
      themeColor() {
        return this.$store.state.baseColor
      },
      inputBorder() {
        return `1px solid ${this.$store.state.baseColor}`
      },
      inputWidth() {
        let width = document.body.clientWidth * 0.8
        return `${width - 96}px`
      }
    }
  }
</script>

<style scoped lang="stylus">
  $size = 3rem
  .search-wrapper
    display flex
    justify-content center
    height $size
    margin 1rem 10%
    .search
      display flex
      flex-direction row
      justify-content space-between
      align-items center
      .input-search
        height 45px
      .btn-search
        display flex
        justify-content center
        align-items center
        width $size
        height $size
        border-radius 0.25rem
        .icon-search
          width 1.5rem
          height 1.5rem
          font-size 1.5rem
          &:hover
            font-weight 900
        .logo
          width 1.5rem
          height 1.5rem
</style>
