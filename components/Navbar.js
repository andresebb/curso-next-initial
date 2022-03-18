import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";

const menuItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map(({ title, href }) => {
        return (
          <div key={title}>
            <ActiveLink href={href} title={title} />
          </div>
        );
      })}
    </nav>
  );
};
