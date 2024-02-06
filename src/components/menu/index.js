import menuJson from "../../assets/data/menu.json";
import menuCard from "./menuCard";
import menuList from "./menuList";

const Menu = {
    data: menuJson.menu,
    components: {
        menuCard: menuCard,
        menuList: menuList
    }
}


export default Menu;