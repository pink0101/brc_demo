<template>
  <div class="container">
    <!-- 返回 -->
    <div class="zixun" @click="$router.go(-1)">
      <img class="icon" src="../assets/images/81587028561@2x.png" alt="">
      <div class="title">航服材料提报</div>
    </div>
    <!-- 相关信息 -->
    <div class="rzxx_cont">
      <div class="rzxx_item">
        <div>姓名</div>
        <input type="text">
      </div>
      <div class="rzxx_item">
        <div>性别</div>
        <input type="text">
      </div>
      <div class="rzxx_item">
        <div>国籍</div>
        <input type="text">
      </div>
      <div class="rzxx_item">
        <div>籍贯</div>
        <input type="text">
      </div>
      <div class="rzxx_item">
        <div>民族</div>
        <input type="text">
      </div>
      <div class="rzxx_item">
        <div>文化程度</div>
        <input type="text">
      </div>
      <div class="rzxx_item">
        <div>政治面貌</div>
        <input type="text">
      </div>
      <div class="rzxx_item">
        <div>身份证号</div>
        <input type="text">
      </div>
      <div class="rzxx_item">
        <div>联系方式</div>
        <input type="text">
      </div>
      <div class="rzxx_item">
        <div>现住地址</div>
        <input type="text">
      </div>
      <div class="rzxx_item">
        <div>户口所在地</div>
        <input type="text">
      </div>
      <div class="rzxx_item">
        <div>配偶姓名</div>
        <input type="text">
      </div>
      <div class="rzxx_item">
        <div>配偶身份证号</div>
        <input type="text">
      </div>
      <div class="rzxx_item">
        <div>配偶单位</div>
        <input type="text">
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
  border-bottom: 0.03rem solid rgba(112,112,112,0.14);
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
    padding-right: 0.4rem;
    height: 1.44rem;
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
  }
}

.tdjl{
  margin:0.77rem auto 0.8rem;
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
