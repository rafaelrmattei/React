import { ButtonHTMLAttributes } from 'react'
import { Trash } from '@phosphor-icons/react'

import styles from './ButtonDelete.module.css'

export function ButtonDelete(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={styles.buttonDelete}
      {...props}
    >
      <Trash size={16} weight={'bold'} />
    </button>
  )
}