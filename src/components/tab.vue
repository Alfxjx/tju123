<template>
  <div class="tab-wrapper" :style="{backgroundColor:base}">
    <div class="tab-list">
      <ul class="li-left" @click="toHome()">
        <li>
          <img class="logo" src="" alt="">
        </li>
        <li class="li-title">{{$t('tab.title')}}</li>
      </ul>
      <ul class="li-mid">
        <li>
          <img class="logo" src="../assets/sun.png" alt="天气">
        </li>
        <li id="position">{{$t('tab.position')}}</li>
        <li class="li-date" @click="backToToday()">{{month}}{{day}}</li>
        <li class="li-week">{{week}}</li>
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
          <img class="logo skin" src="../assets/skin.png" alt="主题">
          <el-color-picker
            class="my-color-picker"
            v-model="$store.state.baseColor"
            size="mini"
          ></el-color-picker>
        </li>
        <li @click="addFavo()">
          <img class="logo star" src="../assets/star.png" alt="收藏">
        </li>
        <li @click="changeLocale">
          中文|English
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Notification} from 'element-ui'
  import LangStorage from '../common/lang/lang'

  export default {
    name: 'tab',
    data() {
      return {
        date: ''
      }
    },
    created() {
      this.getMonthOnCreated()
      Notification.closeAll()
    },
    computed: {
      base() {
        return this.$store.state.baseColor ? this.$store.state.baseColor : '#1DC3F5'
      },
      month() {
        return `${this.date.getMonth() + 1}月`
      },
      day() {
        let tempDate = new Date(this.date)
        return `${tempDate.getDate()}日`
      },
      week() {
        let dtStart = new Date('2019-2-25')
        let res = parseInt(this.date - dtStart) / (86400000 * 7)
        if (res > 0 && res < 21) {
          return `第${parseInt(res)}周`
        } else {
          alert('不对的周数')
          // this.date = new Date()
          return `第0周`
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
      addFavo() {
        Notification({
          title: '收藏本站的方法',
          message: '按Ctrl+D收藏',
          position: 'top-right',
          offset: 60
        })
      },
      changeLocale() {
        let locale = this.$i18n.locale
        locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
        LangStorage.setLang(this.$i18n.locale) // 后面会用做切换和将用户习惯存储到本地浏览器
      }
    }
  }
</script>

<style scoped lang="stylus">
  .tab-wrapper
    width 100%
    height 3rem
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
          left 12rem
          opacity 0
          width 3rem
      .li-right
        display flex
        flex-direction row
        margin-right 2rem
        position relative
        .skin
          margin-right 1rem
        .my-color-picker
          position absolute
          top -0.2rem
          left -0.4rem
          opacity 0
          width 13%
        .star
          margin-right 1rem
</style>
