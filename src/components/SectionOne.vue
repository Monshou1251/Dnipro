<template>
  <div class="container">
    <section class="section">
      <div class="text-container">
        <div class="slogan-container">
          <h1 class="highlighted">{{ t('slogan') }}</h1>
          <p>
            <span class="small-text">{{ t('from') }}</span>
            <span class="usa">{{ t('usa') }}</span>
          </p>
          <p>
            <span class="small-text">{{ t('to') }}</span>
            <span class="uzb">{{ t('uzbekistan') }}</span>
          </p>
        </div>
        <div class="description">
          <p class="service-description">{{ t('serviceDescription') }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>
.container {
  padding-top: 53px;
  min-height: 100vh;
  background-image: url('@/assets/images/bg-eagle.png');
  background-size: cover; 
  background-position: center center; 
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.section {
  /* height: calc(80vh - 53px); */
  display: flex;
  justify-content: space-between; /* Ensure slogan and description are on opposite sides */
  align-items: flex-start;
  width: 100%;
  max-width: 1250px; 
  margin: 0 auto; 
  padding: 0 24px; 
}

.text-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
}

.slogan-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 45rem;
  padding: 20px;
  border-radius: 20px;
}

.slogan-container h1,
.slogan-container p {
  margin: 0; 
  line-height: 0.95; 
}

.highlighted {
  color: white;
  font-weight: bold;
  font-size: 4rem;
  margin-bottom: 20px; 
  width: 100%;
}

.description {
  line-height: 1.083333;
  max-width: 45%; /* Adjust the width of the description */
  padding: 20px;
  border-radius: 20px;
  width: 500px;
}

.service-description {
  font-size: 20px;
  line-height: 27px;
  color: var(--devil-blue-color-2);
}

.usa {
  font-weight: 1000;
  font-size: 3.75rem;
  margin-right: 5px;
  margin-left: 5px;
  color: var(--eye-of-newt-color);
  
}

.uzb {
  margin-right: 5px;
  margin-left: 5px;
  font-weight: 1000;
  font-size: 3.75rem;
  color: var(--mandarin-sorbet);
}

.small-text {
  font-size: 36px;
  font-weight: 600;
  color: #636e72;
}

@media (max-width: 1024px) {
  .container {
    height: auto;
  }

  .section {
    height: calc(60vh - 53px);
    padding-left: 32px;
    padding-right: 32px;
    flex-direction: column;
  }

  .text-container {
    flex-direction: column;
    align-items: center;
  }

  .slogan-container,
  .description {
    max-width: 100%;
  }

  .highlighted {
    font-size: 2.5rem;
  }

  .small-text {
    font-size: 1.75rem;
  }

  .usa,
  .uzb {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .section {
    height: 100%;
    padding-left: 16px;
    padding-right: 16px;
  }

  .text-container {
    font-size: 1rem;
    text-align: left;
    margin-top: 50px;
    align-items: center;
  }

  .highlighted {
    font-size: 2.5rem;
  }

  .small-text {
    font-size: 1.5rem;
  }

  .usa,
  .uzb {
    font-size: 2rem;
  }

  .service-description {
    font-size: 0.875rem;
  }
}
</style>
