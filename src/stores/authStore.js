import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from "axios";

export const useAuthStore = defineStore('auth', () => {
    const isLoggedIn = ref(!!localStorage.getItem('authToken'))

    const login = (email, password) => {
        const storedEmail = localStorage.getItem('userEmail');
        const storedPassword = localStorage.getItem('userPassword');
        if (storedEmail === email && storedPassword === password) {
            axios.post('https://reqres.in/api/login', { email, password })
                .then(response => {
                    if (response.data.token) {
                        console.log('Login successful.');
                        localStorage.setItem('authToken', response.data.token);
                        isLoggedIn.value = true;
                    } else {
                        console.error('Login failed:', response.data.token);
                    }
                })
                .catch((error) => {
                    console.error('Login error:', error);
                    loginSuccess.value = false;
                });
        }
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        isLoggedIn.value = false;
    };

    const signup = (email, password) => {
        axios.post('https://reqres.in/api/register', {email, password})
            .then(response => {
                console.log(response.data.token)
                if (response.data.token) {
                    localStorage.setItem('userEmail', email);
                    localStorage.setItem('userPassword', password);
                    localStorage.setItem('authToken', response.data.token);
                    isLoggedIn.value = true;
                    console.log('Signup successful and email saved.');
                } else {
                    console.error('Signup failed:', response.data);
                }
            })
            .catch((error) => {
                console.error('Signup error:', error);
            });
    };

    return { isLoggedIn, login, logout, signup };
});