<template>
  <div class="container">
    <!-- 返回 -->
    <div class="zixun" @click="$router.go(-1)">
      <img class="icon" src="../assets/images/81587028561@2x.png" alt="">
      <div class="title">教育经验</div>
    </div>
    <!-- 相关信息 -->                                              
    <div class="rzxx_cont">
      <div class="rzxx_item">
        <div>高中学校名称</div>
        <!-- <img src="../assets/images/rzxx_back@2x.png" alt=""> -->
      </div>
      <div class="rzxx_item">
        <div>时间</div>
        <img src="../assets/images/rzxx_back@2x.png" alt="">
      </div>
      <div class="rzxx_item henxian">
        <div>大学学校名称</div>
        <img src="../assets/images/rzxx_back@2x.png" alt="">
      </div>
      <div class="rzxx_item">
        <div>时间</div>
        <img src="../assets/images/rzxx_back@2x.png" alt="">
      </div>
      <div class="rzxx_item">
        <div>学历</div>
        <img src="../assets/images/rzxx_back@2x.png" alt="">
      </div>
      <div class="rzxx_item">
        <div>专业</div>
        <img src="../assets/images/rzxx_back@2x.png" alt="">
      </div>
    </div>
    <!-- 立即投递 -->
    <div class="tdjl" @click="tdjl()">
      保存
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
    tdjl(){
      this.$router.push({
          path: `/txjl`,
      })
    }
  }
}
</script>

<style lang="less" scoped>
.zixun{
  display: flex;
  justify-content: center;
  background:rgba(255,255,255,1);
  height: 1.44rem;
  align-items: center;
  border-bottom: 0.01rem solid #f4f4f4;
  .icon{
    position: absolute;
    left: 0;
    width: 2.01rem;
    height: 1.08rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title{
    font-size:0.48rem;
    font-family:PingFang SC;
    font-weight:400;
    line-height:1.33rem;
    color:rgba(65,65,65,1);
  }
}
.rzxx_cont{
  
  .rzxx_item{
    padding-left: 0.53rem;
    padding-right: 0.4rem;
    height: 1.63rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.03rem solid #F1F1F1;
    div{
      font-size:0.43rem;
      font-family:Roboto;
      font-weight:400;
      line-height:0.56rem;
      color:rgba(1,1,1,1);
    }
    img{
      width: .51rem;
      height: .51rem;
    }
  }
}
.henxian{
  border-top: 0.19rem solid rgba(241,241,241,1);
}
.tdjl{
  margin:.35rem auto 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width:8.91rem;
  height:1.36rem;
  background:rgba(27,160,209,1);
  opacity:1;
  border-radius:0.16rem;
  font-size:0.48rem;
  font-family:PingFang SC;
  font-weight:600;
  line-height:0.69rem;
  color:rgba(255,255,255,1);
}

</style>
