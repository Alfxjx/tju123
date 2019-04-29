<template>
  <div class="user-form">
    <div class="edit" @click="edit()">
      <span>编辑</span>
    </div>
    <ul class="user" v-if="showUserLink">
      <li v-for="(uItem,index) in userLink" v-bind:key="index" class="user-item">
        <div class="edit-del" v-if="canEdit" :style="{backgroundColor: baseColor}" @click="del(uItem.name)">
          <span id="symbol">-</span>
        </div>
        <a :href="uItem.link">{{uItem.name}}</a>
      </li>
    </ul>
    <div v-else class="hint-edit">点击“编辑”添加下面的链接</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "user-form",
    computed: {
      showUserLink() {
        return this.$store.state.showUserLink
      },
      canEdit() {
        return this.$store.state.canEdit
      },
      baseColor() {
        return this.$store.state.baseColor
      },
      userLink() {
        return this.$store.state.userLink
      }
    },
    methods: {
      edit() {
        this.$store.commit('switchEdit')
      },
      del(uName) {
        this.$store.commit('delEdit', {
          name: uName
        })
        console.log('deleted')
      }
    }
  }
</script>

<style scoped lang="stylus">
  .user-form
    background white
    max-width 80%
    position relative
    display flex
    flex-direction row
    flex-wrap wrap
    justify-content flex-start
    align-items center
    margin-left auto
    margin-right auto
    margin-bottom 1rem
    padding 20px
    min-height 3rem
    box-shadow 0 0 1px 1px rgba(121, 121, 121, 0.1)
    &:hover
      box-shadow 1px 1px 1px 1px rgba(121, 121, 121, 0.2)
    .edit
      position absolute
      top 1px
      right 1px
      margin-left 28px
      padding 8px
      border 1px dashed #444d58
      font-size 18px
      &:hover
        color #22658c
        border 1px solid #22658c
    .user
      display flex
      flex-direction row
      flex-wrap wrap
      padding 0.5rem
      .user-item
        min-width 6rem
        font-size 1.2rem
        position relative
        padding 8px
        margin 2px 8px
        &:hover
          box-shadow 1px 1px 2px 1px rgba(121, 121, 121, 0.2)
        .edit-del
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
    .hint-edit
      padding-left 1.5rem
      font-size 18px
      line-height 2rem
      &:hover
        color #22658c
</style>
