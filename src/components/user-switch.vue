<template>
  <div id="user-switch">
    <div class="add-from-bottom" @click="showPage(0)">
      快速入口
    </div>
    <div class="user-add" @click="showPage(1)">
      自定义
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "user-switch",
    methods: {
      showPage(num) {
        this.$store.commit('changeShowPage', num)
        // console.log(this.$store.state.showPage)
      }
    }
  }
</script>

<style scoped lang="stylus">
  #user-switch
    display flex
    flex-direction column
    align-items flex-start
    width 5rem
    background-color white
    padding 0.5rem
    margin 0 0 0.3em
    font-weight 500
    .add-from-bottom
      margin-bottom 1em
    .user-add
      line-height normal
</style>
