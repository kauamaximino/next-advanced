import Link from 'next/link'
import {useRouter} from 'next/router'
import { navigationLinks } from '../../utils/data'
import styles from './Navbar.module.css'

const Navbar = () => {
  const router = useRouter()

  const activeLink = (loopPath: string) => {
    if (loopPath === '/' && router.pathname !== '/') return null;

    if (router.pathname.indexOf(loopPath) === 0) {
      return styles.linkActive;
    }

    return null
  }

  return (
    <ul className={styles.container}>
      {navigationLinks.map(({ label, path }) => (
        <li className={[
          styles.linkItem,
          activeLink(path)
        ].join(" ")} key={path}>
          <Link href={path}>
            {label}
          </Link>
        </li>
      ))}
      <li>{router.pathname}</li>
    </ul>
  )
}

export default Navbar