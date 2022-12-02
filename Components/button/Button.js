import React from "react";
import styles from "./button.module.scss"

export default function Button({children , className, label , type}) {
  return (
    <button className={`${styles.btn} ${className || ""} ${styles[type]}`}>
      {children}
    </button>
  );
}