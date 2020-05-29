<template>
  <div class="container">
    <!-- 返回 -->
    <div class="zixun" @click="$router.go(-1)">
      <img class="icon" src="../assets/images/81587028561@2x.png" alt="">
      <div class="title">离职申请确认</div>
    </div>
    <!-- 相关信息 -->
    <div class="rzxx_cont">
      <div class="rzxx_item">
        <div>入职日期</div>
        <input type="text">
      </div>
      <div class="rzxx_item">
        <div>最后工作日</div>
        <div class="rzxx_item_r">
          <div>请选择</div>
          <img src="../assets/images/xiangyou@2x.png" alt="">
        </div>
      </div>
      <div class="rzxx_item">
        <div>离职原因</div>
        <div class="rzxx_item_r">
          <div>请选择</div>
          <img src="../assets/images/xiangyou@2x.png" alt="">
        </div>
      </div>
    </div>
    <div class="lzsq_box">
      <div class="lzsq_box_1">
        <div>离职原因备注</div>
        <textarea name="" id="" placeholder="因什么而离职"></textarea>
      </div>
      <div class="lzsq_box_1">
        <div>离职签字确认</div>
        <textarea name="" id="" placeholder="请确认签字"></textarea>
      </div>
    </div>
    
    <!-- 立即投递 -->
    <div class="tdjl_box"  @click="tdjl()">
      <div class="tdjl">
        提交申请
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
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
  border-bottom: 0.01rem solid rgba(112,112,112,0.14);
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
    padding-left: 0.85rem;
    padding-right: 0.61rem;
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
    img{
      width: 0.69rem;
      height: 0.69rem;
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
    .rzxx_item_r{
      display: flex;
      align-items: center;
      div{
        font-size:0.43rem;
        font-family:Roboto;
        font-weight:400;
        line-height:0.56rem;
        color:rgba(188,185,183,1);
      }
      img{
        width: 0.4rem;
        height: 0.4rem;
      }
    }
  }
}
.lzsq_box{
  .lzsq_box_1{
    padding-left: 0.75rem;
    padding-right: 0.51rem;
    margin-top: 0.4rem;
    border-bottom: 0.05rem solid rgba(248,248,248,1);
    div{
      font-size:0.43rem;
      font-family:Roboto;
      font-weight:400;
      line-height:0.56rem;
      color:rgba(38,38,38,1);
    }
    textarea{
      margin-top: 0.56rem;
      width: 100%;
      height: 2rem;
      font-size:0.43rem;
      font-family:Roboto;
      font-weight:400;
      line-height:0.56rem;
      color:rgba(188,185,183,1);
      resize: none;
      border: 0;
    }
  }
}

.tdjl_box{
  background:rgba(248,248,248,1);
  padding-top: 5rem;
  padding-bottom: 0.8rem;
  .tdjl{
    margin:0rem auto 0rem;
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
}


</style>
