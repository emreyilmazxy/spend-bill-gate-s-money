import billGates from '../../assets/images/billgates.jpg'
import './Header.css'

export function Header() {
    return (
        <header className='flex-wrapper'>
            <div className="img-wrapper">
                <img src={billGates} alt="Bill Gates" />
            </div>
            <h1 className='header-title'>spend bill gates' money</h1>
        </header>
    )
}
