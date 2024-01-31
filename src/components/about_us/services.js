function services(props={
    title: "Join the Culinary Experience - Savor Every Moment"
}){
    const htmlString = `
        <section class="about-us__services">
            <h1>${props.title}</h1>
            <ul class="about-us__services__list">
                <li class="about-us__services__list__item">
                    <i class="bi bi-egg-fried"></i>
                    <p>Catering Services</p>
                </li>
                <li class="about-us__services__list__item">
                    <i class="bi bi-calendar"></i>
                    <p>Events</p>
                </li>
                <li class="about-us__services__list__item">
                    <i class="bi bi-buildings"></i>
                    <p>Venue</p>
                </li>
            </ul>
        </section>
    `
    return new DOMParser().parseFromString(htmlString,"text/html").body.firstChild;
}

export default services;