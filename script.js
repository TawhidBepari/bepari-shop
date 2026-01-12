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
  "https://script.google.com/macros/s/AKfycbxRJY4fN1oqPpAdacfhfWbO7SXNKj0rZL2zIZJeBLUayXWiUESZMUwbK9N0Rq7xse92Zw/exec";

/***********************
 * 3️⃣ Products (UI only — product ID must match Dodo)
 ***********************/
const products = [
   {
    id: "pdt_0NW8729RFoWsc3DZPdlol",
    name: "THE WEIGHT LOSS RECIPE BOOK",
    description: "45 Healthy, Flavorful & Low-Calorie Recipes for Everyday Weight Loss",
    price: "$29.00",
    image: "product2.jpg"   // must exist in site root
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

  // Image is optional — prevents script crash if missing
  const imgHTML = p.image
    ? `<img class="product-image" src="${p.image}" alt="${p.name}">`
    : "";

  div.innerHTML = `
    ${imgHTML}
    <h3>${p.name}</h3>
    <p>${p.description}</p>
    <strong>${p.price}</strong><br><br>
    <a class="buy-button" href="${buyLink}" target="_blank" rel="noopener">
      Buy
    </a>
  `;

  grid.appendChild(div);
});
