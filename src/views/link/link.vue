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
      <!-- <el-row :gutter="30">
        <el-col :xs="24"  :sm="12" :lg="8">
          <div class="link-item">
            <div class="link-item-inner">
              <div class="link-content">
                <img src="@/assets/img/avart.png" />
                <div class="content-wrap">
                  <h1 class="link-name">1号选手</h1>
                  <p class="link-text">我不是大佬，只是在追寻大佬的脚步</p>
                </div>
              </div>
            </div>
            <a class="link-btn" href="http://wwww.baidu.com">前往参观</a>
          </div>
        </el-col>
        <el-col :xs="24"  :sm="12" :lg="8">
          <div class="link-item" style="background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
            <div class="link-item-inner">
              <div class="link-content">
                <img src="@/assets/img/avart.png" />
                <div class="content-wrap">
                  <h1 class="link-name">2号选手</h1>
                  <p class="link-text">我不是大佬，只是在追寻大佬的脚步</p>
                </div>
              </div>
            </div>
            <a class="link-btn" href="http://wwww.baidu.com">前往参观</a>
          </div>
        </el-col>
        <el-col :xs="24"  :sm="12" :lg="8">
          <div class="link-item" style="background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);">
            <div class="link-item-inner">
              <div class="link-content">
                <img src="@/assets/img/avart.png" />
                <div class="content-wrap">
                  <h1 class="link-name">3号选手</h1>
                  <p class="link-text">我不是大佬，只是在追寻大佬的脚步</p>
                </div>
              </div>
            </div>
            <a class="link-btn" href="http://wwww.baidu.com">前往参观</a>
          </div>
        </el-col>
        <el-col :xs="24"  :sm="12" :lg="8">
          <div class="link-item" style="background-image: linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)">
            <div class="link-item-inner">
              <div class="link-content">
                <img src="@/assets/img/avart.png" />
                <div class="content-wrap">
                  <h1 class="link-name">4号选手</h1>
                  <p class="link-text">我不是大佬，只是在追寻大佬的脚步</p>
                </div>
              </div>
            </div>
            <a class="link-btn" href="http://wwww.baidu.com">前往参观</a>
          </div>
        </el-col>
      </el-row> -->
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
