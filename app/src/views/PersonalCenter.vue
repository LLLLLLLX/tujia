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
                    <div class="perOrder">
                        <img src="../assets/dingdan.png" alt="">
                        <span>我的订单</span>
                        <ul>
                            <li>订单管理</li>
                            <li>点评管理</li>
                        </ul>
                    </div>
                    <div class="perOrder">
                        <img src="../assets/dingdan.png" alt="">
                        <span>我的资产</span>
                        <ul>
                            <li>账户余额</li>
                            <li>收款账号</li>
                            <li>我的途游卡</li>
                            <li>我的红包</li>
                            <li>我的积分</li>
                        </ul>
                    </div>  
                    <div class="perOrder">
                        <img src="../assets/dingdan.png" alt="">
                        <span>个人中心</span>
                        <ul>
                            <li>个人资料</li>
                            <li>修改密码</li>
                            <li>我的收藏</li>
                        </ul>
                    </div>
                </div>
            </el-col>
            <el-col :span="19">
                <div class="perRight">22</div>
            </el-col>
        </el-row>
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.PersonalCenter{
    padding:20px 150px;
}
.perLeft{
    background:#ddd;
}
.perRight{
    background:#999;
}
.perInfo{
    padding:15px 25px;
}
.perInfo p{
    font-size:14px;
    color:#007bff;
    margin-bottom:5px;
}
.perOrder{
    padding:15px 25px 0;
}
.perOrder img{
    width:22px;
    margin-right:10px;
}
.perOrder ul{
    padding:0 30px;
    margin:0;
}
.perOrder li{
    list-style:none;
    margin-top:10px;
    font-size:14px;
    color:#555;
}
</style>