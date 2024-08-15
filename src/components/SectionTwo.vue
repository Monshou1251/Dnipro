<template>
  <section class="section">
    <div class="left">
      <img src="@/assets/images/discount.svg" alt="Image description" />
    </div>
    <div class="right">
      <div class="text">
        <div class="tariff">
          <a href="/tariffs/usa-to-uz/">{{ t('sectionTwo.summerRate') }} «⚡QUICK»</a>
        </div>
        <div class="small-text">{{ t('sectionTwo.priceInfo') }}</div>
        <div class="button-container">
          <a class="btn" href="/tariffs/usa-to-uz/">Подробнее</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>
.section {
  height: 50vh;
  height: 50dvh;
  min-height: 400px; /* Ensures the section doesn't shrink below 50vh */
  padding-left: 10%;
  padding-right: 10%;
  background-color: #faa226a2;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: #FFFFFF;
  overflow: hidden;
  /* box-sizing: border-box; */
}

.text {
  width: 100%;
  padding: 0 20px;
  text-align: left;
  box-sizing: border-box;
}

.small-text {
  margin-top: 20px;
  font-size: 28px;
}

.left,
.right {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left img {
  width: auto;
  max-width: 100%;
  max-height: 400px;
}

.tariff a {
  font-size: 2.5rem;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  color: inherit;
  outline: none;
  line-height: 60px;
}

.tariff a:hover {
  text-decoration: underline;
}

.button-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.btn {
  display: block;
  max-width: 230px;
  margin-top: 20px;
  padding: 10px 20px;
  text-align: center;
  color: var(--devil-blue-color-2);
  background-color: #FFFFFF;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 18px;
}

.btn:hover {
  background-color: #f0f0f0;
}

@media (max-width: 1024px) {
  .section {
    flex-direction: column;
    height: 50vh;
    padding-left: 5%;
    padding-right: 5%;
  }

  .left,
  .right {
    width: 100%;
  }

  .small-text {
    font-size: 1.75rem;
  }

  .tariff a {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .section {
    height: 100vh;
    padding: 20px;
  }

  .left img {
    max-height: 260px;
  }

  .tariff a {
    font-size: 24px;
  }

  .small-text {
    font-size: 18px;
  }

  .btn {
    font-size: 1rem;
  }
}
</style>


