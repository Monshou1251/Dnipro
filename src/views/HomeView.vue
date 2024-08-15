<template>
  <nav>
    <NavbarComp />
  </nav>
  <main>
    <section class="snap-section">
      <SectionOne />
    </section>
    <section class="snap-section">
      <SectionTwo />
    </section>
    <section class="snap-section">
      <SectionThree />
    </section>
    <section class="snap-section">
      <SectionFour />
    </section>
    <section class="snap-section">
      <SectionFive />
    </section>
    <section class="snap-section">
      <FooterComp />
    </section>
  </main>
</template>

<script setup>
import NavbarComp from '../components/NavbarComp.vue';
import SectionOne from '../components/SectionOne.vue';
import SectionTwo from '../components/SectionTwo.vue';
import SectionThree from '../components/SectionThree.vue';
import SectionFour from '../components/SectionFour.vue';
import SectionFive from '../components/SectionFive.vue';
import FooterComp from '../components/FooterComp.vue';
</script>

<style scoped>
main {
  /* scroll-snap-type: y mandatory; */
  overflow-y: scroll;
  height: 100vh;
  scroll-behavior: smooth; 
}

.snap-section {
  scroll-snap-align: start;
  /* height: 100vh;  */
}

/* Additional styles to make it even smoother */
html {
  scroll-behavior: smooth;
}

body {
  transition: scroll 0.5s ease; /* Adjusts the scrolling speed and smoothness */
}
</style>
