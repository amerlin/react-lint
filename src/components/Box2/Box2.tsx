import React, { FC } from "react";
import styles from "./Box2.module.css";

interface Box2Props {
  firstName: string;
  lastName: string;
}

const Box2: FC<Box2Props> = () => (
  <div className={styles.Box2} data-testid="Box2">
    Box2 Component
  </div>
);

export default Box2;
