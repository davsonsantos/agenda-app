import { defineStore } from 'pinia';
import axios from 'axios'
import { useMeStore } from '@/store/me';

/**
 * Auth store for managing user authentication
 */
export const useAuthStore = defineStore("auth", {
    state: () => ({}),
    actions: {
        sanctum() {
            return axios.get('sanctum/csrf-cookie')
        },
        login(email, password) {
            return axios.post('api/login', {
                email,
                password
            }).then((response) => {
                const meStore = useMeStore();
                meStore.user = response.data.data
            })
        },
    },

})