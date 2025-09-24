// Conversión de monedas usando ExchangeRate-API (regístrate para obtener una API key gratuita)
const apiKey = 'TU_API_KEY'; // Obtén tu key en https://www.exchangerate-api.com/
let rates = { USD: 1, EUR: 0.85, GBP: 0.75 }; // Valores de ejemplo, actualizar con API

async function fetchExchangeRates() {
  try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`);
          const data = await response.json();
              rates = data.conversion_rates;
                  updatePrices(document.getElementById('currency-selector').value);
                    } catch (error) {
                        console.error('Error fetching rates:', error);
                          }
                          }

                          function updatePrices(currency) {
                            document.querySelectorAll('.price').forEach(element => {
                                const basePrice = parseFloat(element.dataset.price);
                                    const convertedPrice = (basePrice * rates[currency]).toFixed(2);
                                        element.textContent = convertedPrice;
                                            document.querySelectorAll('.currency').forEach(c => c.textContent = currency);
                                              });
                                              }

                                              document.getElementById('currency-selector').addEventListener('change', (e) => {
                                                updatePrices(e.target.value);
                                                });

                                                // Inicializar (descomenta cuando tengas la API key)
                                                // fetchExchangeRates();