import './MoneyBar.css'

type MoneyBarProps = {
    displayMoney: number
}

export function MoneyBar({ displayMoney }: MoneyBarProps) {
    return (
        <aside className='money-bar'>
            <p>${displayMoney.toLocaleString("en-US")}</p>
        </aside>
    )
}
