import { defineStore } from 'pinia';
export const useAuth = defineStore('auth', () => {
    const isLoggedIn = ref(false);
    function login() {
        isLoggedIn.value = true
    }
    function logout() {
        isLoggedIn.value = false
    }
    return { isLoggedIn, login, logout };
});