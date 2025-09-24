// Datos de ejemplo para productos (en producción, usa Firestore o JSON externo)
const products = [
  { id: 1, name: 'Ebook de Diseño', price: 10, image: 'assets/images/ebook.jpg', category: 'Ebooks' },
    { id: 2, name: 'Curso de Marketing', price: 50, image: 'assets/images/curso.jpg', category: 'Cursos' },
    ];

    // Mostrar productos destacados
    function displayFeaturedProducts() {
      const container = document.getElementById('featured-products');
        container.innerHTML = products.map(product => `
            <div class="product-card">
                  <img src="${product.image}" alt="${product.name}">
                        <h3 data-i18n="${product.name}">${product.name}</h3>
                              <p><span class="price" data-price="${product.price}">${product.price}</span> <span class="currency">USD</span></p>
                                    <button onclick="addToCart(${product.id})" data-i18n="add_to_cart">Añadir al Carrito</button>
                                        </div>
                                          `).join('');
                                          }

                                          // Inicializar
                                          document.addEventListener('DOMContentLoaded', () => {
                                            displayFeaturedProducts();
                                            });