<script lang="ts" setup>
const { navigation } = useContent()
</script>

<template>
  <div class="xl:container mx-auto flex justify-between px-4 py-4 sm:px-8">
    <!-- Navigation -->
    <div class="text-gray-700 dark:text-gray-200">
      <NuxtLink
        v-for="link of navigation"
        :key="link._path"
        :to="link._path"
        active-class="font-bold"
        class="mr-4"
      >
        {{ link.navTitle || link.title }}
      </NuxtLink>
    </div>
    <!-- Social icons & Color Mode -->
    <div class="space-x-3 text-gray-500 transition">
      <a href="https://github.com/PDFinch/Client-NET" title="GitHub: PDFinch.com .NET/C# Client" class="hover:text-gray-700 dark:hover:text-gray-300"><Icon name="fa-brands:github" /></a>
      <ColorModeSwitch class="hover:text-gray-700 dark:hover:text-gray-300" />
    </div>
  </div>
</template>
