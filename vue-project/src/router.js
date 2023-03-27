import { createRouter, createWebHistory } from 'vue-router'

import Form from "./Form.vue";
import Contact from "./Contact.vue";


const routes = [{
    path: '/form',
    name: 'form',
    component: Form
},
{
    path: '/',
    name: 'contact',
    component: Contact
}
];

const router = createRouter({ history: createWebHistory(), routes});

export default router