<template>
  <div class="mask" v-if="visible">
    <div 
        class="dialog"
        :style="{
            width: width + 'px',
            borderRadius: borderRadius + 'px',
            marginLeft: - width/2 + 'px',
            marginTop: position? '' : '50px'
        }"
    > 
        <header>
            <div class="dialog-header" :style="{textAlign: titilePosition}">
                <h1 class="titleText">{{titleText}}</h1>
                <a 
                    href="javascript:;"
                    @click="closeClick"
                >
                ×
                </a>
            </div>
        </header>
        <article>
            <div class="dialog-content">
                    <slot></slot>
            </div>
        </article>
        <footer>
            <div class="dialog-btn-group" v-if="$slots.footer">
                <slot name="footer"></slot>
            </div>
            <div class="dialog-btn-group" v-else>
                <xy-button class="close" @click="closeClick">{{closeText}}</xy-button>
                <xy-button btnStyle="primary" class="comfirm" @click="comfirmClick">{{comfirmText}}</xy-button>
            </div>
        </footer>
    </div>
  </div>
</template>

<script>
//         :titleText="titleText"
//         :visible.sync="dialogVisible"
//         :width="500"
//         :borderRadius="10"
//         :btnGroupShow="btnGroupShow"
//         comfirmText="确定"
//         closeText="取消"
export default {
    name: 'XyDialog',
    props: {
        titleText: {
            type: String,
            default: '提示'
        },
        visible: {
            type: Boolean,
            default: false
        },
        width: {
            type: Number,
            default: 400
        },
        borderRadius: {
            type: Number,
            default: 10
        },
        btnGroupShow: {
            type: Boolean,
            default: true
        },
        comfirmText: {
            type: String,
            default: '确定'
        },
        closeText: {
            type: String,
            default: '取消'
        },
        titilePosition: {
            type: String,
            default: 'left'
        },
        position: String

    },
    data() {
        return {}
    },
    mounted(){
    },
    methods:{
        comfirmClick(){
            this.$emit("update:visible", false);
            this.$emit("comfirm");
        },
        closeClick(){
            this.$emit("update:visible", false);
            this.$emit("close");
        }
    }
}
</script>

<style lang="less" scoped>
    .dialog {
        position: fixed;
        top: 0;
        left: 50%;
        overflow: hidden;
        background-color: #fff;
        user-select: none;
        .dialog-header {
            height: 44px;
            line-height: 44px;
            color: #000;
            
            h1 {
                display: inline-block;
                padding-left: 20px;
                font-size: 18px;
                font-weight: normal;
            }
            a {
                float: right;
                color: #606266;
                padding-right: 10px;
                font-size: 18px;
            }
        }
        .dialog-content{
            min-height: 100px;
            padding: 30px 20px;
            color: #606266;
            font-size: 14px;
        }
        .dialog-btn-group{
            text-align: right;
            padding: 10px 20px 20px;
            box-sizing: border-box;
        }
    }
    .mask{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        background-color: rgba(0, 0, 0, .3);
    }


    h1,p {
        margin: 0;
    }
    a {
        text-decoration: none;
        color: #000
    }
</style>