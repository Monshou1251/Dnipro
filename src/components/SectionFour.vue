<template>
  <section class="section">
    <div class="top-text">
      <div class="big-text">
        {{ t('sectionFour.whyBeneficial') }}
      </div>
      <div class="small-text">
        {{ t('sectionFour.beneficialPrices') }}
      </div>
    </div>
    <div class="cards">
      <Card2 title="Amazon" content="sectionFour.description" details="sectionThree.amazonDetail" :imageSrc="amazon"
        link="https://www.amazon.com" />
      <Card2 title="Carters" content="sectionFour.kidsClothing" details="sectionThree.cartersDetail" :imageSrc="carters"
        link="https://www.carters.com" />
      <Card2 title="6pm" content="sectionFour.multiBrandStore" details="sectionThree.sixDetail" :imageSrc="sixpm"
        link="https://www.6pm.com" />
      <Card2 title="6pm" content="sectionFour.multiBrandStore" details="sectionThree.sixDetail" :imageSrc="sixpm"
        link="https://www.6pm.com" />
    </div>
    <div class="button-section">
      <a class="btn" href="/help">{{ t('sectionFour.buttonText') }}</a>
    </div>
  </section>
</template>

<script setup>
import Card2 from './Card-2.vue';
import { useI18n } from 'vue-i18n';
import amazon from '@/assets/images/amazon.png';
import carters from '@/assets/images/carters.png';
import sixpm from '@/assets/images/6pm.png';

const { t } = useI18n();
</script>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: var(--section-padding-medium);
  /* Default for desktop */
  overflow: hidden;
  color: var(--devil-blue-color-2);
  background-color: #34ace013;
  gap: 20px;
}

.top-text {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.big-text {
  font-size: var(--font-size-big);
  font-weight: bold;
}

.small-text {
  font-size: var(--font-size-small);
  line-height: 1.2;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  width: 100%;
}

.cards>* {
  flex: 1 1 calc(50% - 20px);
  /* Each card takes up 50% minus the gap */
  max-width: 40%;
  /* Ensures no card exceeds 50% of the container width */
  box-sizing: border-box;
}

.button-section {
  padding: 20px;
  padding-top: 40px;
}

.btn {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  font-size: 1rem;
  height: 60px;
  color: var(--main-colorL);
  font-weight: 600;
  background-color: #fff;
  box-shadow: var(--card-box-shadow);
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #ffc081da;
}

@media (max-width: 1024px) {
  .section {
    padding: var(--section-padding-medium);
    /* Medium padding for tablet */
  }

  .cards>* {
    flex: 1 1 calc(100% - 20px);
    /* On smaller screens, each card takes up 100% */
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .section {
    padding: var(--section-padding-small);
    /* Smaller padding for mobile */
  }

  .cards {
    flex-direction: column;
  }

  .cards>* {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>
