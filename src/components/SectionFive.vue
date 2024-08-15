<template>
    <section class="help-section">
        <div class="grid-container">
            <div class="section-2">
                <img class="help-image" src="@/assets/images/support.svg" alt="Help Image" />
            </div>
            <div class="section-1">
                <h1 class="title">{{ t('sectionFive.title') }}</h1>
                <p class="text-1">{{ t('sectionFive.text1') }}</p>
                <p class="text-2">{{ t('sectionFive.text2') }}</p>
                <p class="text-3">{{ t('sectionFive.text3') }}</p>
                <a class="btn" href="/help">{{ t('sectionFive.buttonText') }}</a>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>
.help-section {
    padding: 20px;
    background-image: url('@/assets/images/bg-shops.png');
    background-size: 10%;
    background-repeat: repeat;
    background-position: center;
}

.grid-container {
    display: grid;
    grid-template-columns: 1fr;

    /* gap: 10px; */
}

.section-1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
}

.section-1 .title {
    font-size: 24px;
    margin-bottom: 20px;
    line-height: 1.4;
}

.section-1 .text-1 {
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: 600;
    line-height: 1.1;
}

.section-1 .text-2 {
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: 600;
    line-height: 1.1;
}

.section-1 .text-3 {
    font-size: 1rem;
    margin-bottom: 20px;
}

.section-1 .btn {
    align-self: flex-start;
    display: inline-block;
    padding: 10px 20px;
    font-size: 1rem;
    color: #fff;
    font-weight: 600;
    background-color: #ffbf81;
    border-radius: 5px;
    text-decoration: none;
    text-align: center;
    width: 100%;
    transition: background-color 0.3s ease;
}

.section-1 .btn:hover {
    background-color: #ffc081da;
}

.section-2 {
    display: flex;
    align-items: center;
    justify-content: center;
}

.section-2 .help-image {
    width: 80%;
    height: auto;
}

@media (min-width: 768px) {
    .grid-container {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
    }

    .section-2 .help-image {
        width: 70%;
        height: auto;
    }

    .section-1 .title {
        font-size: 32px;
        line-height: 1.083333;
    }
}

@media (min-width: 1024px) {
    .grid-container {
        padding-left: var(--section-padding-large);
        padding-right: var(--section-padding-large);
    }

    .section-2 .help-image {
        width: 60%;
        height: auto;
    }
}
</style>
