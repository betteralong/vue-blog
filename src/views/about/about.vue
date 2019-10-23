<template>
  <div class="about-page">
    <div class="about-content-wrap container">
      <el-row :gutter="30">
        <el-col :xs="24"  :sm="16">
          <div class="about-content">
            <el-divider content-position="left">关于我</el-divider>
            <div class="about-row">
              Hello, 我是阿隆，一个不知名的全干开发工程师
            </div>
            <div class="about-row">
              like：编程 爬山 游戏
            </div>
            <div class="about-row">
              个人毕业于某二本，2017年大学毕业，毕业后开始自学开发，从c/c++，到php,java，然后到现在的前端开发，学习和从事过多种技术栈开发，基本能够独立开发市面上常见的web网页以及app。<br/>
              独立开发过仿同花顺客户端和app 、桌面端压力测试工具、常见门户网站、cms、金融风控系统。  现阶段工作主要参与前端大屏开发， 实现数据的可视化。
            </div>
            <el-divider content-position="left">关于本站</el-divider>
              <div class="about-row">
                建立本站主要是记录个人的一些学习资料以，工作方面涉及商业部分所以作品展主要是一些是闲时的简单开发。
              </div>
              <div class="about-row">
                站名叫淡若清风，主要是备案时候需要起个名字，由于阿隆涉及名称，不能使用，所以随意起了这个名字，个人域名还是采用了最早想用的名字betteralong， 翻译是更好的阿隆，也译为陈果老师的《好的孤独》，希望未来的自己变得更好。
              </div>
              <div class="about-row">
                本站技术栈<br/>
                  前端&nbsp;&nbsp; vue + ElementUI + axios + mavonEditor<br/>
                  后端&nbsp;&nbsp; koa + lin-cms-koa + mysql
              </div>
          </div>
        </el-col>
        <el-col :xs="24"  :sm="8">
          <div class="about-right">
            <div class="cloud-wrap">
              <div class="cloud-1">
                <img src="@/assets/img/cloud_bg.jpg" />
              </div>
              <div class="cloud-2">
                <img src="@/assets/img/cloud.jpg" />
              </div>
              <div class="star">
                <img src="@/assets/img/star_1.png" />
                <img src="@/assets/img/star_2.png" />
              </div>
            </div>
            <div class="me-img-wrap">
              <img src="http://www.betteralong.top/static/avatar.png"/>
            </div>
            <div class="about-text-wrap">
              <div class="text-title">along</div>
              <div class="text-desc">a full stack developer</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.about-page{
  .about-content-wrap{
    margin-top: 1.2rem;
    background: rgba(255,255,255, 0.6);
    border-radius: 14px;
    padding: 20px 0px;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
    .about-content{
      margin: 0 20px;
    }
    .about-row{
      margin-bottom: 1.1rem;
      line-height: 1.6rem;
      font-size: 1.2rem;
      padding: 0.6rem 0.8rem;
      color: #666;
      &:hover{
        background: rgba(0, 0, 0, 0.1);
        border-radius: 4px;
      }
    }
    .about-right{
      position: relative;
      padding: 0 1.2rem 1.2rem;
      .cloud-wrap{
        position: relative;
        overflow: hidden;
        height: 200px;
      }
      .cloud-1, .cloud-2{
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 0;
      }
      .cloud-1 img{
        width: auto;
        height: 200%;
        animation: aboutbg-be-1 88s linear infinite;
      }
      .cloud-1 img{
        width: auto;
        height: 200%;
        animation: aboutbg-be-2 88s linear infinite;
      }
      .cloud-2{
        opacity: .66;
      }
      .star{
        position: absolute;
        top: 0.2rem;
        right: 0.4rem;
        animation: aboutbg-star 6s linear infinite;
        >img{
          position: absolute;
         top: 0.2rem;
          right: 0.4rem;
          width: 60px;
        }
      }
      .me-img-wrap{
        position: absolute;
        top: 200px;
        left: 50%;
        z-index: 10;
        transform: translate(-50%, -50%);
        img{
          width: 80px;
          border-radius: 50%;
          text-align: center;
          // border: 4px solid hsla(0,0%,100%,.5);
          transition: .3s;
          &:hover{
            transform: rotate(180deg);
          }
        }
      }
      .about-text-wrap{
        margin: 44px 0 20px 0;
        .text-title{
          font-size: 2rem;
          font-weight: 600;
          color: #666;
          text-align: center;
        }
        .text-desc{
          font-size: 1.2rem;
          line-height: 1.8rem;
          color: #666;
          text-align: center;
        }
      }
    }
  }
  .el-divider__text, .el-link{
    font-size: 1.2rem;
  }

  @-webkit-keyframes aboutbg-star{
    0%{opacity:1
    }
    25%{opacity:.5
    }
    50%{opacity:.8
    }
    75%{opacity:.2
    }
    to{opacity:1
    }
  }
  @keyframes aboutbg-star{
    0%{
      opacity:1
    }
    25%{
      opacity:.5
    }
    50%{
      opacity:.8
    }
    75%{
      opacity:.2
    }
    to{
      opacity:1
    }
  }
  @-webkit-keyframes aboutbg-be-1{
  0%{
    -webkit-transform:translateZ(0);transform:translateZ(0)
  }
  25%{
    -webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)
  }
  50%{
    -webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)
  }
  75%{
    -webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)
  }
  to{
    -webkit-transform:translateZ(0);transform:translateZ(0)
    }
  }
  @keyframes aboutbg-be-1{
    0%{
      -webkit-transform:translateZ(0);transform:translateZ(0)
    }
    25%{
      -webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)
    }
    50%{
      -webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)
    }
    75%{
      -webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)
    }
    to{
      -webkit-transform:translateZ(0);transform:translateZ(0)
    }
  }
  @-webkit-keyframes aboutbg-be-2{
    0%{
      -webkit-transform:translateZ(0);transform:translateZ(0)
    }
    25%{
      -webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)
    }
    50%{
      -webkit-transform:translate3d(-10%,0,0);transform:translate3d(-10%,0,0)
    }
    75%{
      -webkit-transform:translate3d(-10%,-50%,0);transform:translate3d(-10%,-50%,0)
    }
    to{
      -webkit-transform:translateZ(0);transform:translateZ(0)
    }
  }
    @keyframes aboutbg-be-2{
    0%{
      -webkit-transform:translateZ(0);transform:translateZ(0)
    }
    25%{
      -webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)
    }
    50%{
      -webkit-transform:translate3d(-10%,0,0);transform:translate3d(-10%,0,0)
    }
    75%{
      -webkit-transform:translate3d(-10%,-50%,0);transform:translate3d(-10%,-50%,0)
    }
    to{
      -webkit-transform:translateZ(0);transform:translateZ(0)
    }
  }
}
</style>
