import Button from '../button/Button'
import './index.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src="https://img.logoipsum.com/331.svg" alt="logo" />
            <div className='buttons__wrapper'>
                <Button textContent="Sign in" />
                <Button textContent="Sign up" />
            </div>
        </div>
    )
}

export default Navbar