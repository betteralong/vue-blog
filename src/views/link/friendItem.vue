<template>
  <div class="link-item" :style="{'background': friendData.bgColor || defaultColor}">
    <div class="link-item-inner">
      <div class="link-content">
        <img :src="friendData.image" alt="头像" />
        <div class="content-wrap">
          <h1 class="link-name">{{friendData.name || ''}}</h1>
          <p class="link-text">{{friendData.summary || ''}}</p>
        </div>
      </div>
    </div>
    <a class="link-btn" :href="friendData.link" target="_blank">前往参观</a>
  </div>
</template>

<script>
export default {
  name: 'friend-item',
  props: {
    friendData: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      defaultColor: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)'
    }
  }
}
</script>

<style lang="scss">
.link-item{
  position: relative;
  border-radius: 10px;
  margin-bottom: 1.8rem;
  box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
  .link-item-inner{
    padding: 10px 20px;
    .link-content{
      display: flex;
      align-items: center;
      img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
      .content-wrap{
        padding-left: 10px;
        padding-bottom: 1.2rem;
        color: #fff;
        .link-name{
          font-size: 2.0rem;
          margin: 1.8rem 0 0.6rem 0px;
          border-bottom: 2px solid #fff;
        }
        .link-text{
          padding: 0.3rem 0;
          font-size: 1.1rem;
          line-height: 1.5rem;
        }
      }
    }
  }
  .link-btn{
    background-color: #ff7680;
    border-color: #ff7680;
    color: #FFF;
    text-decoration: none;
    text-align: center;
    font-size: 1.2rem;
    padding: 0.6rem 1.4rem;
    position: absolute;
    bottom: -1rem;
    left: 50%;
    border-radius: 2.3rem;
    transform: translateX(-50%);
  }
}
</style>
