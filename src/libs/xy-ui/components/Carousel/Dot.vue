<template>
  <div class="dot-wapper" v-if="hasDot">
      <div class="dot-item" v-for="item in itemLen" :key="item">
          <a 
            href="javascript:;"
            :style="{backgroundColor: (item - 1) === currentIndex? bgColor : '#fff'}"
            @click="dotClick(item-1)"
          >
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name: 'CarDot',
    props:{
        itemLen: Number,
        currentIndex: Number,
        bgColor: {
            type: String,
            default: '#ff5000'
        },
        hasDot: {
            type: Boolean,
            default: true
        }
    },
    mounted(){
        
    },
    methods:{
        dotClick(index){
            this.$emit('dotClick',index);
        }
    }
}
</script>

<style lang="less" scoped>
    .dot-wapper{
        position: absolute;
        top: 90%;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        .dot-item{
            margin-left: 10px;
        }
    }

    a{  
        display: block;
        float: left;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        text-decoration: none;
    }
</style>