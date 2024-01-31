function introduction(props={
    title: "Example Title",
    imgSrc: "https://picsum.photos/1920/1080",
    order: 1
}){
    const htmlString = `
        <section class="about-us__introduction">
            ${
                props.order === 2 ? 
                `<div class="image">
                    <img src="${props.imgSrc}">
                </div>` : ""
            }
            <div class="article">
                <h1>${props.title}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus expedita vel incidunt quia neque provident, consectetur, totam molestiae atque, nobis quasi aliquid! Quos molestiae esse delectus eligendi consequatur ab sed!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo perspiciatis iure atque, porro beatae harum earum animi eveniet! Facere officia ipsa obcaecati commodi eaque iste labore eius odit. Odio, dolore.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel corrupti, repellat labore autem doloremque enim ratione alias cum odio sapiente quod quidem. Consectetur odio nihil reiciendis architecto eligendi blanditiis voluptatum!</p>
            </div>
           ${
                props.order === 1 ? 
                `<div class="image">
                    <img src="${props.imgSrc}">
                </div>` : ""
            }
        </section>
    `;

    return new DOMParser().parseFromString(htmlString, "text/html").body.firstChild;
}

export default introduction;