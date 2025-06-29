import React from "react";
import styles from "./styles.module.scss";

export default function FirstHero() {
  return (
    <div className={styles.delicacies_hero}>
      <div className="drop-shadow-xl border border-green-900">
        <img src="/banner.jpg" alt="" />
        <ul>
          <li className={styles.foodname}>Fern Soup</li>
          <li className={styles.fooddesc}>
            Origininated from Ugep in Cross-river state, Nigeria
          </li>
          <li className={styles.seemore}>See recipies...</li>
        </ul>
      </div>
      <div className="drop-shadow-xl">
        <img src="/banner.jpg" alt="" />
        <ul>
          <li className={styles.foodname}>Fern Soup</li>
          <li className={styles.fooddesc}>
            Origininated from Ugep in Cross-river state, Nigeria
          </li>
          <li className={styles.seemore}>See recipies...</li>
        </ul>
      </div>
      <div className="drop-shadow-xl border border-green-900">
        <img src="/banner.jpg" alt="" />
        <ul>
          <li className={styles.foodname}>Fern Soup</li>
          <li className={styles.fooddesc}>
            Origininated from Ugep in Cross-river state, Nigeria
          </li>
          <li className={styles.seemore}>See recipies...</li>
        </ul>
      </div>
    </div>
  );
}
