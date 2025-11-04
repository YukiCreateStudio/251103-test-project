import Image from "next/image"
import styles from "./index.module.css"


export default function Header(){
  return(
    <header className={styles.header}>
      <a href="/" className={styles.logoLink}>
        <Image src="/logo.svg" alt="SIPLE" width={348} height={133} priority className={styles.logo}/>
      </a>
    </header>
  )
};
