<template>
  <div>
    <tab></tab>
    <search></search>
    <main-view></main-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import tab from '../components/tab'
  import mainView from '../components/main-view'
  import search from '../components/search'

  export default {
    name: 'daohang',
    components: {
      tab, mainView, search
    }
  }
</script>

<style scoped lang="stylus">

</style>
