<template>
  <div class="content-root">
    <div class="user-form">
      <div class="edit" @click="edit()">
        <span>编辑</span>
      </div>
      <ul class="user" v-if="showUserLink">
        <li v-for="(uItem,index) in userLink" v-bind:key="index" class="user-item">
          <div class="edit-del" v-if="canEdit" :style="{backgroundColor: baseColor}" @click="del(uItem.name)">
            <span>-</span>
          </div>
          <a :href="uItem.link">{{uItem.name}}</a>
        </li>
      </ul>
      <div v-else>点击“编辑”添加下面的链接</div>
    </div>
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
      showUserLink() {
        return this.$store.state.showUserLink
      },
      canEdit() {
        return this.$store.state.canEdit
      },
      baseColor() {
        return this.$store.state.baseColor
      },
      lists() {
        return this.$store.state.lists
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
    },
    components: {
      InnerList
    }

  }
</script>

<style scoped lang="stylus">
  .content-root
    .user-form
      position relative
      display flex
      flex-direction row
      flex-wrap wrap
      justify-content flex-start
      align-items center
      margin-left 1.25rem
      margin-bottom 1rem
      padding-left 20px
      height 5rem
      box-shadow 0 0 3px 3px rgba(0, 0, 0, 0.2)
      .edit
        position absolute
        top 1px
        right 1px
        margin-left 28px
        padding 8px
        border 1px dashed black
        font-size 18px
      .user
        display flex
        flex-direction row
        flex-wrap wrap
        .user-item
          position relative
          padding 8px
          margin 2px 8px
          box-shadow 1px 1px 4px rgba(0, 0, 0, 0.2)
          .edit-del
            display flex
            justify-content center
            align-items center
            position absolute
            bottom -5px
            right -5px
            width 1rem
            height 1rem
            border-radius 50%
            font-size 1rem
</style>
