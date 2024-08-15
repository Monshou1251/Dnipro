<template>
    <div class="layout">
        <nav class="navbar">
            <NavbarComp />
        </nav>
        <main class="login-container">
            <div class="login-box">
                <div class="login-image">
                    <img src="@/assets/images/login.svg" alt="Login Image" />
                </div>
                <div class="login-form">
                    <h2 class="login-title">Login</h2>
                    <input type="text" v-model="credentials.username" :class="{ 'input-error': loginError }"
                        class="login-input" placeholder="Username" />
                    <input type="password" v-model="credentials.password" :class="{ 'input-error': loginError }"
                        class="login-input" placeholder="Password" />
                    <button @click="login" class="login-button">Enter</button>
                    <div class="login-links">
                        <a href="#" class="login-link">Forgot password?</a>
                        <router-link to="/register" class="login-link">Register</router-link>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import NavbarComp from '@/components/NavbarComp.vue';

const credentials = reactive({
    username: '',
    password: ''
});

const loginError = ref(false);

const router = useRouter();

const login = () => {
    if (credentials.username === 'admin' && credentials.password === 'admin') {
        loginError.value = false;
        localStorage.setItem('username', credentials.username);
        router.push('/cabinet');
    } else {
        loginError.value = true;
    }
};
</script>

<style scoped>
.layout {
    display: grid;
    grid-template-areas:
        "navbar"
        "content";
    grid-template-rows: 60px 1fr;
    height: 100vh;
    gap: 10px;
}

.navbar {
    grid-area: navbar;
    background-color: #fff;
    box-shadow: 0 2px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    z-index: 1000;
}

.login-container {
    grid-area: content;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 90px);
    background-color: #f8f9fa;
    padding: 20px;
    margin-top: 10px;
}

.login-box {
    display: flex;
    box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.1), 0 -1px 3px rgba(0, 0, 0, 0.05);
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    width: 90%;
    max-width: 800px;
    height: auto;
}

.login-image {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e2e6ea7e;
}

.login-image img {
    width: 100%;
    height: auto;
}

.login-form {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px;
}

.login-title {
    font-size: 24px;
    margin-bottom: 20px;
    color: var(--main-color);
}

.login-input {
    margin-bottom: 15px;
    padding: 10px;
    font-size: 1rem;
    height: 50px;
    border: none;
    border-radius: 4px;
    background-color: #3333330c;
}

.input-error {
    box-shadow: 0 0 0 2px #ff4d4f;
    background-color:#ff4d5010;
}

.login-button {
    padding: 10px;
    font-size: 16px;
    background-color: #226f93;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.login-button:hover {
    background-color: #16475e;
}

.login-input::placeholder {
    color: #999;
    /* Less visible placeholder color */
}

.login-links {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}

.login-link {
    color: #226f93;
    text-decoration: none;
}

.login-link:hover {
    text-decoration: underline;
}
</style>