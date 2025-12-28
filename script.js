/**************************************
 * CONFIG
 **************************************/
const MINI_APP_URL =
  "https://script.google.com/macros/s/AKfycbz06tXfETSy34MsfcKNVWMw3C08SQtNA8Aq0g5oI60vHvNSrqjKQzZljS0GbkgctDIJNQ/exec";

/**************************************
 * PRODUCTS (STATIC FOR NOW)
 **************************************/
const products = [
  {
    id: "pdt_ANjXatzKvUuliwpfkodzs",
    name: "Test Product",
    description: "This is a test product",
    price: "৳2542"
  }
];

/**************************************
 * GET AFFILIATE REF FROM URL
 **************************************/
const params = new URLSearchParams(window.location.search);
const affiliateRef = params.get("ref") || "direct";

/**************************************
 * RENDER PRODUCTS
 **************************************/
const grid = document.getElementById("product-grid");

products.forEach(p => {
  const div = document.createElement("div");

  const buyLink =
    `${MINI_APP_URL}?ref=${encodeURIComponent(affiliateRef)}&product=${encodeURIComponent(p.id)}`;

  div.innerHTML = `
    <h3>${p.name}</h3>
    <p>${p.description}</p>
    <strong>${p.price}</strong><br><br>
    <a href="${buyLink}" target="_blank">Buy</a>
  `;

  grid.appendChild(div);
});
