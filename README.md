# 💰 Spend Bill Gates' Money

Bill Gates'in 100 milyar dolarlık servetini harcayabileceğiniz eğlenceli ve interaktif bir React uygulaması.

**Teknolojiler:** React 19.2.0 | TypeScript 5.9 | Vite 7.2

## 🎮 Demo

Uygulamayı çalıştırarak Bill Gates'in parasını harcamaya başlayın!

## ✨ Özellikler

- 💵 **100 Milyar Dolar** başlangıç bakiyesi
- 🛒 **40+ farklı ürün** - Big Mac'ten NBA takımına kadar
- 🎬 **Animasyonlu para azaltma** - Para harcadığınızda sayaç kademeli olarak düşer
- 📝 **Dinamik fiş sistemi** - Satın aldığınız ürünlerin listesi ve toplam tutar
- 🔄 **Alım/Satım** - Ürünleri alabilir ve geri satabilirsiniz
- 📱 **Responsive tasarım** - Tüm cihazlarda uyumlu

## 🛠️ Teknolojiler

| Teknoloji | Versiyon | Açıklama |
|-----------|----------|----------|
| React | 19.2.0 | UI kütüphanesi |
| TypeScript | 5.9 | Tip güvenliği |
| Vite | 7.2 | Build tool |
| ESLint | 9.x | Kod kalitesi |

## 🚀 Kurulum

### Gereksinimler

- Node.js (v18 veya üzeri)
- npm veya yarn

### Adımlar

```bash
# Projeyi klonlayın
git clone https://github.com/kullanici/spend-bill-gates-money.git

# Proje dizinine gidin
cd spend-bill-gates-money

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Uygulama varsayılan olarak `http://localhost:5173` adresinde çalışacaktır.

## 📜 Kullanılabilir Scriptler

| Script | Açıklama |
|--------|----------|
| `npm run dev` | Geliştirme sunucusunu başlatır |
| `npm run build` | Projeyi production için derler |
| `npm run preview` | Production build'i önizler |
| `npm run lint` | ESLint ile kod kontrolü yapar |

## 📁 Proje Yapısı

```
src/
├── assets/
│   └── images/          # Ürün görselleri
├── components/
│   └── product-cards/   # Ürün kartı bileşeni
│       ├── index.ts
│       ├── product.card.tsx
│       └── product-card.css
├── data/
│   └── products.ts      # Ürün verileri
├── App.tsx              # Ana uygulama bileşeni
├── App.css              # Ana stiller
├── main.tsx             # Giriş noktası
└── index.css            # Global stiller
```

## 🎯 Nasıl Çalışır?

1. **Başlangıç**: 100.000.000.000$ ile başlarsınız
2. **Satın Alma**: "Buy" butonuna tıklayarak ürün satın alın
3. **Satış**: Aldığınız ürünleri "Sell" butonu ile geri satın
4. **Fiş**: Sağ tarafta aldığınız ürünlerin listesini görün
5. **Animasyon**: Para harcadığınızda üstteki sayaç kademeli olarak azalır


## 🤝 Katkıda Bulunma

1. Bu repoyu fork edin
2. Feature branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeni-ozellik`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🙏 Teşekkürler

- [Neal.fun](https://neal.fun/spend/) - Orijinal konsept için ilham
- Patika.dev - Frontend eğitim programı

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!