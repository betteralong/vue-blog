<template>
  <div class="link-page">
    <div class="link-banner-wrap">
      <div class="link-banner"></div>
    </div>
    <div class="link-content-wrap container">
      <el-row :gutter="30">
        <el-col :xs="24"  :sm="12" :lg="8" v-for="(item, index) in friendList" :key="index">
          <friend-item :friendData="item"></friend-item>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import friendItem from './friendItem'
export default {
  name: 'linkpage',
  data () {
    return {
      friendList: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.$a.get('v1/friend/').then(res => {
        this.friendList = res
      }).catch(err => {
        console.log(err)
      })
    }
  },
  components: {
    friendItem
  }
}
</script>

<style lang="scss">
.link-page{
  .link-banner-wrap{
    width: 100%;
    height: 383px;
    background: rgb(142, 216, 250);
  }
  .link-banner{
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center top;
    // background-position: center top;
    background-image: url(~@/assets/img/link.png);
  }
  .link-content-wrap{
    margin-top: -12px;
  }
}

@media only screen and (max-width: 960px) {
  .link-banner-wrap{
    height: 240px !important;
  }
  .link-banner{
    background-position: center center !important;
    background-size: 100% 100%;
  }
}
</style>
