<template>
  <div class="xl:container mx-auto max-w-2xl px-4 py-10 bg-white sm:px-8 sm:shadow dark:bg-gray-800 sm:rounded">
    <main class="prose prose-gray dark:prose-invert max-w-5xl">
      <slot />
    </main>
  </div>
</template>

<style lang="postcss">
/* Customize headers to remove default underline */
.prose h2 a,
.prose h3 a {
  @apply no-underline;
  &:hover {
    @apply border-b border-neutral-600 dark:border-neutral-300;
  }
}
</style>
