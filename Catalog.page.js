import {getProductsData} from "./API.js";
import {itemProducer} from "./ProductProducer.js";

const catalog = document.getElementsByClassName('main__catalog')[0];
const sortHTML = document.getElementById('sort');
const searchInput = document.getElementById('searchQuery');
const searchButton = document.getElementById('searchButton');



searchButton.addEventListener('click', () => {
    getProductsData(sort).then(result => {
        const filteredProducts = result.filter((product) => product.title.indexOf(searchInput.value) != -1);
        let HTML = '';
        for(const product of filteredProducts) {
            HTML += itemProducer(product);
        }
        catalog.innerHTML = HTML;
    })
})




const fillUpCatalog = async(sort = null) => {
    const productList = await getProductsData(sort);
    let HTML = '';
    for(const product of productList) {
        HTML += itemProducer(product);
    }
    catalog.innerHTML = HTML;
}

fillUpCatalog();

sortHTML.addEventListener('change', () => {
    fillUpCatalog(sortHTML.value);
})



