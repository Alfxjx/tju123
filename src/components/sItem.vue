<template>
  <div class="item">
    <a :href="item.link" class="link">{{item.name}}</a>
    <div class="edit-add" v-if="canEdit" :style="{backgroundColor: this.$store.state.baseColor}" @click="add">
      <span id="symbol">+</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "sItem",
    props: ['item'],
    methods: {
      add() {
        this.$store.commit('addToUser', {
          name: this.item.name,
          link: this.item.link
        })
        this.$store.commit('showUserLink')
      }
    },
    computed: {
      canEdit() {
        return this.$store.state.canEdit
      }
    }
  }
</script>

<style scoped lang="stylus">
  .item
    color #444d58
    padding 8px
    min-width 6rem
    overflow hidden
    margin 2px 16px
    position relative
    &:hover
      box-shadow 1px 1px 2px 1px rgba(121,121,121, 0.2)
    .edit-add
      display flex
      justify-content center
      align-items center
      position absolute
      top 10px
      right 10px
      width 1.2rem
      height 1.2rem
      border-radius 50%
      font-size 1rem
      #symbol
        color white
        font-weight 600
        padding-bottom 0.1rem
        margin-bottom 0.1rem
</style>
