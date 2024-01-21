import { defineStore } from "pinia";
import axios from "axios";
// import { useMeStore } from "@/store/me";


export const useMeStore = defineStore('me', {
    state: () => ({
        user: null
    }),
    actions: {
        getMe() {
            return axios.get('api/me')
                .then((response) => {
                    this.user = response.data.data
                })
        }
    },
    getters: {
        isLoggedIn: (state) => !!state?.user?.id
    }
})