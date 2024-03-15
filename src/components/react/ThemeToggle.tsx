const ThemeToggle = () => {
  return (
    <button
      className="text-neutral-500 hover:text-neutral-700 dark:text-white"
      onClick={() => {
        const currentTheme = localStorage.getItem("theme");
        if (currentTheme === "dark") {
          localStorage.setItem("theme", "light");
          document.documentElement.classList.remove("dark");
        } else {
          localStorage.setItem("theme", "dark");
          document.documentElement.classList.add("dark");
        }
      }}
      title="Toggle Dark Mode"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-moon-stars"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#ffffff"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
        <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
        <path d="M19 11h2m-1 -1v2" />
      </svg>
    </button>
  );
};

export default ThemeToggle;