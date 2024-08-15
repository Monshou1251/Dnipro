<template>
    <div class="navbar">
        <div class="left-block">
            <div class="logo">
                <img src="@/assets/images/logo.svg" alt="Logo" />
            </div>
        </div>
        <div class="right-block">
            <div class="nav-links">
                <router-link to="/">{{ t('home') }}</router-link>
                <a href="#">{{ t('about') }}</a>
                <a href="#">{{ t('services') }}</a>
                <a href="#">{{ t('contact') }}</a>
            </div>
            <div v-if="isLoggedIn" class="user-info">
                <span class="username-comp">{{ t('user') }}: <span class="username">{{ username }}</span></span>
                <button @click="logout" class="cta-button">{{ t('logout') }}</button>
            </div>
            <router-link v-else to="/login" class="cta-button">
                {{ t('getStarted') }}
            </router-link>
            <div class="language-selector">
                <button v-for="language in languages" :key="language.code" @click="changeLanguage(language.code)"
                    :class="{ active: currentLocale === language.code }">
                    {{ language.label }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale, t } = useI18n();
const languages = ref([
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
    { code: 'uz', label: 'UZ' },
]);

const currentLocale = computed(() => locale.value);

const isLoggedIn = ref(false);
const username = ref('');

onMounted(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
        isLoggedIn.value = true;
        username.value = storedUsername;
    }
});

function changeLanguage(language) {
    locale.value = language;
}

function logout() {
    localStorage.removeItem('username');
    isLoggedIn.value = false;
    username.value = '';
}
</script>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: background-color 0.3s ease-in-out;
    font-size: 0.9rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    height: 80px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 2px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.right-block {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding-right: 20px;
    height: 40px;
}

.logo img {
    padding-left: 15px;
    height: 60px;
    padding: 5px 0 0 15px;
}

.nav-links {
    display: flex;
    gap: 30px;
    
}

.nav-links a {
    text-decoration: none;
    color: var(--main-color);
    font-weight: 600;
    transition: color 0.3s ease-in-out;
}

.nav-links a:hover {
    color: #007bff;
}

.cta-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 18px;
    background-color: #226f93c9;
    color: var(--vt-c-white-mute);
    border: none;
    border-radius: 20px;
    font-size: 0.9rem;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.1s ease-in-out;
    font-family: Montserrat;
    height: 40px;
    text-decoration: none;
}

.cta-button:hover {
    background-color: #226f93;
}

.language-selector {
    display: flex;
    align-items: center;
    height: 100%;
    background-color: #6464643f;
    border-radius: 20px;
    box-shadow: inset 2px 1px 3px #226f9381;
    padding: 1px;
}

.language-selector button {
    padding: 5px 9px;
    border: none;
    background: transparent;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.9rem;
    color: var(--vt-c-white-mute);
    transition: background-color 0.2s ease, color 0.2s ease-in-out;
    border-radius: 20px;
    font-family: Montserrat;
    height: 100%;
}

.language-selector button:hover {
    background-color: #226f934b;
}

.language-selector button.active {
    background-color: var(--mandarin-sorbet);
    box-shadow: 2px 0px 3px #226f93a4;
    color: white;
    border-radius: 20px;
    height: 100%;
}

.user-info {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    font-size: 0.9rem;
    color: var(--main-color);
    padding-left: 10px;
}

.username {
    font-weight: 800;
    padding-left: 5px;
}

.username-comp {
    background-color: #226f931f;
    padding: 5px 15px;
}

@media (max-width: 768px) {

    .nav-links,
    .cta-button {
        display: none;
    }
}
</style>