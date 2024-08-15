<template>
  <div class="layout">
    <nav class="navbar">
      <Navbar />
    </nav>
    <aside class="sidebar">
      <SidebarComp />
    </aside>
    <main class="content">
      <router-view></router-view> 
    </main>
  </div>
</template>

<script setup>
import Navbar from '../components/NavbarComp.vue';
import SidebarComp from '@/components/Cabinet/SidebarComp.vue';
</script>

<style scoped>
.layout {
  display: grid;
  grid-template-areas:
    "navbar navbar"
    "sidebar content";
  grid-template-columns: 300px 1fr;
  grid-template-rows: 80px 1fr;
  height: 100vh;
  gap: 10px;
}

.navbar {
  grid-area: navbar;
  background-color: #fff; 
  box-shadow: 0 2px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 1000;
}

.sidebar {
  grid-area: sidebar;
  background-color: #f8f9fa; /* Adjust as needed */
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.1), 0 -1px 3px rgba(0, 0, 0, 0.05); /* Less visible shadow */
  overflow-y: hidden;
}

.content {
  grid-area: content;
  padding: 20px;
  overflow-y: auto; 
  height: 100%;
  background-color: #f8f9fa;
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.1), 0 -1px 3px rgba(0, 0, 0, 0.05); /* Less visible shadow */
}

main {
  height: 100%;
  scroll-behavior: smooth;
}

html {
  scroll-behavior: smooth;
}

body {
  transition: scroll 0.5s ease;
}
</style>
