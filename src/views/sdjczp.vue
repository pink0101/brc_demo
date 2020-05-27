<template>
  <div class="container">
    <!-- 最新资讯 -->
    <div class="zixun">
      <img class="icon" src="../assets/images/81587028561@2x.png" alt="">
      <div class="title">首都机场招聘</div>
    </div>
    <!-- content -->
    <div class="content">
      <!-- banner -->
      <div class="banner_img">
        <img src="../assets/images/5d07b3327108a@2x.png" alt="">
      </div>
      <!-- 筛选 -->
      <div class="saixuan">
        <div>地点<img src="../assets/images/xia@2x.png" alt=""> </div>
        <div>公司<img src="../assets/images/xia@2x.png" alt=""> </div>
        <div>职位<img src="../assets/images/xia@2x.png" alt=""> </div>
      </div>
      <!-- item -->
      <div class="zp_cont">
        <div class="zp_item" @click="sdjczp_xq()">
          <div class="zp_title">
            <div>小拖车司机</div>
            <div>6千-8千/月</div>
          </div>
          <div class="zp_gs">首航环宇（北京）航空资讯服务有限公司</div>
          <div class="zp_yq">北京 ｜ 1-3年 ｜  学历不限</div>
          <div class="zp_sj">
            <div>2020-04-12</div>
            <div>申请</div>
          </div>
        </div>
        <div class="zp_item">
          <div class="zp_title">
            <div>小拖车司机</div>
            <div>6千-8千/月</div>
          </div>
          <div class="zp_gs">首航环宇（北京）航空资讯服务有限公司</div>
          <div class="zp_yq">北京 ｜ 1-3年 ｜  学历不限</div>
          <div class="zp_sj">
            <div>2020-04-12</div>
            <div>申请</div>
          </div>
        </div>
        <div class="zp_item">
          <div class="zp_title">
            <div>小拖车司机</div>
            <div>6千-8千/月</div>
          </div>
          <div class="zp_gs">首航环宇（北京）航空资讯服务有限公司</div>
          <div class="zp_yq">北京 ｜ 1-3年 ｜  学历不限</div>
          <div class="zp_sj">
            <div>2020-04-12</div>
            <div>申请</div>
          </div>
        </div>
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
    sdjczp_xq(){
      this.$router.push({
          path: `/sdjczp_xq`,
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
.content{
  height:22.56rem;
  background:rgba(249,250,255,1);
  padding-top: 0.37rem;
  .banner_img{
    margin: auto ;
    width: 9.09rem;
    height: 2.61rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .saixuan{
    margin-top:0.4rem;
    margin-left: 0.45rem;
    display: flex;
    div{
      margin-right: 0.48rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width:1.97rem;
      height:0.75rem;
      background:rgba(255,255,255,1);
      opacity:1;
      border-radius:0.05rem;
      font-size:0.37rem;
      font-family:Roboto;
      font-weight:400;
      line-height:0.51rem;
      color:rgba(84,84,84,1);
    }
    img{
      width: 0.24rem;
      height: 0.24rem;
      margin-left: 0.13rem;
    }
  }
  .zp_cont{
    margin-top: 0.4rem;
    .zp_item{
      width:9.97rem;
      height:3.63rem;
      background:rgba(255,255,255,1);
      padding-left: 0.4rem;
      margin-bottom: 0.24rem;
      .zp_title{
        display: flex;
        justify-content: space-between;
        padding-right: 0.51rem;
        padding-top:0.48rem;
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
      .zp_gs{
        padding-top: .19rem;
        font-size:0.32rem;
        font-family:PingFang SC;
        font-weight:400;
        line-height:0.48rem;
        color:rgba(39,39,39,1);
      }
      .zp_yq{
        padding-top: .19rem;
        font-size:0.32rem;
        font-family:PingFang SC;
        font-weight:400;
        line-height:0.48rem;
        color:rgba(95,95,95,1);
      }
      .zp_sj{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding-top:0.16rem;
        padding-right: 0.37rem;
        div:nth-child(1){
          font-size:0.32rem;
          font-family:PingFang SC;
          font-weight:400;
          line-height:0.48rem;
          color:rgba(95,95,95,1);
        }
        div:nth-child(2){
          display: flex;
          justify-content: center;
          align-items: center;
          width:1.57rem;
          height:0.64rem;
          background:rgba(27,160,209,1);
          opacity:1;
          border-radius:0.11rem;
          font-size:0.37rem;
          font-family:PingFang SC;
          font-weight:600;
          line-height:0.56rem;
          color:rgba(255,255,255,1);
        }
      }
    }
  }
}
</style>
