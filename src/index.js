// Assets: Images
import "./assets/img/aydzz-hero.png";
import "./assets/img/logo-light.svg";

//Assets: Styling
import "./assets/css/style.css"; // use compiled css for now


import AboutUs from "./components/about_us";


document.addEventListener("DOMContentLoaded",function(e){
    console.log("Document is ready.");
    const location = window.location;
    console.log(location.hash.substring(1,location.hash.length));
    if(location.hash === "" || location.hash.substring(1,location.hash.length) === "home"){
        
    }else if(location.hash.substring(1,location.hash.length) === "about"){
        const content = document.querySelector(".content-container__content");
        if(content){
            content.classList.add("about-us");
            //COMPONENT: Headline
            content.append(AboutUs.headline());

            //COMPONENT: Introductions
            [
                {
                    title: "Elevating Culinary Excellence",
                    imgSrc: "https://picsum.photos/1080/720",
                    order: 1
                }, 
                {
                    title:  "Indulge in Culinary Master",
                    imgSrc: "https://picsum.photos/1920/1080",
                    order: 2
                }
            ].forEach(function(val){
                content.append(AboutUs.introduction(val))
            })

            //COMPONENT: Services
            content.append(AboutUs.services({
                title: "Join the Culinary Experience - Savor Every Moment"
            }))
        } 
    }else if(location.hash.substring(1,location.hash.length) === "menu"){

    }
});
