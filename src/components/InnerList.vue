<template>
  <div class="wrapper">
    <div class="innerList" v-for="(item,index) in list" :key="index">
      <sItem :item="item"></sItem>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import sItem from './sItem'

  export default {
    name: "InnerList",
    props: ['list'],
    components: {
      sItem
    }
  }
</script>

<style scoped lang="stylus">
  .wrapper
    background white
    display flex
    flex-direction row
    flex-wrap wrap
    max-width 80%
    padding 20px
    margin-left auto
    margin-right auto
    margin-bottom 20px
    box-shadow 0 1px 1px 1px rgba(121,121,121, 0.2)
    &:hover
      box-shadow 1px 1px 2px 1px rgba(121,121,121, 0.2)
    .innerList
      font-size 18px
      font-weight 500
</style>
