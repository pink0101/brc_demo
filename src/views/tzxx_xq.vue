<template>
  <div class="container">
    <!-- 返回 -->
    <div class="zixun" @click="$router.go(-1)">
      <img class="icon" src="../assets/images/81587028561@2x.png" alt="">
      <div class="title">通知消息</div>
    </div>
    <!-- item -->
    <div class="tzxx_box" @click="tzxx_xq()">
      <div class="tzxx_box_1">
        <div>小拖车司机</div>
        <div>6千-8千/月</div>
      </div>
      <div class="tzxx_box_2">首航环宇（北京）航空资讯服务有限公司</div>
      <div class="tzxx_box_3">
        <img src="../assets/images/1ios@2x.png" alt="">
        <div>刘女士</div>
        <div>我们已经向您发起面试邀请</div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow:0,
    }
  },
  created() {
  },
  methods: {
    
    // tzxx_xq(){
    //   this.$router.push({
    //       path: `/tzxx_xq`,
    //   })
    // }
  }
}
</script>

<style lang="less" scoped>
.zixun{
  width: 100%;
  display: flex;
  justify-content: center;
  // background:rgba(255,255,255,1);
  height: 1.44rem;
  align-items: center;
  border-bottom: 0.03rem solid rgba(112,112,112,0.14);
  .icon{
    position: absolute;
    left: 0rem;
    width: 2.01rem;
    height: 1.08rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title{
    font-size:0.48rem;
    font-family:Roboto;
    font-weight:400;
    line-height:0.64rem;
    color:rgba(0,0,0,1);
  }
}
.tzxx_box{
  padding-left:0.4rem;
  padding-top: 0.4rem;
  .tzxx_box_1{
    display: flex;
    justify-content: space-between;
    padding-right: 0.53rem;
    div:nth-child(1){
      font-size:0.43rem;
      font-family:PingFang SC;
      font-weight:600;
      line-height:0.61rem;
      color:rgba(39,39,39,1);
    }
    div:nth-child(2){
      font-size:0.37rem;
      font-family:PingFang SC;
      font-weight:600;
      line-height:0.56rem;
      color:rgba(247,78,83,1);
    }
  }
  .tzxx_box_2{
    margin-top:0.19rem;
    font-size:0.32rem;
    font-family:PingFang SC;
    font-weight:400;
    line-height:0.48rem;
    color:rgba(39,39,39,1);
  }
  .tzxx_box_3{
    display: flex;
    align-items: center;
    padding-left: 0.27rem;
    img{
      width: 0.59rem;
      height: 0.59rem;
      margin-right: 0.27rem;
    }
    margin-top: 0.56rem;
    width:9.2rem;
    height:1.23rem;
    background:rgba(247,247,247,1);
    font-size:0.32rem;
    font-family:PingFang SC;
    font-weight:400;
    line-height:0.48rem;
    color:rgba(95,95,95,1);
    div:nth-child(3){
      margin-left: 0.27rem;
    }
  }
}


</style>
