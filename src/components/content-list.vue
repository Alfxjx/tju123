<template>
  <div class="content-root">
    <div class="switch-wrapper">
      <user-switch></user-switch>
    </div>
    <div v-show="currentPage===0">
      <user-form></user-form>
    </div>
    <div v-show="currentPage===1">
      <user-add></user-add>
    </div>
    <div v-for="(list,index) in lists" :key="index">
      <InnerList :list="list"></InnerList>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import InnerList from './InnerList'
  import userForm from './user-form'
  import userSwitch from './user-switch'
  import userAdd from './user-add'

  export default {
    name: "content-list",
    // data() {
    //   return {
    //     currentPage: 0
    //   }
    // },
    computed: {
      currentPage() {
        return this.$store.state.showPage
      },
      lists() {
        return this.$store.state.lists
      }
    },
    components: {
      InnerList, userForm, userSwitch, userAdd
    }

  }
</script>

<style scoped lang="stylus">
  .content-root
    position relative
    .switch-wrapper
      position absolute
      top 0
      left 0
</style>
