import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import { BIconArrowClockwise, BIconStar, BIconStarFill, BIconStarHalf, BIconSortNumericDown, BIconSortNumericUpAlt, BIconExclamationCircle } from 'bootstrap-icons-vue';

const app = createApp(App).use(store);

app.component('BIconArrowClockwise', BIconArrowClockwise);
app.component('BIconStar', BIconStar);
app.component('BIconStarFill', BIconStarFill);
app.component('BIconStarHalf', BIconStarHalf);
app.component('BIconSortNumericDown', BIconSortNumericDown);
app.component('BIconSortNumericUpAlt', BIconSortNumericUpAlt);
app.component('BIconExclamationCircle', BIconExclamationCircle);

app.mount('#app')