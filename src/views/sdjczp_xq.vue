<template>
  <div class="container">
    <!-- 返回 -->
    <div class="zixun" @click="$router.go(-1)">
      <img class="icon" src="../assets/images/81587028561@2x.png" alt="">
      <div class="title">首都机场招聘</div>
    </div>
    <!-- 招聘信息 -->
    <div class="zp_xq">
      <div class="zp_name">小拖车司机</div>
      <div class="zp_jy">北京 ｜ 1-3年 ｜ 学历不限</div>
      <div class="zp_xz">
        <div>6千-8千/月</div>
        <div>2020-11-12</div>
      </div>
    </div>
    <div class="xian"></div>
    <!-- 职位详情 -->
    <div class="zw_xq">
      <div class="zw_title">职位详情</div>
      <div>1.初中及以上学历，有相关工作经验；</div>
      <div>2.已享受养老保险待遇领取基本养老金或退休费人员；</div>
      <div>3.工作积极主动，能吃苦耐劳，居住机场生活区优先；</div>
      <div>4.身体健康，无慢性疾病及遗传病，未受过刑事处分，<div style="text-indent:1em;">未参加过各种违法活动。</div></div>
      <div>5.初中及以上学历，有相关工作经验；</div>
      <div>6.已享受养老保险待遇领取基本养老金或退休费人员；</div>
      <div>7.工作积极主动，能吃苦耐劳，居住机场生活区优先；</div>
      <div>8.身体健康，无慢性疾病及遗传病，未受过刑事处分，<div style="text-indent:1em;">未参加过各种违法活动。</div></div>
      <div class="zw_bottom">
        <div>包吃包住</div>
        <div>五险一金</div>
        <div>绩效奖金</div>
      </div>
      <div class="zw_dz">
        <div class="zw_dz_name">工作地点</div>
        <div class="zw_dz_xq"><img src="../assets/images/gsdz@2x.png" alt=""> 北京市顺义区首都机场生活区。</div>
      </div>
    </div>
    <!-- 立即投递 -->
    <div class="tdjl" @click="tdjl()">
      投递简历
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
.zp_xq{
  margin-top: 0.51rem;
  padding-left: 0.77rem;
  .zp_name{
    font-size:0.53rem;
    font-family:PingFang SC;
    font-weight:600;
    line-height:0.77rem;
    color:rgba(39,39,39,1);
  }
  .zp_jy{
    margin-top: 0.37rem;
    font-size:0.43rem;
    font-family:PingFang SC;
    font-weight:400;
    line-height:0.61rem;
    color:rgba(37,37,37,1);
  }
  .zp_xz{
    margin-top: 0.37rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 0.51rem;
    div:nth-child(1){
      font-size:0.43rem;
      font-family:PingFang SC;
      font-weight:600;
      line-height:0.61rem;
      color:rgba(247,78,83,1);
    }
    div:nth-child(2){
      font-size:0.32rem;
      font-family:PingFang SC;
      font-weight:400;
      line-height:0.48rem;
      color:rgba(145,140,140,1);
    }
  }
}
.xian{
  margin-top: .59rem;
  margin-left: 0.61rem;
  margin-bottom: 0.54rem;
  width:8.69rem;
  height:0.03rem;
  border:0.03px solid rgba(241,241,241,1);
  opacity:1;
}
.zw_xq{
  padding-left: 0.51rem;
  padding-right: 0.59rem;
  font-size:0.37rem;
  font-family:PingFang SC;
  font-weight:400;
  line-height:0.7rem;
  color:rgba(107,107,107,1);
  .zw_title{
    font-size:0.48rem;
    font-family:PingFang SC;
    font-weight:600;
    line-height:0.69rem;
    color:rgba(39,39,39,1);
    margin-bottom: 0.27rem;
  }
  .zw_bottom{
    display: flex;
    div{
      margin-right: 0.48rem;
      margin-top: 0.3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width:1.97rem;
      height:0.75rem;
      background:rgba(248,248,250,1);
      opacity:1;
      border-radius:0.05rem;
      font-size:0.37rem;
      font-family:Roboto;
      font-weight:400;
      line-height:0.51rem;
      color:rgba(84,84,84,1);
    }
  }
  .zw_dz{
    margin-top: 0.64rem;
    .zw_dz_name{
      font-size:0.48rem;
      font-family:PingFang SC;
      font-weight:600;
      line-height:0.69rem;
      color:rgba(39,39,39,1);
    }
    .zw_dz_xq{
      margin-top: 0.29rem;
      display: flex;
      align-items: center;
      img{
        width: 0.45rem;
        height: 0.45rem;
      }
      font-size:0.37rem;
      font-family:PingFang SC;
      font-weight:400;
      line-height:0.37rem;
      color:rgba(107,107,107,1);
    }
  }
}
.tdjl{
  margin:3.31rem auto 0.27rem;
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
