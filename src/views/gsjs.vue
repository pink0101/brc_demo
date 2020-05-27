<template>
  <div class="container">
    <!-- 顶部返回 -->
    <div class="goBack" @click="$router.go(-1)">
      <img src="../assets/images/goback@2x.png" alt="">
    </div>
    <!-- banner -->
    <img class="gsjs_banner" src="../assets/images/gsjs_banner2x.png" alt="">
    <!-- 详细信息 -->
    <div class="gsjs_xx">
      <div class="gsjs_content">
        <div class="gs_logo">
          <img src="../assets/images/gs_logo@2x.png" alt="">
        </div>
        <div class="gs_js">企业介绍</div>
        <div class="gs_js_content">
          <div>祖国首先是国家，其次自己对这个国家有
归属感。这归属感，来自于民族文化的认同，
家族祖先的传承，生存生活的祖国既是一个地
理概念，也是一个文化概念更是一个法理概念。</div>
          <div>祖国是指世代居住、并对所在国文化有着
高度文化认同感的并且自己和祖先国籍共同所
在的国家。证。没有国家支撑的祖国，是精神
上的祖国，不是现实中的祖国。所以现实中的
人们爱祖国一般也爱国家。</div>
          
          <div>爱国主义的对象是“国”，国的含义有两种：
一是祖国，二是国家。祖国和国家既有区别，
又有联系。那么，爱国究竟是爱祖国，还是爱
国家</div>
          <br>
          <br>
          <div>      祖国首先是国家，其次自己对这个国家有
归属感。这归属感，来自于民族文化的认同，
家族祖先的传承，生存生活的祖国既是一个地
理概念，也是一个文化概念更是一个法理概念。</div>
          <div>祖国是指世代居住、并对所在国文化有着
高度文化认同感的并且自己和祖先国籍共同所
在的国家。证。没有国家支撑的祖国，是精神
上的祖国，不是现实中的祖国。所以现实中的
人们爱祖国一般也爱国家。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      la:'12'
    }
  },
  created() {
  },
  methods: {
    newsxq(){
      this.$router.push({
          path: `/newsxq`,
      })
    }
  }
}
</script>

<style lang="less" scoped>
.goBack{
  position: absolute;
  margin-top: 0.35rem;
  margin-left: 0.4rem;
  display: flex;
  align-items: center;
  img{
    width: .67rem;
    height: .67rem;
  }
}
.gsjs_banner{
  height: 6.67rem;
}
.gsjs_xx{
  height:15.47rem;
  background:rgba(249,249,249,1);
  display: flex;
  justify-content: center;
  .gsjs_content{
    margin-top: -4rem;
    width:8.51rem;
    height:17.76rem;
    background:rgba(255,255,255,1);
    box-shadow:0rem .08rem .16rem rgba(0,0,0,0.16);
    opacity:1;
    border-radius:0.1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .gs_logo{
      margin-top: -1.175rem;
      width:2.35rem;
      height:2.35rem;
      background:rgba(255,255,255,1);
      border:0px solid rgba(201,233,255,1);
      box-shadow:0rem 0.08rem 0.16rem rgba(0,0,0,0.16);
      border-radius:50%;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 1.63rem;
        height: 1.49rem;
      }
    }
    .gs_js{
      margin-top: 0.61rem;
      font-size:0.53rem;
      font-family:Segoe UI;
      font-weight:400;
      line-height:0.72rem;
      color:rgba(57,57,57,1);
    }
    .gs_js_content{
      margin-top: 0.45rem;
      width:7.71rem;
      font-size:0.37rem;
      font-family:Roboto;
      font-weight:400;
      line-height:0.51rem;
      color:rgba(121,121,121,1);
      div{
        text-indent: 1rem;
      }
    }
  }
}

</style>
