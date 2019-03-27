<template>
  <div class="tab-wrapper">
    <div class="tab-list">
      <ul class="li-left" @click="toHome()">
        <li>
          <img class="logo" src="" alt="logo">
        </li>
        <li class="li-title">天大导航</li>
      </ul>
      <ul class="li-mid">
        <li>
          <img class="logo" src="../assets/sun.png" alt="天气">
        </li>
        <li id="position">天津</li>
        <li class="li-date" @click="backToToday()">{{month}}月{{day}}日</li>
        <li class="li-week">第{{week}}周</li>
        <li>
          <img class="logo" src="../assets/date.png" alt="日历">
          <el-date-picker
            class="my-date-picker"
            v-model="date"
            type="date"
            align="center"
            :clearable="false"
          >
          </el-date-picker>
        </li>
      </ul>
      <ul class="li-right">
        <li>
          <img class="logo" src="../assets/skin.png" alt="主题">
        </li>
        <li @click="addFavo()">
          <img class="logo" src="../assets/star.png" alt="收藏">
        </li>
        <li>
          中文|English
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'tab',
    data() {
      return {
        date: ''
      }
    },
    created() {
      this.getMonthOnCreated()
    },
    computed: {
      month() {
        return this.date.getMonth() + 1
      },
      day() {
        let tempDate = new Date(this.date)
        return tempDate.getDate()
      },
      week() {
        let dtStart = new Date('2019-2-25')
        let res = parseInt(this.date - dtStart) / (86400000 * 7)
        if (res > 0 && res < 21) {
          return parseInt(res)
        } else {
          alert('不对的周数')
          // this.date = new Date()
          return 0
        }
      }
    },
    methods: {
      toHome() {
        console.log('go')
        this.$router.push('/')
      },
      getMonthOnCreated() {
        // 不设置这个的话，会使时间莫名跳转
        if (!this.date) {
          this.date = new Date()
        }
      },
      backToToday() {
        this.date = new Date()
      },
      // TODO
      addFavo() {
        // eslint-disable-next-line
        let browser = browser||chrome
        browser.bookmarks.create({
          title: document.title,
          url: document.URL
        }).then(
          console.log('created')
        )
      }
    }
  }
</script>

<style scoped lang="stylus">
  .tab-wrapper
    width 100%
    height 3rem
    background-color rgb(90, 155, 213)
    display flex
    align-items center
    box-shadow 0rem 0.1rem 0.3rem rgba(121, 121, 121, 0.5)
    .tab-list
      width 100%
      display flex
      flex-direction row
      align-items center
      justify-content space-between
      color white
      .logo
        width 1rem
        height 1rem
      .li-left
        margin-left 2rem
        display flex
        flex-direction row
        .li-title
          font-weight 700
      .li-mid
        display flex
        flex-direction row
        position relative
        #position
          margin-left 0.5rem
          margin-right 2rem
        .li-date
          margin-right 0.5rem
        .li-week
          margin-right 0.5rem
        .my-date-picker
          position absolute
          top -0.5rem
          left 10rem
          opacity 0
          width 13%
      .li-right
        display flex
        flex-direction row
        margin-right 2rem
</style>
