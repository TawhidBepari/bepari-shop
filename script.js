const products = [
  {
    name: "Test Product",
    description: "This is a test product",
    price: "৳2542",
    buy_url: "https://test.checkout.dodopayments.com/buy/pdt_ANjXatzKvUuliwpfkodzs?quantity=1"
  }
];

const grid = document.getElementById("product-grid");

products.forEach(p => {
  const div = document.createElement("div");
  div.innerHTML = `
    <h3>${p.name}</h3>
    <p>${p.description}</p>
    <strong>${p.price}</strong><br><br>
    <a href="${p.buy_url}" target="_blank">Buy</a>
  `;
  grid.appendChild(div);
});

