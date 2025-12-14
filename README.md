<div align="center">
  <h1>💰 Spend Bill Gates' Money</h1>
  <p><strong>Bill Gates'in servetini harcayarak eğlenceli bir alışveriş deneyimi yaşayın!</strong></p>
  
  <p>
    <a href="https://spend-bill-gates-moneyy.netlify.app/">🌐 Canlı Demo</a> •
    <a href="#özellikler">Özellikler</a> •
    <a href="#kurulum">Kurulum</a> •
    <a href="#kullanım">Kullanım</a> •
    <a href="#proje-yapısı">Proje Yapısı</a>
  </p>

  <a href="https://spend-bill-gates-moneyy.netlify.app/">
    <img src="https://img.shields.io/badge/Demo-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify Demo" />
  </a>
  <img src="https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</div>

---

## 🌐 Demo

**[👉 Canlı Demoyu Görüntüle](https://spend-bill-gates-moneyy.netlify.app/)**

## 📖 Hakkında

Bu proje, Bill Gates'in yaklaşık **100 milyar dolarlık** servetini harcamanızı simüle eden interaktif bir web uygulamasıdır. Çeşitli ürünler satın alarak bu devasa miktarı harcamaya çalışın!

## ✨ Özellikler

| Özellik | Açıklama |
|---------|----------|
| 💵 **Başlangıç Sermayesi** | 100.000.000.000$ ile başlayın |
| 🛒 **Alım-Satım** | Ürünleri satın alın veya geri satın |
| 📊 **Animasyonlu Sayaç** | Para değişimlerini animasyonlu görün |
| 🧾 **Canlı Fatura** | Anlık güncellenen alışveriş faturası |
| 📱 **Responsive Tasarım** | Tüm cihazlarda uyumlu görünüm |

## 🚀 Kurulum

### Gereksinimler

- Node.js (v18 veya üzeri)
- npm veya yarn

### Adımlar

```bash
# Repoyu klonlayın
git clone https://github.com/username/spend-bill-gates-money.git

# Proje dizinine gidin
cd spend-bill-gates-money

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Uygulama varsayılan olarak `http://localhost:5173` adresinde çalışacaktır.

## 🎮 Kullanım

1. Sayfa yüklendiğinde 100 milyar dolar bakiyeniz olacak
2. Ürün kartlarındaki **Buy** butonuyla satın alın
3. **Sell** butonuyla ürünleri geri satın
4. Sağ taraftaki faturadan toplam harcamanızı takip edin

## 📁 Proje Yapısı

```
src/
├── assets/
│   └── images/
│       └── billgates.jpg          # Bill Gates profil resmi
├── components/
│   ├── Header/
│   │   ├── index.tsx              # Header bileşeni
│   │   └── Header.css             # Header stilleri
│   ├── MoneyBar/
│   │   ├── index.tsx              # Para göstergesi bileşeni
│   │   └── MoneyBar.css           # MoneyBar stilleri
│   ├── ProductCard/
│   │   ├── index.tsx              # Ürün kartı bileşeni
│   │   └── ProductCard.css        # ProductCard stilleri
│   └── Receipt/
│       ├── index.tsx              # Fatura bileşeni
│       └── Receipt.css            # Receipt stilleri
├── data/
│   └── products.ts                # Ürün verileri
├── App.tsx                        # Ana uygulama bileşeni
├── App.css                        # Genel stiller
└── main.tsx                       # Uygulama giriş noktası
```

## 🧩 Bileşenler

### `<Header />`
Bill Gates'in profil resmi ve uygulama başlığını içerir.

### `<MoneyBar />`
Kalan bakiyeyi gösteren sticky header. Animasyonlu para değişimi efekti içerir.

### `<ProductCard />`
Her ürün için satın alma/satma butonları ve miktar göstergesi içeren kart bileşeni.

**Props:**
| Prop | Tip | Açıklama |
|------|-----|----------|
| `imgSrc` | `string` | Ürün resmi URL'i |
| `productName` | `string` | Ürün adı |
| `price` | `number` | Ürün fiyatı |
| `quantity` | `number` | Satın alınan miktar |
| `handleBuy` | `() => void` | Satın alma fonksiyonu |
| `handleSell` | `() => void` | Satma fonksiyonu |

### `<Receipt />`
Satın alınan tüm ürünlerin listesi ve toplam harcamayı gösteren fatura bileşeni.

## 🛠️ Teknolojiler

- **React 18** - UI kütüphanesi
- **TypeScript** - Tip güvenliği
- **Vite** - Build tool ve dev server
- **CSS3** - Styling

## 📜 Scriptler

| Script | Açıklama |
|--------|----------|
| `npm run dev` | Geliştirme sunucusunu başlatır |
| `npm run build` | Prodüksiyon için build alır |
| `npm run preview` | Build'i önizler |
| `npm run lint` | ESLint ile kod kontrolü |

## 🤝 Katkıda Bulunma

1. Bu repoyu fork edin
2. Feature branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeni-ozellik`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

---

<div align="center">
  <p>⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!</p>
  <p>Made with ❤️ using React & TypeScript</p>
</div>