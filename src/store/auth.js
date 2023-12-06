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
            return axios.post('api/login', {
                email, password,
            })
        },
        logout() { },
    },
    getters: {
        isLoggeddIn() {
            const meStore = useMe()
            return !!meStore.user
        }
    }
})