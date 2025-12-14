import './product-card.css'

type ProductCardProps = {
    imgSrc: string;
    productName: string;
    price: number;
    quantity: number;
    handleBuy: () => void;
    handleSell: () => void;
}

const ProductCard = ({ imgSrc, productName, price, quantity, handleBuy, handleSell }: ProductCardProps) => {
    return (
        <div className='product-card'>

            <div className="product-img-wrapper">
                <img src={imgSrc} alt={productName} />
            </div>

            <h2 className='product-title'>{productName}</h2>
            <p className='product-price'>${price.toLocaleString('en-US')}</p>
            <div className='btn-input-group'>
                <button
                    className={`sell-btn ${quantity > 0 ? 'sell-btn--active' : ''}`}
                    onClick={handleSell}
                    disabled={quantity === 0}
                >
                    sell
                </button>
                <input className='product-amount' type="number" value={quantity} readOnly />
                <button className='buy-btn' onClick={handleBuy}>buy</button>
            </div>

        </div>
    )
}

export default ProductCard