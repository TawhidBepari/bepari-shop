/***********************
 * 1️⃣ Read affiliate ref from Netlify page URL
 * Example:
 * https://yoursite.netlify.app/?ref=affiliate123
 ***********************/
const params = new URLSearchParams(window.location.search);
const affiliateRef = params.get("ref") || "direct";

/***********************
 * 2️⃣ Apps Script mini-app URL (DO NOT change params)
 ***********************/
const MINI_APP_URL =
  "https://script.google.com/macros/s/AKfycbwE8-VPhYwLRXvuXr4YJQx-8rN4iDBY_VAv1_jZYYBWFGZS1dkBdtGlVl0FQZhGptDprQ/exec";

/***********************
 * 3️⃣ Products (UI only — product ID must match Dodo)
 ***********************/
const products = [
  {
    id: "pdt_ANjXatzKvUuliwpfkodzs",
    name: "Test Product",
    description: "This is a test product",
    price: "৳2542"
  }
];

/***********************
 * 4️⃣ Render products + Buy buttons
 ***********************/
const grid = document.getElementById("product-grid");
grid.innerHTML = "";

products.forEach(p => {
  // IMPORTANT:
  // Buy button goes to Apps Script, NOT Dodo
  const buyLink =
    `${MINI_APP_URL}?ref=${encodeURIComponent(affiliateRef)}&product=${p.id}`;

  const div = document.createElement("div");
div.innerHTML = `
  <img class="product-image" src="${p.image}" alt="${p.name}">
  <h3>${p.name}</h3>
  <p>${p.description}</p>
  <strong>${p.price}</strong><br><br>
  <a class="buy-button" href="${buyLink}" target="_blank" rel="noopener">
    Buy
  </a>
`;

  grid.appendChild(div);
});
