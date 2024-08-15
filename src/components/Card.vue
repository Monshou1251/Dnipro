<template>
  <div class="card">
    <h3 class="card-title">{{ t(title) }}</h3>
    <img class="card-image" :src="imageSrc" alt="Card image" />
    <div class="text-container">
      <p class="card-detail-title">{{ t(content) }}</p>
      <p class="card-detail">{{ t(details) }}</p>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';


const { t } = useI18n();

defineProps({
  title: String,
  content: String,
  details: String,
  imageSrc: String,
});
</script>


<style scoped>
.card {
  border: var(--card-border);
  border-radius: var(--card-border-radius);
  padding: var(--card-padding);
  margin: 8px 0;
  background-color: var(--card-background-color);
  box-shadow: var(--card-box-shadow);
  width: 100%;
  max-width: 320px;
  min-width: 380px;
  min-height: 500px; 
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Distribute space between items */
  align-items: center;
  text-align: center;
  
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-top: 10px;
  font-weight: 700;
  color: #174c64;
}

.card-image {
  width: auto;
  max-width: 150px;
  height: auto;
  max-width: 220px;
}


.card-detail-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #174c64;
}

.card-detail {
  font-size: 14px;
  margin-bottom: 20px;
  /* padding-bottom: 10px; */
  color: #174c64b6;
}

.text-container {
  height: 150px;
}

@media (min-width: 768px) {
  .card {
    max-width: var(--card-max-width-medium);
  }
}

@media (min-width: 1024px) {
  .card {
    max-width: var(--card-max-width-large);
  }
}

</style>
