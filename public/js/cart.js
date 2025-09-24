// Carrito en localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
      if (cartItem) {
          cartItem.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
                  }
                    localStorage.setItem('cart', JSON.stringify(cart));
                      alert('Producto añadido al carrito');
                      }

                      // En carrito.html, mostrar el carrito (crea carrito.html similar a index.html)
                      function displayCart() {
                        const container = document.getElementById('cart-items');
                          if (container) {
                              container.innerHTML = cart.map(item => `
                                    <div class="cart-item">
                                            <h3>${item.name}</h3>
                                                    <p>Precio: <span class="price" data-price="${item.price}">${item.price}</span> <span class="currency">USD</span></p>
                                                            <p>Cantidad: ${item.quantity}</p>
                                                                    <button onclick="removeFromCart(${item.id})">Eliminar</button>
                                                                          </div>
                                                                              `).join('');
                                                                                }
                                                                                }

                                                                                function removeFromCart(productId) {
                                                                                  cart = cart.filter(item => item.id !== productId);
                                                                                    localStorage.setItem('cart', JSON.stringify(cart));
                                                                                      displayCart();
                                                                                      }