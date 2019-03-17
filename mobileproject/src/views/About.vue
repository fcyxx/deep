<template>
  <div class="carcalc">
    <Carheader :title="title"></Carheader>
    <div class="content">
      <Slideout menu="#menu" panel="#panel" :toggleSelectors="['.toggle-button']" @on-open="open">
        <nav id="menu">Menu</nav>
        <main id="panel">
          <header>
            ☰
            Panel
          </header>
        </main>
      </Slideout>
    </div>
    <!-- <div class="daskDiv">
          <div class="dask" @click="cleardask">
             <div class="carightdask">
                123123
              </div>
          </div>
         
    </div>-->
  </div>
</template>
<script>
import Carheader from "../components/header.vue";
import Slideout from "vue-slideout";
export default {
  name: "carcalc",
  data() {
    return {
      title: "购车计算器"
    };
  },
  components: {
    Carheader,
    Slideout
  },
  methods: {
    open: function() {
      console.log("slideoutOpen");
    }
    // maskclick (){
    //   console.log($('body'));
    //   let Dheight = $('body')[0].clientHeight;
    //   $('.dask').css({
    //     'height': Dheight
    //   })
    //   $('i').css({
    //     'display': 'none'
    //   })
    //    $('.carightdask').css({
    //      'display': 'block',
    //     'height': Dheight
    //   })
    // },
    // cleardask() {
    //     $('.daskDiv').css({
    //       'display':'none'
    //     })
    //     $('i').css({
    //       'display': 'block'
    //     })
    // }
  },
  mounted() {
    //   let Cheight =(window.document.body.offsetHeight - $('header')[0].offsetHeight - $('header')[0].offsetHeight)
    // console.log(Cheight)
    // let Mtop = $('.end')[0].offsetHeight;
    // console.log(Mtop)
  }
};
</script>

<style lang="scss" scoped>
.content {
  margin: px2rem(86) auto;
  i {
    font-size: px2rem(46);
    float: right;
  }
}
.slideout-menu {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
  width: 256px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  display: none;
}

.slideout-panel {
  position: relative;
  z-index: 1;
}

.slideout-open,
.slideout-open body,
.slideout-open .slideout-panel {
  overflow: hidden;
}

.slideout-open .slideout-menu {
  display: block;
}
// .daskDiv{
//     position: relative;
//     z-index: 100;
//     .dask{
//       width: 100%;
//       // height: px2rem(750) - px2rem(86);
//       background-color: #666;
//       filter: Alpha(opacity=60);
//       opacity: 0.6;
//       // z-index: 9999;
//     }
//     .carightdask{
//       width: 50%;
//       display:none;
//       position:absolute;
//       background-color: #fff;
//       z-index: 99999;
//       float: right;
//       right: 0;
//     }
//   }
</style>
