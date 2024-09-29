let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr //innerText
    countEl.textContent = 0
    count = 0
}
/*innerText ve textContent arasındaki temel farklar şunlardır:

    Görünür Metin:
        innerText: Sadece görünür metni alır. CSS ile gizlenmiş metinleri içermez.
        textContent: Elemanın içindeki tüm metni alır; görünür ya da görünmez fark etmez.

    Boşluk ve Satır Sonları:
        innerText: Boşlukları ve satır sonlarını tarayıcıya göre işler, bu yüzden görünümdeki düzenlemeleri yansıtır.
        textContent: Tüm metni, boşlukları da dahil olmak üzere olduğu gibi alır ve düzenlemez.

    Performans:
        innerText: Tarayıcı, stil bilgilerini hesaplarken biraz daha yavaş olabilir, çünkü görünür metni elde etmek için ek işlem gerektirir.
        textContent: Daha hızlıdır çünkü sadece metin düğümlerine erişir.

    Tarayıcı Uyumu:
        innerText: Tüm tarayıcılarda desteklenir, ancak davranışları arasında farklılıklar olabilir.
        textContent: Modern tarayıcılarda yaygın olarak desteklenir ve daha tutarlıdır. */

