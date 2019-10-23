<template>
   <div class="article-page">
    <div class="article-wrap">
      <div class="article-banner"></div>
    </div>
    <div class="article-content-wrap container">
      <div class="content-width">
        <!-- <div v-html="code">
        </div> -->
        <div class="mavon-wrap">
          <mavon-editor
            class="md"
            :value="code"
            :boxShadow="prop.boxShadow"
            :boxShadowStyle="prop.boxShadowStyle"
            :previewBackground="prop.previewBackground"
            :subfield="prop.subfield"
            :defaultOpen="prop.defaultOpen"
            :toolbarsFlag="prop.toolbarsFlag"
            :editable="prop.editable"
            :scrollStyle="prop.scrollStyle"
          ></mavon-editor>
        </div>
      </div>
    </div>
   </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
export default {
  name: 'detail',
  data () {
    return {
      articleData: {},
      code: ''
    }
  },
  computed: {
    prop () {
      let data = {
        subfield: false,
        defaultOpen: 'preview',
        boxShadow: false,
        boxShadowStyle: 'none',
        previewBackground: 'none',
        editable: false,
        toolbarsFlag: false,
        scrollStyle: true
      }
      return data
    }
  },
  mounted () {
    this.getDetail()
  },
  // computed: {
  //   compiledMarkdown () {
  //     return marked(this.articleData.content || '')
  //   }
  // },
  methods: {
    getDetail () {
      const id = this.$route.query.id
      this.$a.get(`v1/article/${id}`).then(res => {
        this.articleData = res
        this.code = this.articleData.content || ''
        // this.markdown()
      }).catch(err => {
        console.log(err)
      })
    }
    // markdown () {
    //   marked.setOptions({
    //     renderer: new marked.Renderer(),
    //     highlight: (code) => {
    //       console.log('code', code)
    //       return hljs.highlightAuto(code).value
    //     },
    //     pedantic: false,
    //     gfm: true,
    //     breaks: false,
    //     sanitize: false,
    //     smartLists: true,
    //     smartypants: false,
    //     xhtml: false
    //   })
    //   this.code = marked(this.articleData.content, {
    //     sanitize: true
    //   })
    // }
  },
  components: {
    mavonEditor
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
  }
}

.v-note-wrapper{
  border: none !important;
}
</style>
