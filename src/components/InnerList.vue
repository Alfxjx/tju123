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
    display flex
    flex-direction row
    flex-wrap wrap
    padding 20px
    margin-left 20px
    margin-bottom 20px
    box-shadow 0 0 3px 3px rgba(0, 0, 0, 0.2)
    .innerList
      font-size 18px
      font-weight 500
</style>
