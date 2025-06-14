export const useCategoryState = () => {
  // useState() is like Nuxt.js version of ref() #ssr-compatible
  // useState('unique-key', func) where func returns initial value
  return useState('category', () => ({
    name: '',
    slug: '',
  }));
};
