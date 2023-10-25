import { onMounted } from 'vue';
import colorVariables from '@/shared/variables/color';

export const setColorVariables = () => {
  const rootEl = document.querySelector(':root');
  Object.entries(colorVariables).forEach(([key, value]) => {
    rootEl.style.setProperty(key, value);
  });
};

const useColorVariables = () => {
  onMounted(setColorVariables);
};

export default useColorVariables;
