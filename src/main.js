import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import { BIconStar, BIconStarFill, BIconStarHalf, BIconSortNumericDown, BIconSortNumericUpAlt } from 'bootstrap-icons-vue';

const app = createApp(App).use(store);

app.component('BIconStar', BIconStar);
app.component('BIconStarFill', BIconStarFill);
app.component('BIconStarHalf', BIconStarHalf);
app.component('BIconSortNumericDown', BIconSortNumericDown);
app.component('BIconSortNumericUpAlt', BIconSortNumericUpAlt);

app.mount('#app')
