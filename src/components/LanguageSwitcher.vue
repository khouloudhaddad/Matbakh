<template>
  <div class="relative inline-block">
    <button
      @click="toggleDropdown"
      class="flex items-center px-4 py-2 rounded-md bg-white dark:bg-gray-800 dark:text-white focus:outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>

      <span class="ml-1">{{ currentLanguageLabel }}</span>
    </button>

    <!-- Dropdown Menu -->
    <div
      v-if="isOpen"
      class="absolute mt-1 w-[110px] bg-white border rounded-md shadow-lg z-10"
    >
      <ul class="py-2">
        <li
          v-for="(label, lang) in languages"
          :key="lang"
          @click="switchLanguage(lang as Locale)"
          class="px-2 py-2 cursor-pointer hover:bg-gray-200"
        >
          {{ label }}
        </li>
      </ul>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useI18n } from "vue-i18n";

// Define available locales
type Locale = "en" | "ar";

const { locale } = useI18n();
const isOpen = ref<boolean>(false);

const languages: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
};

// Compute current language label
const currentLanguageLabel = computed(() => languages[locale.value as Locale]);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const switchLanguage = (lang: Locale) => {
  locale.value = lang;
  isOpen.value = false;
};

// Watch for language changes and update `dir` dynamically
watch(locale, (newLang) => {
  document.documentElement.lang = newLang;
  document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  document.body.style.fontFamily = newLang === "ar" ? "Tajawal, serif" : "Montserrat, sans-serif";
});
</script>
  