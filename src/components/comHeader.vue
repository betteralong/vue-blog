<template>
  <header class="my-header-com" ref="myheader">
    <div class="mobile-menu el-icon-s-fold" @click="handleClick"></div>
    <div class="container clearfix">
      <div class="header-title">
        <img src="@/assets/img/logo.png" />
        <span class="title-text">淡若清风</span>
      </div>
      <ul class="menu-wrap">
        <router-link class="menu-item"   v-for="(item, index) in menu" :key="index" :to="{path: item.link}">{{item.name}}</router-link>
      </ul>
    </div>
    <a class="git-icon" href="https://github.com/betteralong/vue-blog" target="_blank">
      <svg viewBox="0 0 250 250" aria-hidden="true">
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
        <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
          <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
      </svg>
    </a>
    <el-drawer
      :size="size"
      :visible.sync="drawer"
      direction="ltr">
      <div class="drawer-container">
        <div class="drawer-top">
          <img src="http://www.betteralong.top/static/avatar.png">
          <h1 class="drawer-title">淡若清风</h1>
          <h3 class="drawer-desc">心素如简，淡若清风</h3>
        </div>
        <div class="drawer-menu">
          <router-link class="drawer-menu-item"
           v-for="(item, index) in menu" :key="index"
          :to="{path: item.link}"
          @click.native="changeMenu"
          >{{item.name}}</router-link>
        </div>
      </div>
    </el-drawer>
  </header>
</template>

<script>
export default {
  name: 'myheader',
  data () {
    return {
      size: '240px',
      menu: [{
        name: '首页',
        link: '/'
      }, {
        name: '文章',
        link: '/article'
      }, {
        name: '作品展',
        link: '/production'
      }, {
        name: '时光轴',
        link: '/timeline'
      }, {
        name: '关于',
        link: '/about'
      }, {
        name: '友情链接',
        link: '/link'
      }],
      drawer: false
    }
  },
  methods: {
    handleClick () {
      this.drawer = true
    },
    changeMenu () {
      this.drawer = false
    }
  }
}
</script>

<style lang="scss">
.my-header-com{
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  right: 0;
  color: #000;
  height: 64px;
  line-height: 64px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 7px 10px 0 rgba(0, 0, 0, 0.12);
  // background: inherit;
  // background-image: linear-gradient(to right, #4cbf30 0%, #0f9d58 100%);
  background-image: linear-gradient(to right, rgba(64,224,208,0.7) 0%, #EEE8AA 100%);
  .mobile-menu{
    display: none;
    position: absolute;
    top: 0;
    left: 1rem;
    width: 64px;
    height: 64px;
    z-index: 10;
    font-size: 40px;
    line-height: 64px;
    color: #fff;
    cursor: pointer;
  }
  .header-title{
    float: left;
    font-size: 24px;
    img{
      height: 45px;
      vertical-align: middle;
      padding-bottom: 6px;
    }
    .title-text{
      color: #666;
      padding-left: 12px;
    }
  }
  .menu-wrap{
    float: right;
    height: 100%;
    display: flex;
    align-items: center;
    .menu-item{
      font-size: 14px;
      padding: 0 20px;
      cursor: pointer;
      &:hover{
        background-color: rgba(0,0,0,0.1);
      }
    }
  }
  .git-icon{
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;
    border: 0;
    transform: scale(1.1);
    svg{
      color: #EEE8AA;
      fill: #fff;
      height: 64px;
      width: 64px;
    }
  }
}

.el-drawer__header{
  display: none !important;
}
.drawer-container{
  width: 100%;
  margin: 0;
  .drawer-top{
    background-image: linear-gradient(to bottom, rgba(64,224,208,0.7) 0%, #EEE8AA 100%);
    padding: 2rem 0 1rem 0;
    img{
      display: block;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin: 0 auto;
    }
    text-align: center;
    .drawer-title{
      font-size: 1.4rem;
      padding: 0.6rem;
      color: #fff;
    }
    .drawer-desc{
      font-size: 1rem;
      padding: 0.6rem;
      color:#666;
    }
  }
  .drawer-menu{
    .drawer-menu-item{
      display: block;
      font-size: 1.1rem;
      height: 2.4rem;
      line-height: 2.4rem;
      text-align: center;
    }
  }
}
@media only screen and (max-width: 960px) {
  .menu-wrap{
    display: none !important;
  }
  .git-icon{
     display: none !important;
  }
  .mobile-menu{
    display: block !important;
  }
  .header-title{
    float:none !important;
    text-align: center !important;
  }
}
</style>
