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
        if(width > 600) {
          return `${width - 130}px`
        } else {
          return `${width}px`
        }
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
    margin 1rem 0
    min-width 100%
    .search
      display flex
      flex-direction row
      justify-content space-between
      align-items center
      &:hover
        border-top 5px solid #22658c
        border-bottom 5px solid #22658c
        border-radius 0.25rem
      .input-search
        height 45px
        padding-left 1rem
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
