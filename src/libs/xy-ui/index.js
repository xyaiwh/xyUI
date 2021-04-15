import Carousel from './components/Carousel'
import CarItem from './components/Carousel/Item.vue'
import Button from './components/Button'
import XyDialog from './components/Dialog'
import XyStar from './components/Star'
import XyMagnifier from './components/Magnifier'
import XySelector from './components/Selector'

import './assets/css/iconfont.css'

let XyUI = {}

XyUI.install  = function (Vue){
    Vue.component(Carousel.name, Carousel)
    Vue.component(CarItem.name,CarItem)
    Vue.component(Button.name, Button)
    Vue.component(XyDialog.name, XyDialog)
    Vue.component(XyStar.name, XyStar)
    Vue.component(XyMagnifier.name, XyMagnifier)
    Vue.component(XySelector.name, XySelector)
}

export default XyUI