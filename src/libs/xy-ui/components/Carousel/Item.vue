<template>
  <transition
    :enter-class="`v-enter-${dir}`"
    :enter-to-class="`v-enter-to-${dir}`"
    :leave-class="`v-leave-${dir}`"
    v-on:before-leave="beforeLeave"
  >
    <div class="car-item" v-if="selfIndex === currentIndex">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "carItem",
  data() {
    return {
      selfIndex: this.$vnode.key,
    };
  },
  mounted() {},
  methods:{
    beforeLeave(e){
      e.className = `car-item v-leave-active v-leave-to-${this.dir}`
    }
  },
  computed: {
    currentIndex: function () {
      return this.$parent.currentIndex;
    },
    dir: function (){
      return this.$parent.dir
    }
  },
};
</script>

<style lang="less">
.car-item {
  width: 100%;
  height: 100%;
  position: absolute;
}
.car-item img {
  width: 100%;
  height: 100%;
}
.v-leave-active,
.v-enter-active {
  transition: all .5s linear;
}

.v-enter-next {
  transform: translateX(100%);
}
.v-enter-prev {
  transform: translateX(-100%);
}

.v-enter-to-next,
.v-enter-to-prev {
  transform: translateX(0);
}

.v-leave-next,
.v-leave-prev {
  transform: translateX(0);
}

.v-leave-to-next {
  transform: translateX(-100%);
}
.v-leave-to-prev {
  transform: translateX(100%);
}
</style>