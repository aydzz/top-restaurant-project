
/**
 * 
 * @param {{
 *   imageURL: string,
 *   name: string,
 *   description: string,
 *   price: number
 * }} props 
 * @returns 
 */
function menuCard(props){
    const htmlString = `
        <div class="menu__list__item">
            <div class="menu__list__item__image">
                <img src="${props.imageURL || `https://picsum.photos/seed/${props.name}/1080/720`}"></img>
            </div>
            <div class="menu__list__item__details">
                <h1 class="name">${props.name}</h1>
                <p class="description">
                    ${props.description}
                </p>
                <div class="price">
                    <span>$${Number(props.price).toFixed(2)}</span>
                </div>
            </div>
        </div>
    `

    return new DOMParser().parseFromString(htmlString, "text/html").body.firstChild;
}

export default menuCard;