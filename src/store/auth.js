import axios from "axios";
import { useMe } from "@/store/me";
import { defineStore } from "pinia";

export const useAuth = defineStore('auth', {
    state: () => ({}),

    actions: {

        sanctum() {
            return axios.get('sanctum/csrf-cookie');
        },
        login(email, password) {
            const meStore = useMe()
            return axios.post('api/login', {
                email, password,
            }).then(r => {
                meStore.user = r.data.data
            })
        },
        logout() {
            const meStore = useMe()
            return axios.post('api/logout').then(() => {
                meStore.user = null
            })
        }
    },
    getters: {
        isLoggeddIn() {
            const meStore = useMe()
            return !!meStore.user
        }
    }
})