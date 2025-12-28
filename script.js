// 1️⃣ Get affiliate ref from site URL (?ref=xxxx)
const params = new URLSearchParams(window.location.search);
const affiliateRef = params.get("ref") || "direct";

// 2️⃣ Your Apps Script mini-app base URL
const MINI_APP_URL =
  "https://script.google.com/macros/s/AKfycbz06tXfETSy34MsfcKNVWMw3C08SQtNA8Aq0g5oI60vHvNSrqjKQzZljS0GbkgctDIJNQ/exec";

// 3️⃣ Products list
const products = [
  {
    id: "pdt_ANjXatzKvUuliwpfkodzs",
    name: "Test Product",
    description: "This is a test product",
    price: "৳2542"
  }
];

// 4️⃣ Render products
const grid = document.getElementById("product-grid");
grid.innerHTML = "";

products.forEach(p => {
  const buyLink =
    `${MINI_APP_URL}?ref=${encodeURIComponent(affiliateRef)}&product=${p.id}`;

  const div = document.createElement("div");
  div.innerHTML = `
    <h3>${p.name}</h3>
    <p>${p.description}</p>
    <strong>${p.price}</strong><br><br>
    <a href="${buyLink}" target="_blank">Buy</a>
  `;

  grid.appendChild(div);
});
