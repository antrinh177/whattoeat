import React from "react";
import { useRouter } from "next/router";
import styles from '../styles/HomePage.module.css'; 

function Home(){
    const router = useRouter();

    // Function to get a random recipe
    const getRandomRecipe = () => {
        const timestamp = Date.now();
        router.push(`/ResultPage?type=random&time=${timestamp}`); 
    };

    // Function to navigate to the custom dish search page
    const customRecipe = () => {
        router.push("/SearchPage"); 
    };

    // Function to navigate to the favorite dishes page
    const goToFavorites = () => {
        router.push("/FavoriteDishesPage");
    };

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    return(
        <div>
            <nav className={styles.navbar}>
                <button onClick={scrollToTop}>Home</button>
                <button onClick={goToFavorites}>Favorite Dishes</button>
            </nav>
            <div>
                <h1>WHAT TO EAT?</h1>
            </div>
            <div>
                <button onClick={getRandomRecipe}>Get Random Dish</button> {/* Fetch random dish*/}
                <button onClick={customRecipe}>Customize Your Dish</button> {/*Navigate to dish customization pagepage*/}
            </div>
        </div>
    )
}

export default Home;