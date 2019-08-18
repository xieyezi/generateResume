import Vue from 'vue'
import {
    Button, 
    Dialog, 
    Form, 
    FormItem, 
    Input, 
    Message,
    // InputNumber, 
    // Select,
    // Radio,
    // RadioGroup,
    // RadioButton,
    // Option,
    // OptionGroup,
    // Col,
    // Checkbox,
    // CheckboxButton,
    // CheckboxGroup,
    DatePicker,
    TimeSelect,
    TimePicker,
} from 'element-ui'

Vue.use(Button);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(TimeSelect);
Vue.use(TimePicker);
Vue.use(DatePicker);
//Message的引入是另外一种方式
Vue.prototype.$message = Message;

import 'element-ui/lib/theme-chalk/index.css';
