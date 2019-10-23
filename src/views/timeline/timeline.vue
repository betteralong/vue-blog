<template>
  <div class="pigeonhole-page">
    <div class="pigeonhole-content-wrap container">
      <div class="content-width">
        <el-timeline>
          <el-timeline-item v-for="(item, index) in timelineList" :key="index" :timestamp="getTime(item.create_time)" placement="top">
            <el-card>
              <div slot="header" class="clearfix">
                <span>{{item.title}}</span>
              </div>
              <div class="time-line-content">
                <img :src="item.image" />
                <p>{{item.content}}</p>
              </div>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      timelineList: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.$a.get('v1/timeline/').then(res => {
        this.timelineList = res
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
.pigeonhole-page{
  .pigeonhole-content-wrap{
    margin-top: 32px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 14px;
    padding: 20px 0px;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07) !important;
  }
  .content-width{
    width: 80%;
    margin: 0 auto;
  }
  .timeline-content-wrap{
    padding: 20px;
  }
  .time-line-content{
    display: flex;
    align-items: center;
    font-size: 16px;
    >img{
      width: 100px;
      height: 100px;
    }
    >p{
      padding-left: 20px;
    }
  }
  .timeline-content-bottom{
    padding: 10px;
    justify-content: space-between;
  }
}
</style>
