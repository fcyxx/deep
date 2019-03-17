<template>
  <div class="index">
     <Cheader :title="title"></Cheader>
     <div class="carCon" v-for="(item,index) in list" :key="index">
       <div class="cartitle">
          {{item.header.titleA}}
       </div>
       <div class="cartime">
          {{item.header.time}}
       </div>
       <div class="cartitlecon">
         {{item.header.content}}
       </div>
       <div class="picdetail" v-for="(pic,index) in piccon" :key="index">
          <div class="carpic">
            <img :src="pic.src" alt="汽车">
          </div>
          <div class="cardetail">
            {{pic.detail}}
          </div>
       </div>
     </div>
  </div>
</template>

<script>
import Cheader from './header';
export default {
  name: 'index',
  props: {},
  data() {
    return {
      input: '',
      title: '消息详情',
      list: [
          {
            "header":{
                'titleA':"省钱还不会被骗，买车必须谨记的5个小窍门",
                'time': "2018-05-23  20:36",
                'content':"近年来买车已经成为了一种趋势，尤其对于年轻人来说，到了一定的阶段就需要考虑买车了。那么买车的时候我们注意些什么呢？有哪些买车的小窍门呢？如果你也不知道，就跟过来一起来看看吧！",
            } 
          }
      ],
      piccon: [
                {
                  'src': "https://techcrunch.com/wp-content/uploads/2019/03/GettyImages-1130590361.jpg?w=600&h=347&crop=1",
                  'detail': "一、货比三家。买车对我们来说是一件大事，所以我们有了买车的想法之后，不要上来就直接购买，最好先从网上、论坛多了解一下相关的情况。经过多方了解之后我们再去门店询问价格。当然如果有促销活动的话，那我们也不妨多了解一下，这样考虑全面之后，我们在进行选择。二、先看优惠再砍价。买车时怎么砍价也是有学问的，尤其是我们在购买进口车的时候，一般车商都会给我们一些优惠，比如说给我们八折优惠，一般这已经就是底线了，所以在砍价的时候砍到差不多这个幅度就可以了，如果还想再优惠的话，就比较困难了。",
                },
                {
                  'src': "https://tse1-mm.cn.bing.net/th?id=OIP.TuomDBnLRoe0OPx1o7GA3AHaEo&w=300&h=187&c=7&o=5&pid=1.7",
                  'detail': "一、货比三家。买车对我们来说是一件大事，所以我们有了买车的想法之后，不要上来就直接购买，最好先从网上、论坛多了解一下相关的情况。经过多方了解之后我们再去门店询问价格。当然如果有促销活动的话，那我们也不妨多了解一下，这样考虑全面之后，我们在进行选择。二、先看优惠再砍价。买车时怎么砍价也是有学问的，尤其是我们在购买进口车的时候，一般车商都会给我们一些优惠，比如说给我们八折优惠，一般这已经就是底线了，所以在砍价的时候砍到差不多这个幅度就可以了，如果还想再优惠的话，就比较困难了。",
                
                },
                {
                  'src': "data:image/jpeg;base64,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",
                  'detail': "一、货比三家。买车对我们来说是一件大事，所以我们有了买车的想法之后，不要上来就直接购买，最好先从网上、论坛多了解一下相关的情况。经过多方了解之后我们再去门店询问价格。当然如果有促销活动的话，那我们也不妨多了解一下，这样考虑全面之后，我们在进行选择。二、先看优惠再砍价。买车时怎么砍价也是有学问的，尤其是我们在购买进口车的时候，一般车商都会给我们一些优惠，比如说给我们八折优惠，一般这已经就是底线了，所以在砍价的时候砍到差不多这个幅度就可以了，如果还想再优惠的话，就比较困难了。",
                
                },
                {
                  'src': "https://tse1-mm.cn.bing.net/th?id=OIP.xw__pjLxtfXlyQRlVASCPQHaEo&w=296&h=184&c=7&o=5&pid=1.7",
                  'detail': "一、货比三家。买车对我们来说是一件大事，所以我们有了买车的想法之后，不要上来就直接购买，最好先从网上、论坛多了解一下相关的情况。经过多方了解之后我们再去门店询问价格。当然如果有促销活动的话，那我们也不妨多了解一下，这样考虑全面之后，我们在进行选择。二、先看优惠再砍价。买车时怎么砍价也是有学问的，尤其是我们在购买进口车的时候，一般车商都会给我们一些优惠，比如说给我们八折优惠，一般这已经就是底线了，所以在砍价的时候砍到差不多这个幅度就可以了，如果还想再优惠的话，就比较困难了。",
                
                }
        ],
        
    }
  },
  components: {
    Cheader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">  
  .carCon{
    width: auto;
    margin:px2rem(123) px2rem(30) 0 px2rem(30);
    .cartitle{
      font-family: PingFang-SC-Bold;
      font-size: px2rem(34);
      font-weight: normal;
      font-stretch: normal;
      line-height: px2rem(48);
      letter-spacing: 0px;
      color: #333333;
    }
    .cartime{
      margin-top: px2rem(21);
      font-family: PingFang-SC-Medium;
      font-size: px2rem(24);
      font-weight: normal;
      font-stretch: normal;
      line-height: px2rem(48);
      letter-spacing: 0px;
      color: #999999;
    }
    .cartitlecon{
      // display: -webkit-box;
      // -webkit-box-orient: vertical;
      // overflow: hidden;
      margin-top:px2rem(44);
      font-family: PingFang-SC-Medium;
      font-size: px2rem(28);
      font-weight: normal;
      font-stretch: normal;
      line-height: px2rem(42);
      letter-spacing: 0px;
      color: #333333;
    }
    .picdetail{
      // margin-bottom: px2rem(28);
      .carpic{
        margin-top: px2rem(30);
        img{
          width: auto;
          height: auto;
          max-width: 100%;
          background-size: 100% 100%;
        }
      }
      .cardetail{
        margin-top: px2rem(28);
        font-family: PingFang-SC-Medium;
        font-size: px2rem(28);
        font-weight: normal;
        font-stretch: normal;
        line-height: px2rem(42);
        letter-spacing: 0px;
        color: #333333;
      }
    }
    // .fold{
    //   -webkit-line-clamp: 3;
    // }
    // .ubfold{
    //     -webkit-line-clamp: 10;
    // }
  }
</style>
