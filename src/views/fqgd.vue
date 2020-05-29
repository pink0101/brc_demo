<template>
  <div class="container">
    <!-- 返回 -->
    <div class="zixun" @click="$router.go(-1)">
      <img class="icon" src="../assets/images/81587028561@2x.png" alt="">
      <div class="title">发起工单</div>
    </div>
    <!-- lx -->
    <div class="fqgd_box">
      <div class="fqgd_item" @click="fqgd_xq()">
        <div class="fqgd_item_img">
          <img src="../assets/images/fqgd@2x.png" alt="">
        </div>
        <div class="fqgd_item_div">发起工单</div>
      </div>
      <div class="fqgd_item">
        <div class="fqgd_item_img fqgd_item_img_2">
          <img src="../assets/images/dcl@2x.png" alt="">
        </div>
        <div class="fqgd_item_div">已处理</div>
      </div>
      <div class="fqgd_item">
        <div class="fqgd_item_img fqgd_item_img_3">
          <img src="../assets/images/fqgd_dcl@2x.png" alt="">
        </div>
        <div class="fqgd_item_div">待处理</div>
      </div>
      
    </div>
    <!-- 全部工单 -->
    <div class="qbgd_box">
      <div class="qbgd_box_name">全部工单</div>
      <div class="qbgd_box_item">
        <div class="qbgd_box_1">
          <div>社保电话更改</div>
          <div>02月20日</div>
        </div>
        <div class="qbgd_box_2">由于手机换号，麻烦更改一下社保电话，原来的18837263748更改为1829347363   </div>
        <div class="qbgd_box_3">
          <img src="../assets/images/wenjian@2x.png" alt="">工作证明.do c
        </div>
        <div class="qbgd_box_4">
          <div>已处理</div>
          <div>（02月20日）</div>
        </div>
        <div class="qbgd_box_5">
          <p>备注： </p>
          <p>工作证明已经盖章并邮寄，请查收，快递为顺丰，订单号：727181827272 </p>
        </div>
      </div>
      <div class="qbgd_box_item">
        <div class="qbgd_box_1">
          <div>社保电话更改</div>
          <div>02月20日</div>
        </div>
        <div class="qbgd_box_2">由于手机换号，麻烦更改一下社保电话，原来的18837263748更改为1829347363   </div>
        <div class="qbgd_box_3">
          <img src="../assets/images/wenjian@2x.png" alt="">工作证明.do c
        </div>
        <div class="qbgd_box_4">
          <div>已处理</div>
          <div>（02月20日）</div>
        </div>
        <div class="qbgd_box_5">
          <p>备注： </p>
          <p>工作证明已经盖章并邮寄，请查收，快递为顺丰，订单号：727181827272 </p>
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
    fqgd_xq(){
      this.$router.push({
          path: `/fqgd_xq`,
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
  border-bottom: 0.03rem solid rgba(112,112,112,0.14);
  .icon{
    position: absolute;
    left: 0.19rem;
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
.fqgd_box{
  padding: 0.48rem 0.59rem 0.4rem;
  display: flex;
  justify-content: space-between;
  .fqgd_item{
    display: flex;
    flex-direction: column;
    align-items: center;
    .fqgd_item_img{
      width:1.2rem;
      height:1.2rem;
      background:rgba(49,221,143,1);
      opacity:1;
      border-radius:0.16rem;
      display: flex;
      justify-content: center;
      padding-top:0.3rem;
      img{
        width: 0.56rem;
        height: 0.56rem;
      }
    }
    .fqgd_item_img_2{
      background:rgba(47,214,217,1);
    }
    .fqgd_item_img_3{
      background:rgba(252,174,28,1);
    }
    .fqgd_item_div{
      margin-top: 0.21rem;
      font-size:0.37rem;
      font-family:Roboto;
      font-weight:400;
      line-height:0.51rem;
      color:rgba(32,34,36,1);
    }
  }
}
.qbgd_box{
  background:rgba(248,248,248,1);
  padding-top: 0.45rem;
  padding-bottom: 0.45rem;
  .qbgd_box_name{
    padding-left: 0.45rem;
    font-size:0.37rem;
    font-family:Roboto;
    font-weight:400;
    line-height:0.51rem;
    color:rgba(32,34,36,1);
    opacity:0.5;
    margin-bottom: 0.43rem;
  }
  .qbgd_box_item{
    margin-bottom: 0.48rem;
    width:9.25rem;
    background:rgba(255,255,255,1);
    opacity:1;
    border-radius:0.16rem;
    margin-left: 0.37rem;
    padding: 0.37rem 0.21rem 0.4rem 0.48rem;
    .qbgd_box_1{
      display: flex;
      justify-content: space-between;
      div:nth-child(1){
        font-size:0.48rem;
        font-family:Roboto;
        font-weight:400;
        line-height:0.64rem;
        color:rgba(46,46,46,1);
      }
      div:nth-child(2){
        font-size:0.37rem;
        font-family:Roboto;
        font-weight:400;
        line-height:0.51rem;
        color:rgba(188,188,188,1);
      }
    }
    .qbgd_box_2{
      margin-top: 0.29rem;
      width:8rem;
      height:1.68rem;
      font-size:0.43rem;
      font-family:Roboto;
      font-weight:400;
      line-height:0.56rem;
      color:rgba(119,119,119,1);
    }
    .qbgd_box_3{
      padding-left: 0.13rem;
      display: flex;
      align-items: center;
      width:8.35rem;
      height:1.47rem;
      background:rgba(255,255,255,1);
      border:0.03rem solid rgba(230,230,230,1);
      opacity:1;
      border-radius:0.16rem;
      font-size:0.37rem;
      font-family:Roboto;
      font-weight:400;
      line-height:0.51rem;
      color:rgba(31,31,31,1);
      img{
        margin-right: 0.13rem;
        width: 0.91rem;
        height: 0.91rem;
      }
    }
    .qbgd_box_4{
      margin-top: 0.37rem;
      display: flex;
      align-items: center;
      div:nth-child(1){
        font-size:0.37rem;
        font-family:Roboto;
        font-weight:400;
        line-height:0.51rem;
        color:rgba(8,170,255,1);
      }
      div:nth-child(2){
        font-size:0.32rem;
        font-family:Roboto;
        font-weight:400;
        line-height:0.43rem;
        color:rgba(188,188,188,1);
      }
    }
    .qbgd_box_5{
      margin-top: 0.29rem;
      display: flex;
      p:nth-child(1){
        position: absolute;
        width: 2rem;
        font-size:0.37rem;
        font-family:Roboto;
        font-weight:400;
        line-height:0.51rem;
        color:#F26756;
      }
      p:nth-child(2){
        text-indent: 1rem;
        font-size:0.37rem;
        font-family:Roboto;
        font-weight:400;
        line-height:0.51rem;
        color:#8D8D8D;
      }
    }
  }
}

</style>
