/*
    No need to import as Nuxt.js automatically imports from:
    - /components
    - /composables
    - /utils
    - framework-provided functions (i.e. useFetch(), useRoute())
*/

export const useParam = (key: string) => {
  return useRoute().params[key].toString();
};
