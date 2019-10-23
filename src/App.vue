<template>
  <div class="app">
    <canvas id="bgcanvas" width="100%" height="100%"></canvas>
    <div class="app-body">
      <com-header></com-header>
      <div class="body-wrap">
        <router-view />
        <el-backtop target=".container"></el-backtop>
      </div>
      <com-footer></com-footer>
    </div>
  </div>
</template>
<script>
import comHeader from '@/components/comHeader.vue'
import comFooter from '@/components/comFooter.vue'
export default {
  data () {
    return {
      canvasDom: null
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initBgCanvas()
    })
  },
  methods: {
    initBgCanvas () {
      let canvas = null
      if (!this.canvasDom) {
        this.canvasDom = document.querySelector('#bgcanvas')
        canvas = this.canvasDom
      } else {
        canvas = this.canvasDom
      }
      let ctx = canvas.getContext('2d')
      let cw = (canvas.width = window.innerWidth)
      // let cx = cw / 2
      let ch = (canvas.height = window.innerHeight)
      // let cy = ch / 2

      ctx.fillStyle = '#ccc'
      const linesNum = 16
      let linesRy = []
      let requestId = null

      function Line (flag) {
        this.flag = flag
        this.a = {}
        this.b = {}
        if (flag === 'v') {
          this.a.y = 0
          this.b.y = ch
          this.a.x = randomIntFromInterval(0, ch)
          this.b.x = randomIntFromInterval(0, ch)
        } else if (flag === 'h') {
          this.a.x = 0
          this.b.x = cw
          this.a.y = randomIntFromInterval(0, cw)
          this.b.y = randomIntFromInterval(0, cw)
        }
        this.va = randomIntFromInterval(25, 100) / 100
        this.vb = randomIntFromInterval(25, 100) / 100

        this.draw = function () {
          ctx.strokeStyle = '#e1e1e1'
          ctx.beginPath()
          ctx.moveTo(this.a.x, this.a.y)
          ctx.lineTo(this.b.x, this.b.y)
          ctx.stroke()
        }

        this.update = function () {
          if (this.flag === 'v') {
            this.a.x += this.va
            this.b.x += this.vb
          } else if (flag === 'h') {
            this.a.y += this.va
            this.b.y += this.vb
          }

          this.edges()
        }

        this.edges = function () {
          if (this.flag === 'v') {
            if (this.a.x < 0 || this.a.x > cw) {
              this.va *= -1
            }
            if (this.b.x < 0 || this.b.x > cw) {
              this.vb *= -1
            }
          } else if (flag === 'h') {
            if (this.a.y < 0 || this.a.y > ch) {
              this.va *= -1
            }
            if (this.b.y < 0 || this.b.y > ch) {
              this.vb *= -1
            }
          }
        }
      }

      for (let i = 0; i < linesNum; i++) {
        var flag = i % 2 === 0 ? 'h' : 'v'
        var l = new Line(flag)
        linesRy.push(l)
      }

      function Draw () {
        requestId = window.requestAnimationFrame(Draw)
        ctx.clearRect(0, 0, cw, ch)

        for (let i = 0; i < linesRy.length; i++) {
          let l = linesRy[i]
          l.draw()
          l.update()
        }
        for (let i = 0; i < linesRy.length; i++) {
          let l = linesRy[i]
          for (let j = i + 1; j < linesRy.length; j++) {
            var l1 = linesRy[j]
            Intersect2lines(l, l1)
          }
        }
      }

      function Init () {
        linesRy.length = 0
        for (var i = 0; i < linesNum; i++) {
          var flag = i % 2 === 0 ? 'h' : 'v'
          var l = new Line(flag)
          linesRy.push(l)
        }
        if (requestId) {
          window.cancelAnimationFrame(requestId)
          requestId = null
        }
        cw = canvas.width = window.innerWidth
        // cx = cw / 2
        ch = canvas.height = window.innerHeight
        // cy = ch / 2
        Draw()
      }

      setTimeout(function () {
        Init()
        addEventListener('resize', Init, false)
      }, 15)

      function Intersect2lines (l1, l2) {
        let p1 = l1.a
        let p2 = l1.b
        let p3 = l2.a
        let p4 = l2.b
        const denominator =
          (p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y)
        const ua =
          ((p4.x - p3.x) * (p1.y - p3.y) - (p4.y - p3.y) * (p1.x - p3.x)) /
          denominator
        const ub =
          ((p2.x - p1.x) * (p1.y - p3.y) - (p2.y - p1.y) * (p1.x - p3.x)) /
          denominator
        const x = p1.x + ua * (p2.x - p1.x)
        const y = p1.y + ua * (p2.y - p1.y)
        if (ua > 0 && ub > 0) {
          markPoint({
            x: x,
            y: y
          })
        }
      }

      function markPoint (p) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, 2, 0, 2 * Math.PI)
        ctx.fillStyle = '#c1c1c1'
        ctx.fill()
      }

      function randomIntFromInterval (mn, mx) {
        return ~~(Math.random() * (mx - mn + 1) + mn)
      }
    }
  },
  components: {
    comHeader,
    comFooter
  }
}
</script>

<style lang="scss">
#bgcanvas {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
}
.body-wrap {
  padding-top: 64px;
}
</style>
