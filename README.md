### Notebook-App (React, Context API, Material-UI)

- Kişisel dijital not defteri uygulaması.
- Kullanıcılar **kayıt olabiliyor** ve verileri **LocalStorage** üzerinde saklanıyor.
- Giriş yapan kullanıcılar, **anasayfa** üzerinde tüm kullanıcıların paylaştığı notları görebiliyor. Notlar **kare kartlar** halinde listeleniyor.
- Her not **Başlık, İçerik ve Kategori** olmak üzere üç alandan oluşuyor.
- **Not ekleme** ve **arama** fonksiyonları mevcut. Navbar üzerindeki **arama kutusu** ile tüm notlar içinde anlık filtreleme yapılabiliyor.
- Kullanıcılar **profil sayfasına** giderek sadece kendilerine ait notları görüntüleyebiliyor ve dilediklerini silebiliyor.
- **Sayfa yönlendirmeleri için React Router yerine Context API ve Reducer yapısı** kullanıldı. Uygulama içindeki `currentPage` state’i context üzerinden kontrol edilerek sayfa geçişleri sağlandı.
- Arayüz tasarımında **Material-UI** bileşenleri kullanıldı. Modern ve responsive tasarıma sahip.
- **LocalStorage** kullanımı sayesinde veriler tarayıcıda kalıcı olarak saklanıyor ve uygulama offline kullanılabiliyor.
- **Context API** üzerinden global state yönetimiyle kullanıcı, notlar ve sayfa geçiş durumları kontrol ediliyor.

**Kullanılan Teknolojiler:** React, Context API, Reducer, LocalStorage, Material-UI

Çalıştırmak için:
```
npm install
npm run dev
