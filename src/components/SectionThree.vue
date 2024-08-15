<!-- src/components/SectionThree.vue -->
<template>
  <section class="section">
    <div class="top-text">
      <!-- <div style="font-size: 28px; font-weight: 600; color: red">
        SECTION 3
      </div> -->
      <div class="big-text">
        {{ t('sectionThree.howItWorks') }}
      </div>
      <div class="small-text">
        {{ t('sectionThree.steps') }}
      </div>
    </div>
    <div class="cards">
      <Card title="sectionThree.register" content="sectionThree.personalAddress" details="sectionThree.registerDetail"
        :imageSrc=register />
      <Card title="sectionThree.order" content="sectionThree.shopOnline" details="sectionThree.orderDetail"
        :imageSrc=order />
      <Card title="sectionThree.send" content="sectionThree.manageParcels" details="sectionThree.sendDetail"
        :imageSrc=send />
    </div>
  </section>
</template>

<script setup>
import Card from './Card.vue';
import { useI18n } from 'vue-i18n';
import register from '@/assets/images/register-form.svg';
import order from '@/assets/images/shopping.svg';
import send from '@/assets/images/deliver.svg';


const { t } = useI18n();

</script>


<style scoped>
.section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: var(--section-padding-small);
  overflow: hidden;
  color: var(--devil-blue-color-2);
  /* background-image: url('@/assets/images/bg-boxes-2.png'); */
  background-size: 30%;
  background-repeat: repeat;
  background-position: center;
}



.top-text {
  /* margin-top: 5%; */
  margin-bottom: 20px;
  text-align: center;
  /* font-size: 32px; */
}

.big-text {
  font-size: var(--font-size-big);
  font-weight: bold;
}

.small-text {
  font-size: var(--font-size-small);
  font-weight: 500;
  line-height: 1.2;
}


.cards {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* min-height: 500px; */
  gap: 20px;
  width: 100%;
}

@media (min-width: 768px) {
  .cards {
    flex-direction: row;
  }

  .section {
    padding: var(--section-padding-medium);
  }

  .big-text {
    font-size: 32px;
    line-height: 1.083333;
  }

  .small-text {
    font-size: var(--font-size-medium);
    font-weight: 500;
    line-height: 2;
  }

  /* font-size: 32px;
    line-height: 1.083333; */
}

@media (min-width: 1024px) {
  .section {
    /* padding: var(--section-padding-large); */
  }
}
</style>
