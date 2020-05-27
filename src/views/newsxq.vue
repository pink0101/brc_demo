<template>
  <div class="container">
    <!-- 顶部返回 -->
    <div class="goBack" @click="$router.go(-1)">
      <img src="../assets/images/81587028561@2x.png" alt="">
      <div>详情</div>
    </div>
    <!-- 标题 -->
    <div class="news_title">祖国母亲70华诞，员工献唱表白圆满结束</div>
    <div class="news_sj">
      <div>咨询信息</div>
      <div>2020-12-23</div>
    </div>
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
  height:1.55rem; 
  font-size:0.59rem;
  font-family:Roboto;
  font-weight:400;
  line-height:0.75rem;
  color:rgba(24,24,24,1);
}
.news_sj{
  margin-top: .67rem;
  display: flex;
  align-items: flex-end;
  margin-left: .4rem;
  div:nth-child(1){
    display: flex;
    justify-content: center;
    align-items: center;
    width:1.87rem;
    height:0.69rem;
    background:rgba(211,41,26,1);
    font-size:0.37rem;
    font-family:Roboto;
    font-weight:400;
    line-height:0.51rem;
    color:rgba(255,255,255,1);
  }
  div:nth-child(2){
  margin-left: .24rem;
    font-size:0.37rem;
    font-family:Roboto;
    font-weight:400;
    line-height:0.51rem;
    color:rgba(173,171,171,1);
  }
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
</style>
