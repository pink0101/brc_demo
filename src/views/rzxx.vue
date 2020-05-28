<template>
  <div class="container">
    <!-- 返回 -->
    <div class="zixun" @click="$router.go(-1)">
      <img class="icon" src="../assets/images/81587028561@2x.png" alt="">
      <div class="title">入职信息</div>
    </div>
    <!-- 相关信息 -->
    <div class="rzxx_cont">
      <div class="rzxx_item">
        <div>姓名</div>
        <img src="../assets/images/rzxx_back@2x.png" alt="">
      </div>
      <div class="rzxx_item">
        <div>电话</div>
        <img src="../assets/images/rzxx_back@2x.png" alt="">
      </div>
      <div class="rzxx_item">
        <div>紧急联系人姓名</div>
        <img src="../assets/images/rzxx_back@2x.png" alt="">
      </div>
      <div class="rzxx_item">
        <div>紧急联系人电话</div>
        <img src="../assets/images/rzxx_back@2x.png" alt="">
      </div>
      <div class="rzxx_item">
        <div>到岗时间</div>
        <img src="../assets/images/rzxx_back@2x.png" alt="">
      </div>
      <div class="rzxx_item">
        <div>是否在北京参加过社保</div>
        <img src="../assets/images/rzxx_back@2x.png" alt="">
      </div>
      <div class="rzxx_item">
        <div>累计工作时间</div>
        <img src="../assets/images/rzxx_back@2x.png" alt="">
      </div>
      <div class="rzxx_item">
        <div>是否可以提相关说明</div>
        <img src="../assets/images/rzxx_back@2x.png" alt="">
      </div>
    </div>
    <!-- 备注 -->
    <div class="beizu">提供相关说明包括：本人，配偶以及父母无犯罪，无行政拘留相关证明。应聘机场所有岗位都需要此证明。    </div>
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
.beizu{
  width:9.4rem;
  height:1.79rem;
  background:rgba(250,248,248,1);
  margin: .51rem auto 0;
  font-size:0.37rem;
  font-family:Roboto;
  font-weight:400;
  line-height:0.51rem;
  color:rgba(250,64,64,1);
  opacity:0.76;
  padding: 0.37rem 0.3rem 0.4rem 0.19rem;
}
.tdjl{
  margin:3.47rem auto 0.8rem;
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
