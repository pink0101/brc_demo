<template>
  <div class="container">
    <!-- 顶部返回 -->
    <div class="goBack" @click="$router.go(-1)">
      <img src="../assets/images/81587028561@2x.png" alt="">
      <div>详情</div>
    </div>
    <!-- 标题 -->
    <div class="news_title">合作业务的名称</div>
    <!-- banner -->
    <img class="newsxq_banner" src="../assets/images/newsxq_banner@2x.png" />
    <!-- contnet -->
    <div class="newsxq_content">
      <div>
        祖国首先是国家，其次自己对这个国家有归
属感。这归属感，来自于民族文化的认同，家族
祖先的传承，生存生活的祖国既是一个地理概念，
也是一个文化概念更是一个法理概念。</div>
      <div>
        祖国是指世代居住、并对所在国文化有着高
度文化认同感的并且自己和祖先国籍共同所在的
国家。证。没有国家支撑的祖国，是精神上的祖
国，不是现实中的祖国。所以现实中的人们爱祖
国一般也爱国家。
      </div>
      <div>
爱国主义的对象是“国”，国的含义有两种：
一是祖国，二是国家。祖国和国家既有区别，又
有联系。那么，爱国究竟是爱祖国，还是爱国家
      </div>
    </div>
    <!-- 联系方式 -->
    <div class="ywhz_lx">
      <div><img src="../assets/images/iphone@2x.png" alt=""> 8293848372</div>
      <div><img src="../assets/images/adress@2x.png" alt=""> 北京市某某地方</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
    // newsxq(){
    //   this.$router.push({
    //       path: `/ywhz_xq`,
    //   })
    // }
  }
}
</script>

<style lang="less" scoped>
.goBack{
  margin-top: 0.27rem;
  display: flex;
  align-items: center;
  img{
    width: 2.01rem;
    height: 1.08rem;
  }
  div{
    margin-left: -0.8rem;
    font-size:0.48rem;
    font-family:PingFang SC;
    font-weight:400;
    line-height:1.33rem;
    color:rgba(65,65,65,1);
  }
}
.news_title{
  margin-left: .4rem;
  margin-top: .45rem;
  width:8.85rem;
  font-size:0.59rem;
  font-family:Roboto;
  font-weight:400;
  line-height:0.75rem;
  color:rgba(24,24,24,1);
}
.newsxq_banner{
  margin-left: .4rem;
  margin-top: .45rem;
  width: 9.17rem;
  height: 5.39rem;
}
.newsxq_content{
  margin-left: 0.4rem;
  margin-top: 0.43rem;
  width:9.39rem;
  height:7.28rem;
  font-size:0.43rem;
  font-family:Roboto;
  font-weight:400;
  line-height:0.56rem;
  color:rgba(72,72,72,1);
  div{
    text-indent:1rem;
  }
}
.ywhz_lx{
  width:9.31rem;
  height:2.45rem;
  background:rgba(245,245,245,1);
  opacity:1;
  border-radius:0.11rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0.59rem;
  margin: 1rem auto;
  div:nth-child(1){
        img{
          width: 0.43rem;
          height: 0.43rem;
          margin-right: 0.2rem
        }
        margin-top: .21rem;
        display: flex;
        align-items: center;
        font-size:0.43rem;
        font-family:Roboto;
        font-weight:400;
        line-height:0.56rem;
        color:rgba(24,24,24,1);
        opacity:0.71;
  }
  div:nth-child(2){
      img{
        width: 0.43rem;
        height: 0.43rem;
        margin-right: 0.2rem
      }
      margin-top: .21rem;
      display: flex;
      align-items: center;
      font-size:0.43rem;
      font-family:Roboto;
      font-weight:400;
      line-height:0.56rem;
      color:rgba(24,24,24,1);
      opacity:0.71;
  }
} 
</style>
