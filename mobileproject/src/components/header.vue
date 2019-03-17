<template>
    <header>
        <div class="header_c">
            <div class="left">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div class="content">
                {{titleL}}
            </div>
            <div class="right">{{rightR}}</div>
        </div>
    </header>
</template>

<script>
export default {
  components:{},
  props:['title','right'],
  data(){
    return {
        titleL: this.title,
        rightR: this.right
    }
  },
  watch:{},
  computed:{},
  methods:{},
  mounted(){}
}
</script>
<style lang="scss" scoped>
header{
    width: 100%;
    height: px2rem(86);
    background-color: #e5e5e5;
    /* 固定到顶部*/
    position:fixed;
    left: 0;
    right: 0;
    top:0;
    z-index: 999;
    border-bottom: px2rem(1) solid #e6e6e6;
    .header_c{
        margin: 0 px2rem(30) 0 px2rem(30);
        width: auto;
        height: px2rem(86);
        line-height: px2rem(86);
        display: flex;
        .left,.right{
            width: px2rem(86);
            height: auto;
        }
        .left>i{
            font-size: px2rem(34);
        }
        .content{
            flex:1;
            font-size: px2rem(34);
            font-family: PingFang-SC-Bold;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #333333;
            text-align: center;
        }
    }
}

</style>