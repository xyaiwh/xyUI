<template>
  <div class="director director-prev" v-if="dir === 'prev'">
      <a 
        href="javascript:;"
        @click="dirClick('prev')"
      >&lt;</a>
  </div>
  <div class="director director-next" v-else-if="dir === 'next'">
      <a 
        href="javascript:;"
        @click="dirClick('next')"
      >&gt;</a>
  </div>
</template>

<script>
export default {
    name: 'Director',
    props:{
        dir: String
    },
    methods:{
        dirClick(dir){
            this.$emit('dirClick', dir)
        }
    }
}
</script>

<style lang="less" scoped>
    .director{
        position: absolute;
        &.director-prev{
            left: 2%;
            top: 50%;
            transform: translateY(-50%);
        };
        &.director-next{
            left: 90%;
            top: 50%;
            transform: translateY(-50%);
        };
        a{
            display: inline-block;
            width: 35px;
            height: 35px;
            font-size: 18px;
            text-align: center;
            line-height: 33px;
            border-radius: 50%;
            background-color: rgba(0, 0, 0, .2);
            color: #fff;
            text-decoration: none;
            &:hover{
                background-color: rgba(0, 0, 0, .4);
            }
        }
    }
</style>