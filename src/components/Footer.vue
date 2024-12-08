<script lang="ts" setup>
import siteConfig from '@/site-config'
</script>

<template>
  <footer class="w-full mt-18 pt-6 pb-8 max-w-3xl text-sm flex flex-col gap-4 border-main border-t !border-op-50 text-dark dark:text-white">
    <div flex>
      <a nav-link href="#" target="_blank">Hosted on a Raspberry Pi Zero 2W</a>
      <span class="mx-2">|</span>
      <span op-70>&copy;&nbsp;{{ new Date().getFullYear() }}&nbsp;{{ siteConfig.author
      }}.</span>
    </div>
  </footer>
</template>
