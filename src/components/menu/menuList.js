function menuList(){
    const htmlString = `
    <section class="menu__list">
                
    </section>
    `

    return new DOMParser().parseFromString(htmlString,"text/html").body.firstChild;
}

export default menuList;