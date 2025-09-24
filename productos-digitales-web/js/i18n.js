// Configuración de i18next
i18next.init({
  lng: 'es', // Idioma por defecto
    resources: {
        es: { translation: { home: 'Inicio', products: 'Productos', cart: 'Carrito', checkout: 'Checkout', welcome: 'Bienvenido a nuestra tienda de productos digitales', description: 'Descubre ebooks, cursos y plantillas para potenciar tu creatividad.', add_to_cart: 'Añadir al Carrito', footer: '© 2025 Productos Digitales. Todos los derechos reservados.' } },
            en: { translation: { home: 'Home', products: 'Products', cart: 'Cart', checkout: 'Checkout', welcome: 'Welcome to our digital products store', description: 'Discover ebooks, courses, and templates to boost your creativity.', add_to_cart: 'Add to Cart', footer: '© 2025 Digital Products. All rights reserved.' } },
                pt: { translation: { home: 'Início', products: 'Produtos', cart: 'Carrinho', checkout: 'Finalizar Compra', welcome: 'Bem-vindo à nossa loja de produtos digitais', description: 'Descubra ebooks, cursos e modelos para impulsionar sua criatividade.', add_to_cart: 'Adicionar ao Carrinho', footer: '© 2025 Produtos Digitais. Todos os direitos reservados.' } },
                  },
                  }, () => {
                    updateContent();
                    });

                    function updateContent() {
                      document.querySelectorAll('[data-i18n]').forEach(element => {
                          element.textContent = i18next.t(element.dataset.i18n);
                            });
                            }

                            document.getElementById('language-selector').addEventListener('change', (e) => {
                              i18next.changeLanguage(e.target.value, updateContent);
                              });