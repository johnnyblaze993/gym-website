import { useState } from "react";
import styles from "./Select.module.css";

type SelectOptions = {
  label: string;
  value: any;
};

type SelectProps = {
  value?: SelectOptions | undefined;
  options: SelectOptions[];
  onChange: (value: SelectOptions | undefined) => void;
};

export function Select({ value, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const clearOptions = () => {
    onChange(undefined);
  };

  const selectOption = (option: SelectOptions) => {
    onChange(option);
  };

  return (
    <div
      onBlur={() => {
        setIsOpen(false);
      }}
      onClick={() => setIsOpen((prev) => !prev)}
      className={styles.container}
      tabIndex={0}
    >
      <span className={styles.value}>{value?.label}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
        className={styles["close-btn"]}
      >
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map((option) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            key={option.value}
            className={`${styles.option} `}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
