// Dados dos produtos
const products = [
    {
        name: 'Smartphone XYZ',
        description: 'O Smartphone XYZ possui câmera de 64MP, tela de 6.5" e bateria de longa duração.',
        price: '1499.99',
        imageUrl: 'https://via.placeholder.com/300x300'
    },
    {
        name: 'Notebook ABC',
        description: 'O Notebook ABC é perfeito para trabalho e estudos com desempenho e design incríveis.',
        price: '4999.99',
        imageUrl: 'https://via.placeholder.com/300x300'
    },
    {
        name: 'Fone de Ouvido Bluetooth',
        description: 'Fones de ouvido com tecnologia Bluetooth e bateria de longa duração para um som imersivo.',
        price: '399.99',
        imageUrl: 'https://via.placeholder.com/300x300'
    },
    {
        name: 'placa de video',
        description:'roda bem os jogos em 4k',
        price: '2000',
        imageUrl: 'img/placa-de-video-galax-nvidia-geforce-rtx-4060-1-click-oc-2x-8gb-gddr6-dlss-ray-tracing-46nsl8md8loc_175397.webp'
    }
];

// Função para criar e adicionar o produto ao HTML
function addProductToPage(product) {
    const productContainer = document.createElement('div');
    productContainer.classList.add('product-container');

    // Imagem do produto
    const productImage = document.createElement('div');
    productImage.classList.add('product-image');
    const image = document.createElement('img');
    image.src = product.imageUrl;
    image.alt = product.name;
    productImage.appendChild(image);

    // Detalhes do produto
    const productDetails = document.createElement('div');
    productDetails.classList.add('product-details');
    const title = document.createElement('h2');
    title.textContent = product.name;
    const description = document.createElement('p');
    description.textContent = product.description;
    const price = document.createElement('div');
    price.classList.add('price');
    price.textContent = 'R$ ' + parseFloat(product.price).toFixed(2);
    const addToCartButton = document.createElement('button');
    addToCartButton.classList.add('add-to-cart-button');
    addToCartButton.textContent = 'Adicionar ao Carrinho';
    addToCartButton.onclick = function() {
        alert(product.name + ' foi adicionado ao carrinho!');
    };

    // Adiciona os elementos ao container do produto
    productDetails.appendChild(title);
    productDetails.appendChild(description);
    productDetails.appendChild(price);
    productDetails.appendChild(addToCartButton);

    productContainer.appendChild(productImage);
    productContainer.appendChild(productDetails);

    // Adiciona o produto na lista
    document.getElementById('productList').appendChild(productContainer);
}

// Adiciona todos os produtos ao HTML
products.forEach(product => {
    addProductToPage(product);
});