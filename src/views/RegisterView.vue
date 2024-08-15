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
          <h2 class="login-title">Register</h2>
          <!-- <input type="text" v-model="username" class="login-input" placeholder="Username" required /> -->
          <input type="text" v-model="name" class="login-input" placeholder="Name" required />
          <input type="text" v-model="surname" class="login-input" placeholder="Surname" required />
          <input type="email" v-model="email" class="login-input" placeholder="Email" required />
          <input type="tel" v-model="phone" class="login-input" placeholder="Phone Number" required />
          <input type="password" v-model="password" class="login-input" placeholder="Password" required />
          <input type="password" v-model="repeatPassword" class="login-input" placeholder="Repeat Password" required />
          <p v-if="passwordMismatch" class="error-message">Passwords do not match</p>
          <button class="login-button">Enter</button>
          <div class="login-links">
            <a href="#" class="login-link">Forgot password?</a>
            <router-link to="/login" class="login-link">Login</router-link>
            <!-- <a href="#" class="login-link">Register</a> -->
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import NavbarComp from '@/components/NavbarComp.vue';

const email = ref('');
const name = ref('');
const surname = ref('');
const phone = ref('');
const password = ref('');
const repeatPassword = ref('');

const passwordMismatch = computed(() => password.value !== repeatPassword.value);

// const onSubmit = () => {
//   if (!passwordMismatch.value) {
//     // Handle form submission
//     console.log('Form submitted:', { username, email, name, surname, phone, password });
//   }
// };
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
  /* Ensure it fits within the remaining viewport height */
  background-color: #f8f9fa;
  padding: 20px;
  margin-top: 10px;
  /* Add margin to create a gap between navbar and content */
}

.login-box {
  display: flex;
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.1), 0 -1px 3px rgba(0, 0, 0, 0.05);
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  width: 90%;
  /* Adjust width as needed */
  max-width: 800px;
  /* Limit the maximum width */
  height: auto;
  /* Ensure it adjusts based on content */
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
  padding: 20px 40px 20px 40px;
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
  /* border: 1px solid #ccc; */
  border: none;
  border-radius: 4px;
  background-color: #3333330c;
}

.login-button {
  padding: 10px;
  font-size: 1rem;
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
  color: #999; /* Less visible placeholder color */
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