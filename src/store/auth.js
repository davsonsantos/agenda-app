import { defineStore } from "pinia";
import axios from "axios";

/**
 * Auth store for managing user authentication
 */
export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: null
    }),
    actions: {
        /**
         * Retrieve CSRF token cookie
         * @returns {Promise} Promise object represents the CSRF token cookie
         */
        sanctum() {
            return axios.get("/sanctum/csrf-cookie")
        },
        /**
         * Login user
         * @param {string} email - User's email
         * @param {string} password - User's password
         * @returns {Promise} Promise object represents the login response
         */
        login(email, password) {
            return axios.post("/api/login", {
                email,
                password
            }).then((response) => {
                console.log(response);
                this.user = response.data.data;
            })
        }
    },
    getters: {
        isLoggedIn: (state) => !!state?.user?.id
    }
})