<template>
    <div>
        <div class="foot row">
            <div class="col-lg-4 col-md-4 col-sm-12 foot-left">
                <p>国内客服电话</p>
                <h2>400-123-1234</h2>
                <p>海外及港澳台客服电话</p>
                <h2>0086-123-456789</h2>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 row">
                <div class="app col-lg-6 col-md-6 col-sm-12">
                    <p>下载APP</p>
                    <img class=" img-fluid" src="../assets/app.png">
                </div>
                <div class="wx col-lg-6 col-md-12 col-sm-12">
                    <p>微信小程序</p>
                    <img class=" img-fluid" src="../assets/wx.png">
                </div>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12">
                <div class="row foot-right">
                    <div class="col-lg-6">
                        <a class="d-block" href="#">我是房客</a>
                        <a class="d-block" href="#">关于途家</a>
                        <a class="d-block" href="#">隐私政策</a>
                    </div>
                    <div class="col-lg-6">
                        <a class="d-block" href="#">加入途家</a>
                        <a class="d-block" href="#">用户协议</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.foot{
    padding:50px 100px 20px 100px;
    background:#f7f7f7;
}
.foot-left{
    font-size: 14px;
    margin-bottom: 9px;
}
.foot-left h2{
    font-size: 22px;
    font-family: Tahoma;
    line-height: 1em;
}
.app img{
    border:5px solid #fff;
}
.wx img{
    border:5px solid #fff;
}
.foot-right{
    padding:0 20px 0 0;
}
.foot-right a{
    color:#333;
    font-size:14px;
    margin-bottom:20px;
}
</style>