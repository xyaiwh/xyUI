<template>
      <div class="select-menu hide" :style="{height: finalMenuData.length*39 + 'px'}">
        <ul v-if="finalMenuData.length > 0">
            <li
                v-for="(menuItem,index) of finalMenuData"
                :key="index"
            >
                {{menuItem.text}}
            </li>
        </ul>
        <div v-else>
            <no-date-tip />
        </div>
    </div>
</template>

<script>

import NoDateTip from './NoDateTip.vue'
export default {
    name: 'xySelectMenu',
    components:{
        NoDateTip
    },
    props: {
        menuData: {
            type: Array,
            default(){
                return []
            }
        },
        searchValue: {
            type: String,
            default: ''
        }
    },

    computed: {
        finalMenuData(){
            return this.menuData.filter(item => {
                return item.text.toLowerCase().includes(this.searchValue.toLowerCase())
              }
            )
        }
    }
}
</script>

<style lang="less">
    @fadeIn: 'showMenu';
    @fadeOut: 'hideMenu';
    .select-menu{
        display: none;
        position: absolute;
        margin-top: 3px;
        width: 100%;
        height: 100%;
        ul{
            border: 1px solid #aaa;
            border-radius: 5px;
            li{
                text-align:center;
                padding: 10px 0;
                cursor: pointer;
                color: #606266;
                font-size: 14px;
                &:hover{
                    background-color: #f5f7fa;
                }
            }
        }
        &.show{
            display: block;
            animation: @fadeOut 1s;
        }
    }
    ul,li{
        margin: 0;
        padding: 0;
        list-style: none;
    }

    @keyframes @fadeOut {
        0% {
            opacity: 0;
        }
        
        100% {
            opacity: 1;
        }
    }
    

</style>