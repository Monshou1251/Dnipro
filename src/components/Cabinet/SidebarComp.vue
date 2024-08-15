<template>
  <div class="sidebar">
    <div class="balance">
      Balance: <span class="balance-number">${{ balance }}</span>
    </div>
    <router-link v-for="link in links" :key="link.path" :to="link.path" class="sidebar-link" active-class="active-link">
      <i :class="link.icon"></i>
      {{ t(`sidebar.${link.name}`) }}
    </router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const balance = ref(389)

const links = ref([
  { name: 'account', path: '/cabinet/account', icon: 'fas fa-user' },
  { name: 'addresses', path: '/cabinet/address', icon: 'fas fa-address-book' },
  { name: 'expectedParcels', path: '/cabinet/expected', icon: 'fas fa-box-open' },
  { name: 'parcelsInWarehouse', path: '/cabinet/warehouse', icon: 'fas fa-warehouse' },
  { name: 'parcelsInPacking', path: '/cabinet/packing', icon: 'fas fa-boxes' },
  { name: 'sentParcels', path: '/cabinet/sent', icon: 'fas fa-shipping-fast' },
  { name: 'purchaseAssistance', path: '/cabinet/assistance', icon: 'fas fa-hands-helping' },
  { name: 'additionalServices', path: '/cabinet/services', icon: 'fas fa-concierge-bell' }
]);
</script>

<style scoped>
.sidebar {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  overflow-y: auto;
  padding-top: 50px;
}

.sidebar-link {
  text-decoration: none;
  width: 100%;
  color: #333;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  padding-left: 30px;
}

.sidebar-link:hover {
  background-color: #e2e6ea;
}

.sidebar-link i {
  margin-right: 10px;
  color: #333333c4;
}

.active-link {
  background-color: #e2e6ea;
  color: #333;
}

.active-link i {
  color: #b33939;
}

.balance {
  padding-left: 30px;
  padding-bottom: 20px;
  font-weight: 500;
  font-size: 1rem;
}

.balance-number {
  padding-left: 5px;
  font-weight: 600;
  font-size: 1.2rem;
  color: #098b6b;
}
</style>