import './ProductCard.css'

type ProductCardProps = {
    imgSrc: string
    productName: string
    price: number
    quantity: number
    handleBuy: () => void
    handleSell: () => void
}

export function ProductCard({ imgSrc, productName, price, quantity, handleBuy, handleSell }: ProductCardProps) {
    return (
        <div className="product-card">
            <img src={imgSrc} alt={productName} className="product-card__image" />
            <h3 className="product-card__name">{productName}</h3>
            <p className="product-card__price">${price.toLocaleString("en-US")}</p>
            <div className="product-card__actions">
                <button onClick={handleSell} disabled={quantity === 0}>Sell</button>
                <span className="product-card__quantity">{quantity}</span>
                <button onClick={handleBuy}>Buy</button>
            </div>
        </div>
    )
}
