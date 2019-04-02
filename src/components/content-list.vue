<template>
  <div class="root">
    <div class="user-form"></div>
    <div v-for="(list,index) in lists" :key="index">
      <InnerList :list="list"></InnerList>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import InnerList from './InnerList'

  export default {
    name: "content-list",
    computed: {
      lists() {
        return this.$store.state.lists
      }
    },
    components: {
      InnerList
    }

  }
</script>

<style scoped lang="stylus">

</style>
