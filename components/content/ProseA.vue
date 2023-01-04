<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: ''
  },
  blank: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <NuxtLink :href="href" rel="noopener">
    <slot />
  </NuxtLink>
</template>
