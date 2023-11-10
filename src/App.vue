<template>
  <van-config-provider :theme="theme">
    <router-view />
  </van-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ConfigProviderTheme } from 'vant'

const theme = ref<ConfigProviderTheme>('light')
</script>
