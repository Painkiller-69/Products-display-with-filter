interface Product {
  title: string;
  image: string;
  price: number;
  description: string;
}

const products: Product[] = [
  {
    title: "Product1",
    image: "https://picsum.photos/200",
    price: 380,
    description: "first product"
  },
  {
    title: "Product2",
    image: "https://picsum.photos/200",
    price: 980,
    description: "second product"
  },
  {
    title: "Product3",
    image: "https://picsum.photos/200",
    price: 1200,
    description: "third product"
  }
];

// User Story 1: Display all products
const productListDiv: HTMLElement | null = document.getElementById("productList");
products.forEach((product: Product) => {
  const productDiv: HTMLDivElement = document.createElement("div");
  productDiv.innerHTML = `
    <h3>${product.title}</h3>
    <img src="${product.image}" alt="${product.title}">
    <p>Price: $${product.price}</p>
    <p>Description: ${product.description}</p>
  `;
  if (productListDiv) {
    productListDiv.appendChild(productDiv);
  }
});

// User Story 2: Display product names in select dropdown
const productSelect: HTMLSelectElement | null = document.getElementById("productSelect") as HTMLSelectElement;
products.forEach((product: Product, index: number) => {
  const option: HTMLOptionElement = document.createElement("option");
  option.value = index.toString();
  option.text = product.title;
  if (productSelect) {
    productSelect.appendChild(option);
  }
});


// User Story 3: Display selected product details
function showProductDetails(): void {
  const productSelect: HTMLSelectElement | null = document.getElementById("productSelect") as HTMLSelectElement;
  const selectedIndex: number = parseInt(productSelect?.value || "0");
  const selectedProduct: Product = products[selectedIndex];
  const productDetailsDiv: HTMLElement | null = document.getElementById("productDetails");
  const productListDiv: HTMLElement | null = document.getElementById("productList");

  // Clear existing product details
  if (productDetailsDiv) {
    productDetailsDiv.innerHTML = "";
  }

  // Hide product list
  if (productListDiv) {
    productListDiv.style.display = "none";
  }

  // Render selected product details
  if (productDetailsDiv) {
    productDetailsDiv.innerHTML = `
      <h3>${selectedProduct.title}</h3>
      <img src="${selectedProduct.image}" alt="${selectedProduct.title}">
      <p>Price: $${selectedProduct.price}</p>
      <p>Description: ${selectedProduct.description}</p>
    `;
  }
}
