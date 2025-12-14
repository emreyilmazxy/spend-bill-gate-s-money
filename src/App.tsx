import './App.css'
import { ProductCard } from './components/product-cards'
import { Header } from './components/Header'
import { MoneyBar } from './components/MoneyBar'
import { Receipt } from './components/Receipt'
import { products } from './data/products'
import { useState, useEffect } from 'react';

type PurchasedItems = {
  [productId: number]: number
}

function App() {
  const [beginningMoney, setBeginningMoney] = useState<number>(100000000000);
  const [displayMoney, setDisplayMoney] = useState<number>(100000000000);
  const [purchasedItems, setPurchasedItems] = useState<PurchasedItems>({});

  // Animated money decrease effect

  useEffect(() => {
    if (displayMoney === beginningMoney) return;

    const difference = displayMoney - beginningMoney;
    const step = Math.ceil(difference / 8); // 8 steps completion
    const duration = 15; // Each step 15ms

    const timer = setTimeout(() => {
      if (displayMoney > beginningMoney) {
        setDisplayMoney(prev => Math.max(beginningMoney, prev - step));
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [displayMoney, beginningMoney]);

  // total spent calculation
  const totalSpent = Object.entries(purchasedItems).reduce((total, [productId, quantity]) => {
    const product = products.find(p => p.id === Number(productId));
    return total + (product ? product.price * quantity : 0);
  }, 0);

  const handleBuy = (productId: number, price: number) => {
    if (beginningMoney >= price) {
      setBeginningMoney(prevMoney => prevMoney - price);
      setPurchasedItems(prevItems => ({
        ...prevItems,
        [productId]: (prevItems[productId] || 0) + 1
      }));
    } else {
      alert("Yetersiz bakiye!");
    }
  };

  const handleSell = (productId: number, price: number) => {
    if (purchasedItems[productId] > 0) {
      setBeginningMoney(prevMoney => prevMoney + price);
      setPurchasedItems(prevItems => ({
        ...prevItems,
        [productId]: prevItems[productId] - 1
      }));
    }
  };

  return (
    <div className="container" >
      <Header />

      <MoneyBar displayMoney={displayMoney} />

      <main id='products'>
        <section className='product-grid'>
          {products.map(product => (
            <ProductCard
              key={product.id}
              imgSrc={product.image}
              productName={product.name}
              price={product.price}
              quantity={purchasedItems[product.id] || 0}
              handleBuy={() => handleBuy(product.id, product.price)}
              handleSell={() => handleSell(product.id, product.price)}
            />
          ))}
        </section>

        {Object.values(purchasedItems).some(qty => qty > 0) && (
          <Receipt purchasedItems={purchasedItems} totalSpent={totalSpent} />
        )}

      </main>
    </div>
  )
}

export default App
