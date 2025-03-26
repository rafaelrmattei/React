import { ButtonHTMLAttributes } from 'react'
import { PlusCircle } from "@phosphor-icons/react"

import styles from './ButtonCreate.module.css'

export function ButtonCreate(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={styles.buttonCreate}
      {...props}
    >
      Criar
      <PlusCircle size={20} weight={"bold"} />
    </button>
  )
}