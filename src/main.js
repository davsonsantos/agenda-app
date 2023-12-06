import './axios';
import App from './App.vue'
import { createApp } from 'vue';
import vuetify from '@/plugins/vuetify';
import router from '@/router';
import pinia from '@/store';
import { useMe } from '@/store/me';

const app = createApp(App)

app.use(pinia);
const meStore = useMe();
await meStore.getMe()
    .catch(() => { })
    .finally(() => {
        app.use(vuetify)
        app.use(router)
        app.mount('#app')
    });

//assim funciona
// import { registerPlugins } from '@/plugins'
// import App from './App.vue'
// import { createApp } from 'vue'

// const app = createApp(App)

// registerPlugins(app)

// app.mount('#app')
