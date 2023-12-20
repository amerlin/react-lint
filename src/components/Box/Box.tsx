// eslint-disable-next-line import/namespace, import/no-unresolved
import React, { FC } from "react";
// eslint-disable-next-line import/no-unresolved
import styles from "./Box.module.css";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BoxProps {
  name: string;
}

const Box: FC<BoxProps> = () => (
  <div className={styles.Box} data-testid="Box">
    Box Component
    <p>Prova</p>
    <p>Provo a scrivere un nuovo documento di testo</p>
  </div>
);

export default Box;
