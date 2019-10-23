<template>
  <div class="article-page">
    <div class="article-wrap">
      <div class="article-banner"></div>
    </div>
    <div class="article-content-wrap container">
      <div class="content-width">
        <div class="label-wrap">
          <div class="label-title">文章标签</div>
          <div class="label-container">
            <div class="label-item" v-for="(item, index) in labelList" :key="index" :style="{'background-color': item.color}">{{item.name}} {{item.count}}</div>
          </div>
        </div>
        <div class="article-list-wrap">
          <el-row :gutter="30">
            <el-col :xs="24"  :sm="12" :lg="8" v-for="(item, index) in articleList" :key="index">
              <div class="article-list-item" @click="handleDetail(item)">
                <div class="art-img">
                  <img :src="item.cover"/>
                  <div class="article-title">{{item.title || ''}}</div>
                </div>
                <div class="article-desc">
                  <div class="article-time">{{getTime(item.create_time)}}</div>
                  <div class="article-classfy">{{item.classfyName}}</div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'artcle',
  data () {
    return {
      labelList: [],
      articleList: []
    }
  },
  created () {
    this.getArticleLabel()
    this.getList()
  },
  methods: {
    handleDetail (item) {
      this.$router.push(`/articledetail?id=${item.id}`)
    },
    getArticleLabel () {
      this.$a.get('v1/article/group/one').then(res => {
        this.labelList = res
      }).catch(err => {
        console.log(err)
      })
    },
    getList () {
      this.$a.get('v1/article/').then(res => {
        this.articleList = res
      }).catch(err => {
        console.log(err)
      })
    },
    getTime (time) {
      return new Date(time).format('yyyy-MM-dd')
    }
  }
}
</script>

<style lang="scss">
.article-page{
  .article-wrap{
    width: 100%;
    height: 340px;
    background: rgb(225, 214, 184);
  }
  .article-banner{
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: 55% top;
    // background-position: center top;
    background-image: url(~@/assets/img/banner.jpg) !important;
  }
  .article-content-wrap{
    margin-top: -32px;
    background: #fff;
    border-radius: 14px;
    padding: 20px 0px;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07) !important;
  }
  .content-width{
    width: 80%;
    margin: 0 auto;
    .label-title{
      font-weight: 700;
      text-align: center;
      color: rgb(52, 73, 94);
      font-size: 1.4rem;
      margin: 0.8rem 0;
    }
    .label-container{
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      .label-item{
        text-align: center;
        margin: 10px 0.4rem;
        font-size: 1.2rem;
        padding: 0.6rem 1.6rem;
        color: #34495e;
        box-shadow: 0 3px 5px rgba(0, 0, 0, .12);
        border-radius: 5px;
        cursor: pointer;
        &:hover{
          color: #fff;
          background: linear-gradient(to right, #4cbf30 0%, #0f9d58 100%);
        }
      }
      &:after {
        content: "";
        flex: auto;
      }
    }
  }
  .article-list-wrap{
    padding: 0.4rem 0.6rem;
    .article-list-item{
      margin-bottom: 1.2rem;
      cursor: pointer;
      .art-img{
        position: relative;
        height: 220px;
        img{
          border-radius: 20px;
          display: block;
          height: 100%;
          width: 100%;
          opacity: 0.9;
        }
        .article-title{
          position: absolute;
          font-size: 1.2rem;
          font-weight: 600;
          color: #fff;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .article-desc{
        display: flex;
        justify-content: space-between;
        padding: 0.4rem 0.6rem;
        font-size: 1rem;
        color: #34495e;
      }
    }
  }
}
</style>
