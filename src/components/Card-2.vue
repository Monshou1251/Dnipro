<template>
  <div class="card">
    <h3 class="card-title">{{ title }}</h3>
    <img class="card-image" :src="imageSrc" alt="Card image" />
    <div class="text-container">
      <p class="card-detail-title">{{ t(content) }}</p>
    </div>
    <a :href="link" target="_blank" rel="noopener noreferrer" class="card-detail-link">{{ formattedLink }}</a>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
  title: String,
  content: String,
  details: String,
  imageSrc: String,
  link: String,
});

const formattedLink = computed(() => {
  return props.link.replace(/^https?:\/\//, '');
});

</script>

<style scoped>
.card {
  border: var(--card-border);
  border-radius: var(--card-border-radius);
  padding: var(--card-padding);
  /* margin: 8px 0; */
  background-color: var(--card-background-color);
  box-shadow: var(--card-box-shadow);
  width: 100%;
  max-width: 320px;
  min-height: 550px;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  /* height: 100%; */
}

.card-title {
  font-size: 18px;
  font-weight: 700;
  color: #174c64;
  margin-top: 10px;
}

.card-image {
  width: auto;
  max-width: 150px;
  height: auto;
  border-radius: var(--card-border-radius);
  margin: 20px 0;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  padding: 10px 10px;
}

.card-detail-title {
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 10px;
  color: #174c64;
}

.card-detail {
  font-size: 14px;
  /* margin-bottom: 10px; */
  color: #174c64b6;
  align-self: flex-end;
}

.card-detail-link {
  font-size: 14px;
  color: #174c64b6;
  align-self: flex-end;
  /* text-decoration: none; */
}

.card-detail-link:hover {
  color: #ffb142;
}

@media (min-width: 768px) {
  .card {
    max-width: var(--card-max-width-medium);
  }
}

@media (min-width: 1024px) {
  .card {
    max-width: var(--card-max-width-large);
    height: 100%;
  }
}
</style>
