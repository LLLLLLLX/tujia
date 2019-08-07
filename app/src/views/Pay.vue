<template>
<div>
    <div class="paycontanier">
        <div class="pay">
            <div class="payHeader">
                <div>
                    <h3>白雪公主豪华大床间免费接送</h3>
                    <p>8月7日-8月8日 共1晚</p>
                </div>
                <div>
                    支付剩余时间<span>28</span>分<span>42</span>秒
                </div>  
            </div>   
        </div>
        <div class="payContent">
            <div class="payRate">
                <p>待付金额 &nbsp;<span>￥288</span></p>
            </div>
            <div class="payType">
                <p>支付方式</p>
                <div>
                    <el-radio v-model="radio" label="1">
                        &nbsp;&nbsp;<img src="../assets/zhifubao.png" alt="">&nbsp;&nbsp;支付宝
                    </el-radio>
                </div>
                <div>
                    <el-radio v-model="radio" label="2">
                        &nbsp;&nbsp;<img src="../assets/weixinzhifu.png" alt="">&nbsp;&nbsp;云闪付
                    </el-radio>
                </div>
                <div>
                    <el-radio v-model="radio" label="3">
                        &nbsp;&nbsp;<img src="../assets/yinlian.png" alt="">&nbsp;&nbsp;微信
                    </el-radio>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data () {
      return {
        radio: '1',
      };
    }

}
</script>
<style scoped>
.paycontanier{
    background:#f5f5f5;
    padding:10px 0;
}
.pay{
    width:80%;
    margin:0px auto;
    background:#fff;
    padding:25px 35px;
}
.payHeader{
    display:flex;
    justify-content:space-between;
}
.payHeader h3{
    font-size:20px;
    font-weight:700;
}
.payHeader p{
    font-size:14px;
    color:#999;
    margin:0;
}
.payHeader div+div{
    font-size:22px;
    padding:10px 0;
}
.payHeader span{
    color:red;
}
.payContent{
    width:80%;
    margin:30px auto 20px;
    background:#fff;
    padding:25px 35px;
}
.payRate{
    border-bottom:1px solid #ddd;
    font-size:16px;
}
.payRate span{
    color:#fd8238;
    font-size:30px;
    font-weight:700;
}
.payType div{
    margin-bottom:10px;
}
</style>