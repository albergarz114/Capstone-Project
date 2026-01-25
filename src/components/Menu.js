import React from "react";
import recipes from "../recipes";
import Swal from "sweetalert2";
import { useTheme } from "./ThemeContext";
// I deleted node_modules-> Please use: 'npm install' on your terminal 
const Menu = () => {

    const { isDarkMode, isGerman } = useTheme();
    
    const handleOrder = (id) => {
        console.log(id, "id is clicked");
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, order!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Ordered!",
                text: "Your has been processed.",
                icon: "success"
              });
            }
          });
    }
        return (
        <div className="menu-container" style={{backgroundColor: isDarkMode ? "black" : "white"}}>
            <div className="menu-header">
                <h2>{ isGerman ? "Dieses Woches Spezial!" : "This weeks specials!"}</h2>
                <button>{isGerman ? "Menu Bestellen" : "Order Menu"}</button>
            </div>

            <div className="cards">
                {
                    recipes.map(recipe => <div key={recipe.id} className="menu-items">
                        <img src={recipe.image} alt=""/>
                        <div className="menu-content">
                            <div className="heading">
                                <h5>{recipe.title}</h5>
                                <p>{recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                            <button className="orderBtn" onClick={() => handleOrder(recipe.id)}>{isGerman ? "Jetzt Bestellen" : "Order Now"}</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};
export default Menu;