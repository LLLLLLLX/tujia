<template>
<div>
    <div class="PersonalCenter">
        <el-row>
            <el-col :span="5">
                <div class="perLeft">
                    <div class="perInfo">
                        <p>18375435076</p>
                        <p>修改个人资料</p>
                        <p>钻石卡绑定</p>
                    </div>
                    <div class="perTitle">
                        <img src="../assets/dingdan.png" alt="">
                        <span>我的订单</span>
                    </div>
                    <div class="perOrder">
                        <ul>
                            <li>订单管理</li>
                            <li>点评管理</li>
                        </ul>
                    </div>
                    <div class="perTitle">
                        <img src="../assets/dingdan.png" alt="">
                        <span>我的资产</span>
                    </div>
                    <div class="perOrder">  
                        <ul>
                            <li>账户余额</li>
                            <li>收款账号</li>
                            <li>我的途游卡</li>
                            <li>我的红包</li>
                            <li>我的积分</li>
                        </ul>
                    </div>
                    <div class="perTitle">
                        <img src="../assets/dingdan.png" alt="">
                        <span>个人中心</span>
                    </div>  
                    <div class="perOrder">
                        <ul>
                            <li>个人资料</li>
                            <li>修改密码</li>
                            <li>我的收藏</li>
                        </ul>
                    </div>
                </div>
            </el-col>
            <el-col :span="19">
                <div class="perRight">
                    <p>我的订单</p>
                    <div>
                        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                            <el-tab-pane label="国内订单" name="first">
                                <div class="rContent">
                                    <el-row>
                                        <el-col :span="4">
                                            <div class="rpic">
                                                <img src="../assets/landlord01.jpg" alt="">
                                            </div>
                                        </el-col>
                                        <el-col :span="20">
                                            <div class="rcontent">
                                                <p class="rtitle">aaaaaa</p>
                                                <div class="rdate">
                                                    <p>入住：2019-08-07</p>
                                                    <p>退房：2019-08-08</p>
                                                    <p>套数：1</p>
                                                    <p>房费：￥288</p>
                                                </div>
                                                <p class="rrate">订金：￥288</p>
                                                <p class="rstate">订单状态：待支付</p>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="国外港台订单" name="second">国外港台订单</el-tab-pane>
                        </el-tabs>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</div>
</template>
<script>
export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    mounted() {
        this.date=this.$route.query.date;
        //console.log(this.$route.query.hid)
        this.hid={hid:this.$route.query.hid};
    },
}
</script>
<style scoped>
.PersonalCenter{
    padding:20px 150px;
    background:#eee;
}
.perLeft{
    background:#fff;
    border:1px solid #ddd;
}
.perRight{
    margin-left:5px;
}
.perInfo{
    padding:25px 25px;
    border-top:4px solid #fd8238;
}
.perInfo p{
    font-size:14px;
    color:#007bff;
    margin-bottom:5px;
}
.perOrder{
    padding:0px 25px 10px;
}
.perTitle{
    padding:10px 25px 10px;
    background:#eee;
}
.perTitle img{
    width:22px;
    margin-right:10px;
}
.perOrder ul{
    padding:0 30px;
    margin:0;
}
.perOrder li{
    list-style:none;
    padding-top:10px;
    font-size:14px;
    color:#555;
}
.rpic img{
    width:100%;
}
.rcontent p{
    margin:0;
    padding:5px 20px 0;
    font-size:14px;
}
.rdate{
    margin:0;
    font-size:14px;
    display:flex;
    justify-content:space-between;
    padding-left:20px;
}
.rdate p{
    padding:0;
}
</style>