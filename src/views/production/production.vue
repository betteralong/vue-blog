<template>
  <div class="production-page">
    <div class="article-content-wrap container">
      <div class="content-width">
        <div class="production-list-wrap">
          <el-row :gutter="30">
            <el-col :xs="24"  :sm="12" :lg="8" v-for="(item, index) in productionList" :key="index">
              <production-item :production="item"></production-item>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productionItem from './productionItem'
export default {
  name: 'production',
  data () {
    return {
      productionList: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.$a.get('v1/production/').then(res => {
        this.productionList = res
      }).catch(err => {
        console.log(err)
      })
    }
  },
  components: {
    productionItem
  }
}
</script>

<style lang="scss">
.production-page{
  .article-content-wrap{
    margin-top: 32px;
    // background: #fff;
    border-radius: 14px;
    padding: 20px 0px;
    .content-width{
      width: 80%;
      margin: 0 auto;
    }
  }
}
</style>
