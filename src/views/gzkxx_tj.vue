<template>
  <div class="container">
    <!-- 返回 -->
    <div class="zixun" @click="$router.go(-1)">
      <img class="icon" src="../assets/images/81587028561@2x.png" alt="">
      <div class="title">工资卡信息提交</div>
    </div>
    <!-- 相关信息 -->
    <div class="rzxx_cont">
      <div class="gzktj_bj">中国建设银行工资卡提交信息</div>
      <div class="rzxx_item">
        <div>卡号</div>
        <input type="text">
      </div>
      <div class="rzxx_item">
        <div>姓名</div>
        <input type="text">
      </div>
      <div class="rzxx_item">
        <div>电话</div>
        <input type="text">
      </div>
      <div class="rzxx_item">
        <div>身份证号码</div>
        <input type="text">
      </div>
    </div>
    <!-- 上传照片 -->
    <div class="sczj">
      <div class="sczj_item">
        <div class="sczj_item_name">上传身份证件</div>
        <div class="sczj_item_box">
          <img src="../assets/images/sfz_photo@2x.png" alt="">
          <img src="../assets/images/sfz_photo@2x.png" alt="">
          <div class="sczj_item_box_1" v-if="0">
            <div class="sczj_item_box_1_img">
              <img src="../assets/images/sfz@2x.png" alt="">
              <img src="../assets/images/tj@2x.png" alt="">
            </div>
            <div class="sczj_item_box_1_text">点击添加正面证件</div>
          </div>
          <div class="sczj_item_box_1" v-if="0">
            <div class="sczj_item_box_1_img">
              <img src="../assets/images/sfz@2x.png" alt="">
              <img src="../assets/images/tj@2x.png" alt="">
            </div>
            <div class="sczj_item_box_1_text">点击添加背面证件</div>
          </div>
          
        </div>
      </div>
      <div class="sczj_item">
        <div class="sczj_item_name">上传银行卡号</div>
        <div class="sczj_item_box">
          <div class="sczj_item_box_1">
            <div class="sczj_item_box_1_img">
              <img src="../assets/images/yhk@2x.png" alt="">
              <img src="../assets/images/tj@2x.png" alt="">
            </div>
            <div class="sczj_item_box_1_text">点击添加正面证件</div>
          </div>
          <div class="sczj_item_box_1">
            <div class="sczj_item_box_1_img">
              <img src="../assets/images/yhk@2x.png" alt="">
              <img src="../assets/images/tj@2x.png" alt="">
            </div>
            <div class="sczj_item_box_1_text">点击添加背面证件</div>
          </div>
          
        </div>
      </div>
    </div>
    <!-- 立即投递 -->
    <div class="tdjl" @click="tdjl()">
      提交申请
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
          path: `/gzt`,
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
  .gzktj_bj{
    margin-top: -0.1rem;
    background: url('../assets/images/gzktj_bj@2x.png');
    background-size:120% 100%;
    background-repeat:no-repeat;
    width: 100%;
    height: 1.76rem;
    font-size:0.43rem;
    font-family:Roboto;
    font-weight:400;
    line-height:0.56rem;
    color:rgba(255,255,255,1);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .rzxx_item{
    padding-left: 0.56rem;
    padding-right: 0.4rem;
    height: 1.76rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.05rem solid #F8F8F8;
    div{
      font-size:0.43rem;
      font-family:Roboto;
      font-weight:400;
      line-height:0.56rem;
      color:rgba(24,24,24,1);
    }
    input{
      width: 6rem;
      height: 100%;
      border: 0;
      font-size:0.43rem;
      font-family:Roboto;
      font-weight:400;
      line-height:0.56rem;
      color:rgba(168,168,168,1);
      text-align: right;
      padding-right: 0.83
    }
  }
}
.sczj{
  padding-left: 0.56rem;
  .sczj_item{
    margin-top: 0.45rem;
    .sczj_item_name{
      font-size:0.43rem;
      font-family:Roboto;
      font-weight:400;
      line-height:0.56rem;
      color:rgba(24,24,24,1);
    }
    .sczj_item_box{
      margin-top: 0.29rem;
      padding-right: 0.64rem;
      display: flex;
      justify-content: space-between;
      img{
        width: 4.31rem;
        height: 2.68rem;
      }
      .sczj_item_box_1{
        width:4.24rem;
        height:2.75rem;
        background:rgba(230,230,230,1);
        opacity:1;
        border-radius:0.16rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        .sczj_item_box_1_img{
          margin-top: 0.77rem;
          display: flex;
          align-items: center;
          img:nth-child(1){
            width: 0.96rem;
            height: .96rem;
          }
          img:nth-child(2){
            margin-left: 0.27rem;
            width: 0.53rem;
            height: .53rem;
          }
        }
        .sczj_item_box_1_text{
          margin-top: 0.27rem;
          width:2.99rem;
          height:0.51rem;
          font-size:0.37rem;
          font-family:Roboto;
          font-weight:400;
          line-height:0.51rem;
          color:rgba(24,24,24,1);
          opacity:0.45;
        }
      }
    }
  }
}
.tdjl{
  margin:0.64rem auto 0.8rem;
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
