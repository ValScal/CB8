import styles from './index.module.scss'

export default function Page404() {
  return (
    <div className={styles.Page404}>
      <h1>Oops!</h1>
      <h4>404 - PAGE NOT FOUND</h4>
      <p>The page you are looking for might have been removed, changed or is temporarily unavailable. Please try again later.</p>
    </div>
  )
}
