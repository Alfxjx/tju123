<template>
  <div id="user-add">
    add your own
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "user-add"
  }
</script>

<style scoped lang="stylus">
  #user-add
    background white
    max-width 80%
    position relative
    display flex
    flex-direction row
    flex-wrap wrap
    justify-content flex-start
    align-items center
    margin-left auto
    margin-right auto
    margin-bottom 1rem
    padding 20px
    min-height 3rem
    box-shadow 0 0 1px 1px rgba(121, 121, 121, 0.1)
    &:hover
      box-shadow 1px 1px 1px 1px rgba(121, 121, 121, 0.2)
</style>
