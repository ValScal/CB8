import styles from "./index.module.scss";

const Header = () => {
    return (
        <header>
          <div className={styles.LogoContainer}>
            <img src="././src/assets/img/forgetmenotes-logo.png" alt="Forget-me-not(e)s ToDo List App" />
           </div>
           <span>Add your notes:</span>
            <form className={styles.todoForm}>
            <input 
              className={styles.todoInput}
              type="text"
              name="text"
              placeholder="Today's todos"
            />
            <button type="submit" className={styles.todoBtn}>
              Add
            </button>
          </form>
        </header>
    );
 };
  
 export default Header;

