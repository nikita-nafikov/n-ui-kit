import { ref } from "vue";

const useDarkTheme = () => {
  const isDarkTheme = ref(true);

  const toggleTheme = () => {
    isDarkTheme.value = !isDarkTheme.value;
    localStorage.setItem(
      "n-ui-kit-isDarkTheme",
      JSON.stringify(isDarkTheme.value)
    );
  };

  const savedTheme = localStorage.getItem("n-ui-kit-isDarkTheme");
  if (savedTheme) {
    isDarkTheme.value = JSON.parse(savedTheme);
  }

  return { isDarkTheme, toggleTheme };
};

export default useDarkTheme;
