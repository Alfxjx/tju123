<template>
  <div class="item">
    <a :href="item.link" class="link">{{item.name}}</a>
    <div class="edit-add" v-if="canEdit" :style="{backgroundColor: this.$store.state.baseColor}" @click="add">
      <span>+</span>
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
    padding 8px
    margin 2px 8px
    position relative
    box-shadow 1px 1px 4px rgba(0, 0, 0, 0.2)
    .edit-add
      display flex
      justify-content center
      align-items center
      position absolute
      top -5px
      right -5px
      width 1rem
      height 1rem
      border-radius 50%
      font-size 1rem
</style>
