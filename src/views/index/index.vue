<template>
  <div class="index-page">
    <div class="banner-wrap">
      <div class="index-banner"></div>
    </div>
    <div class="index-content-wrap container">
      <div class="content-width">
      <div class="dream-wrap">
        <div class="dream-title">我的梦想</div>
        <div class="dream-content">
          不是每个人都应该像我这样去建造一座水晶大教堂，但是每个人都应该拥有自己的梦想，设计自己的梦想，追求自己的梦想，实现自己的梦想。梦想是生命的灵魂，是心灵的灯塔，是引导人走向成功的信仰。有了崇高的梦想，只要矢志不渝地追求，梦想就会成为现实，奋斗就会变成壮举，生命就会创造奇迹。——罗伯·舒乐
        </div>
      </div>
      <div class="recommend-wrap">
        <div class="recommend-title">推荐文章</div>
        <div class="recommend-list">
          <el-row :gutter="30">
           <el-col :xs="24"  :sm="12" v-for="(item, index) in recommendList" :key="index">
             <div class="recommend-bg" :style='{backgroundImage: "url("+ item.cover + ")"}' @click="handleDetail(item)">
               <div class="recommend-body">
                 <div class="recommend-classify">{{item.typeName || ''}}</div>
                 <div class="recommend-body-title">{{item.title || ''}}</div>
                 <div class="recommend-body-brief">{{item.brief || ''}}</div>
               </div>
             </div>
           </el-col>
          </el-row>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      recommendList: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    handleDetail (item) {
      this.$router.push(`/articledetail?id=${item.id}`)
    },
    getList () {
      this.$a.get('v1/article/recommend/list').then(res => {
        this.recommendList = res
      }).catch(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss">
.index-page{
  .banner-wrap{
    width: 100%;
    height: 340px;
    background: rgb(225, 214, 184);
  }
  .index-banner{
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: 55% top;
    // background-position: center top;
    background-image: url(~@/assets/img/banner.jpg) !important;
  }
  .index-content-wrap{
    margin-top: -32px;
    background: #fff;
    border-radius: 14px;
    padding: 20px 0px;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07) !important;
  }
  .content-width{
    width: 80%;
    margin: 0 auto;
  }
  .dream-wrap{
    .dream-title{
      font-weight: 700;
      text-align: center;
      // color: rgb(52, 73, 94);
      // color: rgba(139,0,139, 0.4);
      // text-shadow: 0 0 0.1em, 0 0 0.1em;
      color:transparent;
      background: linear-gradient(0, rgba(100,149,237,0.6) 0%, rgba(0,0,0,0.6)  100%);
      background-clip: text;
      font-size: 2rem;
      margin: 0.8rem 0;
    }
    .dream-content{
      padding: 12px 0;
      opacity: 0.6;
      color: rgb(52, 73, 94);
      font-size: 1.2rem;
      line-height: 1.6rem;
    }
  }
  .recommend-wrap{
    .recommend-title{
      font-weight: 700;
      text-align: center;
      // color: rgb(52, 73, 94);
      color:transparent;
      background: linear-gradient(0, rgba(100,149,237,0.6) 0%, rgba(0,0,0,0.6)  100%);
      background-clip: text;
      font-size: 2rem;
      margin: 1.2rem 0;
    }
    .recommend-bg{
      position: relative;
      width: 100%;
      height: 300px;
      max-height: 300px;
      margin-bottom: 15px;
      margin-top: 15px;
      text-align: center;
      border: 0;
      border-radius: 10px;
      color: rgba(0, 0, 0, .87);
      background: #fff 50%;
      background-size: cover;
      cursor: pointer;
      box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
        &::before{
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          display: block;
          left: 0;
          top: 0;
          content: "";
          background-color: rgba(0, 0, 0, .25);
          border-radius: 10px;
        }
      .recommend-body{
        padding: 1.8rem 1.25rem;
        position: relative;
        z-index: 2;
        .recommend-classify{
          font-size: 0.75rem;
          color: hsla(0, 0%, 100%, .7);
          margin: 10px 0;
        }
        .recommend-body-title{
          font-size: 1.6rem;
          font-weight: bold;
          line-height: 1.7rem;
          color: #fff;
        }
        .recommend-body-brief{
          margin: 20px auto;
          max-width: 500px;
          height: 65px;
          max-height: 65px;
          font-size: 0.96rem;
          line-height: 1.5rem;
          color: rgba(255, 255, 255, 0.88);
        }
      }
    }
  }
}
</style>
