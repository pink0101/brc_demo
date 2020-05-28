<template>
  <div class="container">
    <!-- 返回 -->
    <div class="zixun" @click="$router.go(-1)">
      <img class="icon" src="../assets/images/81587028561@2x.png" alt="">
      <div class="title">已投递</div>
    </div>
    <!-- ytd -->
    <div class="ytd_box">
      <div class="ytd_item">
        <div class="ytd_item_1">
          <div>小拖车司机</div>
          <div>2020-04-12</div>
        </div>
        <div class="ytd_item_2">6千-8千/月</div>
        <div class="ytd_item_3">
          <div>首航环宇（北京）航空资讯服务有限公司</div>
          <div>待审核</div>
        </div>
      </div>
      <div class="ytd_item">
        <div class="ytd_item_1">
          <div>小拖车司机</div>
          <div>2020-04-12</div>
        </div>
        <div class="ytd_item_2">6千-8千/月</div>
        <div class="ytd_item_3">
          <div>首航环宇（北京）航空资讯服务有限公司</div>
          <div>待审核</div>
        </div>
      </div>
      <div class="ytd_item">
        <div class="ytd_item_1">
          <div>小拖车司机</div>
          <div>2020-04-12</div>
        </div>
        <div class="ytd_item_2">6千-8千/月</div>
        <div class="ytd_item_3">
          <div>首航环宇（北京）航空资讯服务有限公司</div>
          <div>待审核</div>
        </div>
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
    Show(){
      this.isShow = !this.isShow
    },
    rzxx(){
      this.$router.push({
        path:`/rzxx`
      })
    },
    
    
    // newsxq(){
    //   this.$router.push({
    //       path: `/ywhz_xq`,
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
.ytd_box{
  margin-top: 0.35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .ytd_item{
    width:9.09rem;
    height:3.63rem;
    background:rgba(255,255,255,1);
    box-shadow:0rem 0.08rem 0.16rem rgba(154,145,145,0.16);
    opacity:1;
    border-radius:0.11rem;
    padding-left: 0.48rem;
    margin-bottom: 0.32rem;
    .ytd_item_1{
      margin-top: 0.48rem;
      display: flex;
      justify-content: space-between;
      padding-right: 0.21rem;
      div:nth-child(1){
        font-size:0.43rem;
        font-family:PingFang SC;
        font-weight:600;
        line-height:0.61rem;
        color:rgba(39,39,39,1);
      }
      div:nth-child(2){
        font-size:0.32rem;
        font-family:PingFang SC;
        font-weight:400;
        line-height:0.48rem;
        color:rgba(95,95,95,1);
      }
    }
    .ytd_item_2{
      margin-top: 0.21rem;
      font-size:0.37rem;
      font-family:PingFang SC;
      font-weight:600;
      line-height:0.56rem;
      color:rgba(247,78,83,1);
    }
    .ytd_item_3{
      display: flex;
      justify-content: space-between;
      padding-right: 0.48rem;
      margin-top: 0.53rem;
      div:nth-child(1){
        font-size:0.32rem;
        font-family:PingFang SC;
        font-weight:400;
        line-height:0.48rem;
        color:rgba(39,39,39,1);
      }
      div:nth-child(2){
        font-size:0.32rem;
        font-family:PingFang SC;
        font-weight:400;
        line-height:0.48rem;
        color:rgba(253,160,39,1);
      }
    }
  }
}


</style>
