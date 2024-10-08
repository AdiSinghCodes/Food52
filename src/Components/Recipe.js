import React, { useState } from 'react';
import './Recipe.css';

const RecipePage = () => {
    const [darkMode, setDarkMode] = useState(false);

    const recipes = [
        {
            type: 'HEALTHY RECIPES',
            logo: 'healthy.jpg',
            dishes: [
                {
                    name: 'Detox Crockpot Lentil Soup',
                    description: 'A clean and simple soup made with lentils, onions, and garlic.',
                    image: 'detox.jpeg',
                    videoUrl: 'https://www.youtube.com/embed/HOK4QXF5qVM'
                },
                {
                    name: '5 Minute Magic Green Sauce',
                    description: 'A vegan green sauce made with avocado, garlic, and cilantro.',
                    image: 'greensauce.jpg',
                    videoUrl: 'https://www.youtube.com/embed/KZuLsHG-s2A'  // Correct embed link'
                },
                {
                    name: 'Chopped Thai-Inspired Chicken Salad',
                    description: 'Crisp, tangy, and spicy Thai-inspired salad with juicy chicken chunks.',
                    image: 'Thai.jpg',
                    videoUrl: 'https://www.youtube.com/embed/KsXxQ9vtrGc'  // Correct embed link'
                }
            ]
        },
        {
            type: 'MEAL PREP RECIPES',
            logo: 'meallogo.png',
            dishes: [
                {
                    name: 'Creamy Thai Sweet Potato Curry',
                    description: 'Packed with nutrition, a perfect meal for winter comfort.',
                    image: 'potato.jpeg',
                    videoUrl: 'https://www.youtube.com/embed/KZuLsHG-s2A'  // Correct embed li
                },
                {
                    name: 'Sesame Noodle Bowls',
                    description: 'Vibrant, savory, and umami-rich sesame noodle bowls with roasted vegetables.',
                    image: 'sesame.jpeg',
                    videoUrl: 'https://www.youtube.com/embed/aqmlQ-o25uQ'  // Correct embed li
                },
                {
                    name: 'Cauliflower Fried Rice with Crispy Tofu',
                    description: 'Healthy, flavorful, and satisfying cauliflower fried rice with crispy tofu',
                    image: 'Cauliflower-Fried-Rice.jpg',
                    videoUrl: 'https://www.youtube.com/embed/5wecmsDI2d8'  // Correct embed li
                }
            ]
        },
        {
            type: 'VEGETARIAN RECIPES',
            logo: 'v.jpg',
            dishes: [
                {
                    name: 'Vegetarian shephard Pie',
                    description: 'Indulgent, savory, and comforting vegetarian shepherd pie with wholesome ingredients.',
                    image: 'sHEPHERD.jpeg',
                    videoUrl: 'https://www.youtube.com/embed/xw2V1Pb3U_c'  // Correct embed li
                },
                {
                    name: 'Date Night Mushroom Fettuccine',
                    description: 'Romantic, earthy, and rich date night mushroom fettuccine with garlic and herbs.',
                    image: 'mushroom.jpeg',
                    videoUrl: 'https://www.youtube.com/embed/4nSJKPU7EHU'  // Correct embed li
                },
                {
                    name: '5-Ingredient Green Curry',
                    description: 'Quick, easy, and flavorful 5-ingredient green curry with chicken and veggies.',
                    image: 'curry.jpeg',
                    videoUrl: 'https://www.youtube.com/embed/Ver0GNhWdFQ'  // Correct embed li
                }
            ]
        }
        // Add other recipe types similarly
    ];

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode');
    };

    return (
        <div className={`recipe-page ${darkMode ? 'dark-mode' : ''}`}>
            <button className="dark-mode-button" onClick={toggleDarkMode}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            {recipes.map((recipeCategory, index) => (
                <div key={index} className="recipe-category">
                    <div className="category-header">
                        
                        <h2>{recipeCategory.type}</h2>
                    </div>
                    <div className="recipe-list">
                        {recipeCategory.dishes.map((dish, idx) => (
                            <div key={idx} className="recipe-card">
                                <img src={dish.image} alt={dish.name} className="recipe-image" />
                                <div className="recipe-info">
                                    <h3>{dish.name}</h3>
                                    <p>{dish.description}</p>
                                </div>
                                <iframe
                                    width="300"
                                    height="200"
                                    src={dish.videoUrl}
                                    title="YouTube video"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecipePage;
