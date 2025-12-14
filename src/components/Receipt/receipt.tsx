import { products } from '../../data/products'
import './Receipt.css'

type PurchasedItems = {
    [productId: number]: number
}

type ReceiptProps = {
    purchasedItems: PurchasedItems
    totalSpent: number
}

export function Receipt({ purchasedItems, totalSpent }: ReceiptProps) {
    if (Object.keys(purchasedItems).length === 0) return null;

    return (
        <aside className='receipt'>
            <h2 className='receipt__title'>Your Receipt</h2>

            <ul className="receipt__list">
                {Object.entries(purchasedItems).map(([productId, quantity]) => {
                    const product = products.find(p => p.id === Number(productId));
                    if (!product || quantity === 0) return null;
                    return (
                        <li key={productId} className="receipt__list-items">
                            {product.name}
                            <span className="receipt__item-qty">x{quantity}</span>
                            <span className="receipt__item-price">${(product.price * quantity).toLocaleString("en-US")}</span>
                        </li>
                    );
                })}
            </ul>

            <div className='receipt__total'>
                <h3 className='receipt__total-name'>Total:</h3>
                <p className='receipt__total-price'>${totalSpent.toLocaleString("en-US")}</p>
            </div>
        </aside>
    )
}
