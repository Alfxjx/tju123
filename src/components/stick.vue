<template>
  <div id="stick" :style="{background:baseColor}">

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "stick",
    computed: {
      baseColor() {
        return this.$store.state.baseColor
      }
    }
  }
</script>

<style scoped lang="stylus">
  #stick
    flex 0 5rem
    width 100%
    height 5rem
</style>
