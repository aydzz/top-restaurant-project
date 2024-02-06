// Assets: Images
import "./assets/img/aydzz-hero.png";
import "./assets/img/logo-light.svg";

//Assets: Styling
import "./assets/css/style.css"; // use compiled css for now


import AboutUs from "./components/about_us";
import Menu from "./components/menu";
import { couldStartTrivia } from "typescript";

/**
 * 
 * @param {HTMLElement} element 
 */
function domClassList(element) {
    this.element = element;
    const _this = this;
    this.remove = function (className) {
        _this.element.classList.remove(className);
        return _this;
    }
    this.add = function (className) {
        _this.element.classList.add(className);
        return _this;
    }
}

function render(menu="menu") {
    const location = window.location;
    const content = document.querySelector(".content-container__content");


    console.log("menu in render: ", menu);
    if (content) {
        //Clean-up
        content.innerHTML = ""; // clear all content 
        new domClassList(content)
            .remove("menu")
            .remove("home")
            .remove("about-us");

        document.querySelectorAll(".header__navbar__menu__item").forEach(function(item){
            item.classList.remove("active");
        })
        
        if (menu === "home" || menu === null ||  menu === undefined || menu === "") {
            document.querySelector(".header__navbar__menu__item[data-link=home]").classList.add("active")
            //reusing menu for now
            const content = document.querySelector(".content-container__content");
            if (content) {
                content.classList.add("home");
                const menuList = Menu.components.menuList();
                console.log(menuList);
                Menu.data.forEach(function (item) {
                    menuList.appendChild(Menu.components.menuCard(item))
                })
                content.append(menuList);
            } else {
                throw new Error("Missing content Area")
            }
        } else if (menu === "about") {
            console.log("Rendering for About")
            document.querySelector(".header__navbar__menu__item[data-link=about]").classList.add("active");
            const content = document.querySelector(".content-container__content");
            if (content) {
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
                        title: "Indulge in Culinary Master",
                        imgSrc: "https://picsum.photos/1920/1080",
                        order: 2
                    }
                ].forEach(function (val) {
                    content.append(AboutUs.introduction(val))
                })

                //COMPONENT: Services
                content.append(AboutUs.services({
                    title: "Join the Culinary Experience - Savor Every Moment"
                }))
            } else {
                throw new Error("Missing content Area")
            }
        } else if (menu === "menu") {
            document.querySelector(".header__navbar__menu__item[data-link=menu]").classList.add("active");
            const content = document.querySelector(".content-container__content");
            if (content) {
                content.classList.add("menu");
                const menuList = Menu.components.menuList();
                console.log(menuList);
                Menu.data.forEach(function (item) {
                    menuList.appendChild(Menu.components.menuCard(item))
                })
                content.append(menuList);
            } else {
                throw new Error("Missing content Area")
            }
        }
    }else{
        console.log("NO CONENT");
    }

}

//Render instances
document.addEventListener("DOMContentLoaded", function (e) {
    render();
});

document.querySelectorAll(".header__navbar__menu__item").forEach(function(menuItem){
    menuItem.addEventListener("click", function(e){
        
        document.querySelector(".header__navbar__menu__item.active").classList.remove("active");//remove currently active item
        e.target.classList.add("active");
        render(e.currentTarget.getAttribute("data-link"));
    })
})
