<template>
  <div class="xy-magnifier" :style="{width: imgWidth+'px',height: imgHeight + 'px'}">
      <img 
        :src="require(`../../../../assets/images/${imgSrc}`)"
        class="img-static" 
        :style="{
            width: imgWidth + 'px'
        }"
      >
      <a 
        href="javascript:;"
        class="mag-wap"
        :style="{
            width: magWidth + 'px',
            height: magHeight + 'px',
            borderRadius: radiusStyle ==='circle' ? '50%':'5px'
        }"
      >
          <img 
            :src="require(`../../../../assets/images/${imgSrc}`)" 
            alt=""
            class="img-copy"
            :style="{
              width: imgWidth + 'px'
            }"
          >
      </a>
  </div>
</template>

<script>
export default {
    name: 'xyMagnifier',
    props: {
        imgSrc: {
            type: String,
            default: ''
        },
        imgWidth: {
            type: Number,
            default: 300
        },
        imgHeight: {
            type: Number,
            default: 300
        },
        magWidth: {
            type: Number,
            default: 100
        },
        magHeight: {
            type: Number,
            default: 100
        },
        radiusStyle: {
            type: String,
            default: 'circle'
        }
    },
    data() {
        return {
            oImgWap: null,
            oMagWap: null,
            oImgCopy: null,
            imgWapWidth: 0,
            imgWapHeight: 0,
            magWapWidth: 0,
            magWapHeight: 0,
            imgX: 0,
            imgY: 0
        }
    },
    mounted(){
        this.init()
    },
    methods: {
       getStyle(el, type){
           return parseInt(window.getComputedStyle(el, null)[type]);
       },
       handleMousemove(e){
           this.oMagWap.style.left = (e.pageX - this.imgX - this.magWapWidth/2) + 'px' ;
           this.oMagWap.style.top = (e.pageY - this.imgY - this.magWapHeight/2) + 'px';
           this.oImgCopy.style.left = -(e.pageX - this.imgX - this.magWapWidth/2) + 'px';
           this.oImgCopy.style.top = -(e.pageY - this.imgY - this.magWapHeight/2) + 'px';
           if(e.pageX < this.imgX || e.pageX > (this.imgX + this.imgWapWidth) || e.pageY < this.imgY || e.pageY > (this.imgY + this.imgWapHeight)){
               this.oMagWap.className = 'mag-wap'
           }
       },
       init(){
            this.oImgWap = this.$el,
            this.oMagWap = this.oImgWap.querySelector('.mag-wap'),
            this.oImgCopy = this.oImgWap.querySelector('.img-copy'),
            this.imgWapWidth = this.getStyle(this.oImgWap, 'width'),
            this.imgWapHeight = this.getStyle(this.oImgWap, 'height'),
            this.magWapWidth = this.getStyle(this.oMagWap, 'width'),
            this.magWapHeight = this.getStyle(this.oMagWap, 'height'),
            this.imgX = this.oImgWap.offsetLeft,
            this.imgY = this.oImgWap.offsetTop;
            
            this.oImgWap.addEventListener('mouseover', ()=>{
                this.oMagWap.className = 'mag-wap show'
                this.oImgWap.addEventListener('mousemove', this.handleMousemove, false)
            },false)
       }
    },
}
</script>

<style lang="less">
    .xy-magnifier{
        position: relative;
        box-shadow: 0 0 5px #999;
        box-sizing: border-box;
        border-radius: 5px;
        // overflow: hidden;
        .mag-wap{
            display: none;
            width: 100px;
            height: 100px;
            position: absolute;
            top: 0;
            left: 0;
            background-color: #fff;
            box-shadow: 0 0 3px #000;
            overflow: hidden;
            cursor: move;
            
            .img-copy {
                position: absolute;
                left: 0;
                top: 0;
            }

            &.show{
                display: block;
                transform: scale(1.5);
            }
        }
        
    }
</style>