<template>
  <div id="daohang">
    <div class="daohang-main">
      <tab></tab>
      <search class="search"></search>
      <main-view></main-view>
    </div>
    <top></top>
    <stick></stick>
  </div>
</template>

<script type="text/ecmascript-6">
  import tab from '../components/tab'
  import mainView from '../components/main-view'
  import search from '../components/search'
  import stick from '../components/stick'
  import top from '../components/top'

  export default {
    name: 'daohang',
    components: {
      tab, mainView, search, stick, top
    }
  }
</script>

<style scoped lang="stylus">
  #daohang
    display flex
    flex-direction column
    align-items center
    .daohang-main
      flex 1
      width 100%
      .search
        margin-top 5rem
</style>
