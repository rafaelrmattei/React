import { InputHTMLAttributes } from 'react';

import styles from './Checkbox.module.css'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string
}

export function Checkbox({ title, ...props }: CheckboxProps) {
  return (
    <label className={styles.checkboxContainer}>
      <input type="checkbox" className={styles.checkboxInput} {...props} />
      <span className={styles.checkbox}></span>
      <span className={styles.checkboxTitle}>{title}</span>
    </label>
  )
}