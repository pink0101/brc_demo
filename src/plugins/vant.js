import Vue from 'vue'
import {
  NavBar,
  Toast,
  Icon,
  Image as VanImage,
  DatetimePicker,
  Switch
} from 'vant'

import 'vant/lib/index.css'
Vue.use(Toast)
  .use(NavBar) 
  .use(Icon) 
  .use(VanImage) 
  .use(DatetimePicker) 
  .use(Switch) 

