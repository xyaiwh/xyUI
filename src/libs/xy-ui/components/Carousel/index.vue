<template>
  <div class="Carousel" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
      <div class="inner" >
          <slot></slot>
          <car-dot
            :itemLen="itemLen"
            :currentIndex="currentIndex"
            @dotClick="dotClick"
          />
          <div class="dirctor-nav" v-if="isShowDirctor">
            <director 
              dir="prev"
              @dirClick="dirClick"
            />
            <director 
              dir="next"
              @dirClick="dirClick"
            />
          </div>
      </div>
  </div>
</template>

<script>
import CarDot from './Dot';
import Director from './Director'
export default {
    name: 'Carousel',
    components:{
      CarDot,
      Director
    },
    props:{
      autoPlay:{
        type: Boolean,
        default: true
      },
      duration:{
        type: Number,
        default: 3000
      },
      hasDot:{
        type: Boolean,
        default: true
      },
      hasDirector:{
        type: Boolean,
        default: true
      }
    },
    data(){
      return{
        currentIndex: 0,
        t: null,
        dir: 'next',
        itemLen: this.$slots.default.length,
        isShowDirctor: false
      }
    },

    mounted(){
     this.autoPlayCarousel();
    },

    beforeDestroy(){
      this._clearInterval()
    },

    methods: {
      autoPlayCarousel(){
        if(this.autoPlay){
          this.t = setInterval(()=>{
            this.setCurrentIndex(this.dir)
          },this.duration)
        }
      },
      setCurrentIndex(dir){
        switch (dir) {
          case 'next':
            this.currentIndex += 1
            if(this.currentIndex === this.$slots.default.length){
              this.currentIndex = 0;
            }
            break;
          case "prev":
            this.currentIndex -= 1;
            if(this.currentIndex === -1){
              this.currentIndex = this.$slots.default.length - 1
            }
            break;
          default:
            break;
        }
      },
      dotClick(index){
        if((this.currentIndex === this.$slots.default.length - 1 && index === 0) ){
          this.dir = 'next'
        }else if((this.currentIndex === 0 && index === this.$slots.default.length - 1)){
          this.dir = 'prev'
        }else if( index > this.currentIndex ){
          this.dir = 'next'
        }else if( index < this.currentIndex ){
          this.dir = 'prev'
        }
        this.currentIndex = index
        
      },
      mouseEnter(){
        this.isShowDirctor = true;
        this._clearInterval()
      },
      mouseLeave(){
        this.dir = 'next'
        this.isShowDirctor = false;
        this.autoPlayCarousel()
      },
      _clearInterval(){
        clearInterval(this.t);
        this.t = null
      },
      dirClick(dir){
        this.dir = dir;
        this.setCurrentIndex(dir);
      }
    },

}
</script>

<style lang="less" scoped>
  .Carousel{
    width: 100%;
    height: 100%;
    .inner{
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
      // overflow: hidden;
    }
  }
</style>