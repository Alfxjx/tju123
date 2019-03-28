<template>
  <div class="main-view" :style="{width:mainWidth}">
    <ul class="switch">
      <li class="card1">{{$t('switch.usual')}}</li>
      <li class="card1">{{$t('switch.student')}}</li>
      <li class="card1">{{$t('switch.teacher')}}</li>
    </ul>
    <div class="side-bar">
      <ul class="card">
        <li v-for="value in $t('main')" :key="value.name">{{value.name}}</li>
      </ul>
    </div>
    <content-list class="temp"></content-list>
  </div>
</template>

<script type="text/ecmascript-6">
  import contentList from './content-list'

  export default {
    name: "main-view",
    computed: {
      mainWidth() {
        let width = document.body.clientWidth * 0.8
        return `${width}px`
      }
    },
    components: {
      contentList
    }

  }
</script>

<style scoped lang="stylus">
  .main-view
    display flex
    flex-direction row
    justify-content: flex-start
    align-items flex-start
    margin 1rem 10%
    .switch
      padding 0.5rem 0.2rem
      flex 0 0 1rem
      margin-right 0.5rem
      border 1px solid #f3f5f7
      box-shadow 0px 2px 2px rgb(121, 121, 121)
      .card1
        margin-bottom 0.3rem
    .side-bar
      padding 0.5rem
      border 1px solid #f3f5f7
      box-shadow 0px 2px 2px rgb(121, 121, 121)
</style>
