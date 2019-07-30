<template>
    <div>
        <div id="demo" class="carousel" data-ride="carousel">
            <!-- 1.所有轮播图片 -->
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="w-100" src="../assets/carousel01.jpg" alt=""/>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="../assets/carousel02.jpg" alt=""/>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="../assets/carousel01.jpg" alt=""/>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="../assets/carousel02.jpg" alt=""/>
                </div>
            </div>
            <!-- 2.左右箭头 -->
            <a data-slide="prev" class="carousel-control-prev" href="#demo">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a data-slide="next" class="carousel-control-next" href="#demo">
                <span class="carousel-control-next-icon"></span>
            </a>
            <!-- 3.轮播指示器 -->
            <ol class="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                <li data-target="#carousel-example-generic" data-slide-to="3"></li>
            </ol>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .carousel-control-prev,
        .carousel-control-next{
            width:2%;
            height: 10%;
            background:#aaa;
            border-radius: 0.25rem;
            top:40%;
        }
        .carousel-indicators li{
            width: 5px;
            height: 0rem;
            background: #fff;
            border-radius: 50%;
            margin:0 4px;
        }
        .carousel-indicators li:hover{
            cursor: pointer;
        }
        .carousel-indicators .active{
            background:#0aa1ed;
        }
</style>
