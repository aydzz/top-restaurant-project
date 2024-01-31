function headline(){
    const htmlString = `
        <section class="about-us__headline">
            <h1>Crafting Culinary Experiences for Every Palate - From Cozy Cafés to Esteemed Establishment</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda suscipit ratione iusto laudantium dolores ut! Magnam distinctio rerum explicabo officia eius nulla et architecto similique voluptatum voluptatem perspiciatis, iusto facilis?</p>
        </section>
    `;
    return new DOMParser().parseFromString(htmlString, "text/html").body.firstChild;
}

export default headline;