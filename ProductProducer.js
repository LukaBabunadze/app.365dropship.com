export const itemProducer = (product) => {
    const HTML = `
            <div class="catalog__item">
                        <div class="catalog__item-photo">
                            <img src="${product.image}">
                        </div>
                        <div class="catalog__item-name">
                            <b>${product.title}</b>
                        </div>
                        <div class="catalog__item-price">
                            ${product.price}$
                        </div>

                   </div>
    `
    return HTML;
}
