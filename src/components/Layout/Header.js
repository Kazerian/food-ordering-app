import React from "react";
import mealsImg from "../../assests/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>Mom's Cookhouse</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImg} alt="table full of food" />
      </div>
    </>
  );
};

export default Header;
