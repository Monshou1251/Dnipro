<template>
    <footer class="footer">
        <div class="grid-item">
            <h3>{{ t('sectionFooter.section1Title') }}</h3>
            <ul class="links">
                <li><a href="/start">{{ t('sectionFooter.start') }}</a></li>
                <li><a href="/tariffs">{{ t('sectionFooter.price') }}</a></li>
                <li><a href="/faq">{{ t('sectionFooter.faq') }}</a></li>
                <li><a href="/calculator">{{ t('sectionFooter.calc') }}</a></li>
                <li><a href="/contacts">{{ t('sectionFooter.contacts') }}</a></li>
                <li><a href="/privacy">{{ t('sectionFooter.privacy') }}</a></li>
            </ul>
        </div>
        <div class="grid-item">
            <h3>{{ t('sectionFooter.section2Title') }}</h3>
            <p>{{ t('sectionFooter.country') }}</p>
            <p>109 Rogers Rd, STE 3<br />Wilmington, DE 19801</p>
            <p>+998 (78) 113 91 09<br />support@delivero.us</p>
            <p>{{ t('sectionFooter.fraud') }}: fraud@delivero.us</p>
        </div>
        <div class="grid-item">
            <img class="logo" src="@/assets/images/logo.png" alt="Logo" />
            <p>{{ t('sectionFooter.delivery') }}</p>
            <p>{{ t('sectionFooter.sub') }}</p>
            <div class="social-icons">
                <a href="https://www.facebook.com" target="_blank"><img src="@/assets/images/facebook-icon.svg" alt="Facebook" /></a>
                <a href="https://www.instagram.com" target="_blank"><img src="@/assets/images/soc-instagram.svg" alt="Instagram" /></a>
                <a href="https://www.youtube.com" target="_blank"><img src="@/assets/images/soc-youtube.svg" alt="YouTube" /></a>
            </div>
        </div>
        <div class="grid-item section-4">
            <p>{{ t('sectionFooter.cards') }}</p>
            <img class="payment-icon" src="@/assets/images/cards.png" alt="Payment Methods" />
        </div>
    </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>
.footer {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px;
    background-color: #333;
    color: #fff;
    font-size: 0.9rem; /* Smaller font size */
    box-sizing: border-box;
}

.grid-item {
    padding: 10px;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
}

.links {
    list-style: none;
    padding: 0;
    margin: 0;
    line-height: 0.8;
}

.links li {
    margin-bottom: 10px;
}

.links a {
    color: inherit;
    text-decoration: none;
}

.links a:hover {
    text-decoration: underline;
}

.logo {
    max-width: 80px;
    margin-bottom: 10px;
}

.social-icons {
    display: flex;
    gap: 10px;
}

.social-icons img {
    width: 24px; /* Adjust icon size */
    height: 24px; /* Adjust icon size */
}

.payment-icon {
    max-width: 150px;
}

.section-4 {
    justify-content: center;
}

@media (min-width: 768px) {
    .footer {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, auto);
    }
}

@media (min-width: 1024px) {
    .footer {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: auto;
        padding-left: var(--section-padding-large);
        padding-right: var(--section-padding-large);
    }
    .section-4 {
    justify-content: flex-start;
}
}
</style>
