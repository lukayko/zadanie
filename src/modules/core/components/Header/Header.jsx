import React from "react";
import styles from "./Header.module.scss";
import { AzetLogo, MenuIcon, SearchIcon } from "../../../../assets/icons/core";

function Header() {
  return (
    <div className={styles.wrapper}>
      <button>
        <img src={SearchIcon} width={35} height={35} />
      </button>
      <div className={styles["logo-container"]}>
        <a href='#'>
          <img src={AzetLogo} alt='Logo' />
        </a>
      </div>
      <button>
        <img src={MenuIcon} width={35} height={35} />
      </button>
    </div>
  );
}

export default Header;
