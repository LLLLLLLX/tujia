<template>
<div>
<Nav></Nav>
    <div class="paycontanier" v-for="(detail,i) of details" :key="i">
        <div class="pay">
            <div class="payHeader">
                <div>
                    <h3>{{detail.title}}</h3>
                    <p>{{date[0].slice(5,7)}}月{{date[0].slice(8,10)}}日-{{date[1].slice(5,7)}}月{{date[1].slice(8,10)}}日 共{{date[1].slice(8,10)-date[0].slice(8,10)}}晚</p>
                </div>
                <div>
                    支付剩余时间<span>{{minute}}</span>分<span>{{second}}</span>秒
                </div>  
            </div>   
        </div>
        <div class="payContent">
            <div class="payRate">
                <p>待付金额 &nbsp;<span>￥{{detail.price+100}}</span></p>
            </div>
            <div class="payType">
                <p>支付方式</p>
                <div>
                    <el-radio v-model="radio" label="1">
                        &nbsp;&nbsp;<img src="../assets/zhifubao.png" alt="">&nbsp;&nbsp;支付宝&nbsp;&nbsp;&nbsp;&nbsp;<span>支付宝支付</span>
                    </el-radio>
                </div>
                <div>
                    <el-radio v-model="radio" label="2">
                        &nbsp;&nbsp;<img src="../assets/weixinzhifu.png" alt="">&nbsp;&nbsp;微信&nbsp;&nbsp;&nbsp;&nbsp;<span>微信安全支付</span>
                    </el-radio>
                </div>
                <div>
                    <el-radio v-model="radio" label="3">
                        &nbsp;&nbsp;<img src="../assets/yinlian.png" alt="">&nbsp;&nbsp;云闪付&nbsp;&nbsp;&nbsp;&nbsp;<span>中国银联在线支付服务</span>
                    </el-radio>
                </div>
            </div>
            <div class="payBtn">
                <el-button type="warning" @click="submitpay">确认支付 ￥{{detail.price+100}}</el-button>
            </div>
        </div>
    </div>
    <Footer></Footer>
</div>
</template>
<script>
import Nav from './Nav.vue'
import Footer from './Footer.vue'
export default {
    components:{
        "Nav":Nav,
        "Footer":Footer,
    },
    data () {
      return {
        radio: '',
        details:{},
        data:[],
        minute:29,
        second:59,
        payState:0,
        hid:{},
      };
    },
    methods: {
        submitpay(){
            switch(this.radio){
                case '1':alert("使用支付宝支付成功");this.payState=1;break;
                case '2':alert("使用微信支付成功");this.payState=1;break;
                case '3':alert("使用云闪付支付成功");this.payState=1;break;
            }
            if(this.payState==1){
                this.$router.push({
                    path: '/PersonalCenter',
                    query: {
                        date:this.date,
                        hid:this.hid.hid
                    }
                }) 
            }else{
                alert('请选择支付方式！');
            }
        }
    },
    mounted() {
        this.date=this.$route.query.date;
        //console.log(this.$route.query.hid)
        this.hid={hid:this.$route.query.hid};
        this.axios.get("/details",{params:this.hid}).then(res=>{
            //console.log(res.data.result);
            if(res.data.code==1){
                this.details=res.data.result;
                //console.log(this.details);
            }else{
                alert("数据加载失败");
            }
        })
        var second=setInterval(()=>{
            this.second--;
            if(this.minute==0&&this.second==0){
                clearInterval(second);
                alert("订单已超时，请重新预定");
            }
            if(this.second==-1){
                this.minute--;
                this.second=59;
            } 
        },1000)
    },
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
.payType{
    padding-bottom:160px;
    padding-top:20px;
    border-bottom:1px solid #ddd;
}
.payType div{
    margin-bottom:10px;
}
.payType span{
    font-size:14px;
    color:#666;
}
.payBtn{
    margin:20px 50px;
}
</style>