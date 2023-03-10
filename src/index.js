import AddRestaurant from "./components/AddRestaurant";
import BottomSheet from "./components/BottomSheet";
import CategorySelectBox from "./components/CategorySelectBox";
import NavBar from "./components/NavBar";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantList from "./components/RestaurantList";
import SortingSelectBox from "./components/SortingSelectBox";
import TabBar from "./components/TabBar";
import "./css/style.css";
import { restaurants } from "./domain/restaurants";

restaurants.create();

customElements.define("nav-bar", NavBar);
customElements.define("bottom-sheet", BottomSheet);
customElements.define("category-select-box", CategorySelectBox);
customElements.define("sorting-select-box", SortingSelectBox);
customElements.define("add-restaurant", AddRestaurant);
customElements.define("restaurant-list", RestaurantList);
customElements.define("tab-bar", TabBar);
customElements.define("restaurant-detail", RestaurantDetail);
