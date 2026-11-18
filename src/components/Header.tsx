import { useRef } from "react";
import moonIcon from "../assets/moon.svg";
import sunIcon from "../assets/sun.svg";
import { useTheme } from "../contexts/ThemeContext";
import styles from "../styles/header.module.css";
import { flushSync } from "react-dom";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";

    const rect = buttonRef.current?.getBoundingClientRect();

    if (!rect) return;

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    if (
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(nextTheme);
      return;
    }

    // 4. 開始 View Transition
    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(nextTheme);
      });

      document.documentElement.dataset.theme = nextTheme;
    });

    void transition.ready
      .then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 600,
            easing: "ease-in-out",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      })
      .catch(() => {});
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Aron Chiang.</h1>
      <nav className={styles.navbar}>
        <a href="#about" className={styles.navLink}>
          About
        </a>
        <a href="#projects" className={styles.navLink}>
          Projects
        </a>
        <a href="#notes" className={styles.navLink}>
          Notes
        </a>
      </nav>
      <button
        className={styles.themeButton}
        onClick={toggleTheme}
        ref={buttonRef}
      >
        <img src={theme === "dark" ? sunIcon : moonIcon} alt="" />
      </button>
    </header>
  );
}
