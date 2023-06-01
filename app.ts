interface Product {
    title: string;
    image: string;
    price: number;
    description: string;
  }
  
  const products: Product[] = [
    {
      "title": "Product1",
      "image": "https://picsum.photos/200",
      "price": 380,
      "description": "first product"
    },
    {
      "title": "Product2",
      "image": "https://picsum.photos/200",
      "price": 980,
      "description": "second product"
    },
    {
      "title": "Product3",
      "image": "https://picsum.photos/200",
      "price": 1200,
      "description": "third product"
    }
  ];
  
  // User Story 1: Display all the products in UI
  const productList = document.getElementById("productList");
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>Price: ${product.price}</p>
      <p>Description: ${product.description}</p>
    `;
    productList.appendChild(productElement);
  });
  
  // User Story 2: Display all the product names in select (drop-down)
  const productSelect = document.getElementById("productSelect") as HTMLSelectElement;
  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.title;
    option.textContent = product.title;
    productSelect.appendChild(option);
  });
  
  // User Story 3: On selecting any product from the list, display the product details of the selected product only.
  function displayProductDetails() {
    const selectedProduct = productSelect.value;
    const productDetails = document.getElementById("productDetails");
    productDetails.innerHTML = "";
  
    if (selectedProduct) {
      const selectedProductData = products.find(
        (product) => product.title === selectedProduct
      );
  
      const productElement = document.createElement("div");
      productElement.innerHTML = `
        <img src="${selectedProductData.image}" alt="${selectedProductData.title}">
        <h3>${selectedProductData.title}</h3>
        <p>Price: ${selectedProductData.price}</p>
        <p>Description: ${selectedProductData.description}</p>
      `;
      productDetails.appendChild(productElement);
    }
  }
  