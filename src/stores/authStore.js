import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
    const signupSuccess = ref(false)
    const isLoggedIn = ref(!!localStorage.getItem('authToken'))
    const loginSuccess = ref(false)

    const login = async (email, password) => {
        try {
            const response = await fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('authToken', data.token);
                isLoggedIn.value = true;
                loginSuccess.value = true;
            } else {
                loginSuccess.value = false;
            }
        } catch (error) {
            console.error('Login error:', error);
            loginSuccess.value = false;
        }
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        isLoggedIn.value = false;
        signupSuccess.value = false; // Reset signup success on logout
    };

    const signup = async (email, password) => {
        try {
            const response = await fetch('https://reqres.in/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('authToken', data.token);
                isLoggedIn.value = true;
                signupSuccess.value = true;
            } else {
                signupSuccess.value = false;
            }
        } catch (error) {
            console.error('Signup error:', error);
            signupSuccess.value = false;
        }
    };

    return { isLoggedIn, signupSuccess, login, logout, signup };
});