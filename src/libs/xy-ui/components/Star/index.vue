<template>
  <div class="xy-star">
      <span
        v-for="num in 5"
        :key="num"
        :class="[
            num <= starNum ? 'iconfont icon-star-active' : 'iconfont icon-star'
        ]"
        :style="{ fontSize: size +'px' }"
        @click="starClick(num, $event)"
      >
      </span>
  </div>
</template>

<script>
export default {
    name: 'xyStar',
    props: {
        size: {
            type: Number,
            default: 30
        }
    },
    data() {
        return {
            starNum: 0
        }
    },
    methods: {
        starClick(num, e){
            if(e.target.className === 'iconfont icon-star-active' && this.starNum === num){
                this.starNum -= 1;
            }else{
                this.starNum = num
            }
            this.$emit('click', this.starNum)
        }
    }
}
</script>

<style lang="less" scoped>
// @font-face {font-family: "iconfont";
//   src: url('//at.alicdn.com/t/font_2483388_8xlhjv056vf.eot?t=1618290861871'); /* IE9 */
//   src: url('//at.alicdn.com/t/font_2483388_8xlhjv056vf.eot?t=1618290861871#iefix') format('embedded-opentype'), /* IE6-IE8 */
//   url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAANMAAsAAAAAB0wAAAL/AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgqCMIIUATYCJAMMCwgABCAFhG0HPBtgBiMRtmoPcpH94yA3y1ymtac97X19yRF2S/Rz8DzW/XtukjfNl7AsTK7aHVeAJwA2N/ulalSEYUrO8376jnQsIOTXH/dTfwot8tlsLhlxHgk4wYF24JpsAxmQbxleuxgO4zwE8CaeXKRq9bpNsRjwNAGkb68enbApM6amVrAITslagyzEg1Wz1F1ggf99eUOxWFB4NHhuw+7VulLx5YhXgXqiO5G2LoJkPCcgbQIN5AIGpH2puyU6TOei8TbUpr7UwSCosWKu64tNrbPSP54CccDVvgBkglFxUhLGg8CrQBFQAK11wmxLIGYMkKF7CSo9Nrzf7OXhzZsu3R6+fHVEm+bO4hUrIrq0WDMnqlmnbVHLVoY2bYWCy5b2m93AuXV3jBLckNGljYS0Uq6TRq4KXdp5Tliz5ssjWjQfZF5q02bLQpu2WOFmeRpW/jyB7MnBS7sO9JKV43v5QveK9R9O9k0b9X1ixkRHEDyspFJWxa5XLuT6RnUcWrURbgXb5eO0T9PsM5Ufe/XWvcMp/pkj1cTMiSAAR8rhe9lH5MWk/Jnqdc92udEv/U3C7i07nyZ9nmDud3nQXz1N3rpjTULG69ILu9ARAPeBPq7zwT2jr+oKv+A35Dy5W9whoOw362MAeLSm1j4/6J4xtPOCPUGPwAuXtOwypgxbtNHFTGx7NcU9nQpAKPtwwf5gnvTXhrWuBsESFoOiDHGgsaSihswFDz6URhwse6sGb3KoAZt9CGEwGjFeQDbTEAiBHACFPxdAE8g91JCPwUM478AhUDR401xC9vQhXQ4GUYVQMhpQfwh6qZbaWAS1N3TvLCkp85kvpD3EYGj7bO6KFWmMBfvHjcwWLC0FZnQZ5rzASktEza1nXqeus2VvavVSDoIqhJLRgPpD0Eu17mAWuc/f0L2zpJq6Bv8LaQ/Dw9D2LdCruraqu5Zr9o8bmS1YWgrMyImZpBdYy0dF1Nz6Hsl16rh+tq26nV9bHqBIagIfp0WJFoPPEJbUSM3hg5fYdDgAAA==') format('woff2'),
//   url('//at.alicdn.com/t/font_2483388_8xlhjv056vf.woff?t=1618290861871') format('woff'),
//   url('//at.alicdn.com/t/font_2483388_8xlhjv056vf.ttf?t=1618290861871') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
//   url('//at.alicdn.com/t/font_2483388_8xlhjv056vf.svg?t=1618290861871#iconfont') format('svg'); /* iOS 4.1- */
// }

// .iconfont {
//   font-family: "iconfont" !important;
//   font-size: 16px;
//   font-style: normal;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   color: #999;
//   cursor: pointer;

//   transition: all .3s;

//   &.icon-star-active{
//       color: #FBAB06;
//   }
// }



// .icon-star-active:before {
//   content: "\e877";
// }

// .icon-star:before {
//   content: "\e910";
// }




</style>