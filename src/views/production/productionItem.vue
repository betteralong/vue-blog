<template>
  <div class="production-list-item">
    <div class="production-content">
      <div class="production-img">
        <img :src="production.image"/>
      </div>
      <div class="production-title">{{production.name}}</div>
      <div class="production-desc">{{production.summary}}</div>
    </div>
    <div class="production-btn-group">
      <div @click="handleGit">github</div>
      <div @click="handleView">view</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'production-item',
  props: {
    production: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    handleGit () {
      if (this.production.github && this.production.github.length) {
        if (this.production.github.indexOf('http://') === -1) {
          window.open(`http://${this.production.github}`)
        } else {
          window.open(this.production.github)
        }
      } else {
        this.$message.warning('资料还在整理中，请耐心等待作品上传')
      }
    },
    handleView () {
      if (this.production.link && this.production.link.length) {
        if (this.production.link.indexOf('http://') === -1) {
          window.open(`http://${this.production.link}`)
        } else {
          window.open(this.production.link)
        }
      } else {
        this.$message.warning('资料还在整理中，请耐心等待作品上传')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.production-list-item{
  height: 250px;
  padding: 10px 12px 0;
  color: #555;
  background: rgba(0, 0, 0, 0.02);
  border: 1px solid #f1f1f1;
  transition: background .3s;
  margin-bottom: 1.3rem;
  &:hover{
    background: #fff;
  }
  .production-content{
    height: 200px;;
    border-bottom: 2px solid#eee;
    .production-img{
      display: flex;
      align-items: center;
      justify-content: center;
      transition: .3s;
      img{
        width: 120px;
        height: 120px;
      }
      &:hover{
        transform: rotate(180deg);
      }
    }
    .production-title{
      font-size: 1.2rem;
      padding: 0.2rem;
      text-align: center;
    }
    .production-desc{
      font-size: 1rem;
      line-height: 1.4rem;
    }
  }
  .production-btn-group{
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
    >div{
      padding: 0 0.4rem;
      cursor: pointer;
      &:hover{
        color: rgb(236,232,171);
      }
    }
  }
}
</style>
