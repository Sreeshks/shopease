function logout() {
    // Implement logic for user logout
    console.log("Logging out...");
}

document.getElementById('search-button').addEventListener('click', function() {
    var searchTerm = document.getElementById('search-box').value;
    // Simulated product data, replace with actual data from database
    var products = [
        { name: 'Nike Air Max 90', brand: 'Nike', location: 'USA', price: '$120' },
        { name: 'Adidas Ultraboost', brand: 'Adidas', location: 'Germany', price: '$180' },
        { name: 'Puma RS-X', brand: 'Puma', location: 'Germany', price: '$100' },
        { name: 'Reebok Classic Leather', brand: 'Reebok', location: 'USA', price: '$80' },
        { name: 'New Balance 990v5', brand: 'New Balance', location: 'USA', price: '$175' }
        // Add more shoe names as needed
    ];

    var productFound = false;
    var productDetails = '';

    products.forEach(function(product) {
        if (product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            productFound = true;
            productDetails += `<h2>${product.name}</h2>`;
            productDetails += `<p><strong>Brand:</strong> ${product.brand}</p>`;
            productDetails += `<p><strong>Location:</strong> ${product.location}</p>`;
            productDetails += `<p><strong>Price:</strong> ${product.price}</p>`;
        }
    });

    if (productFound) {
        document.getElementById('product-details').innerHTML = productDetails;
    } else {
        document.getElementById('product-details').innerHTML = '<p>Product not found!</p>';
    }
});
