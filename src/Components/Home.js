import React from 'react';
import './Home.css'; // Optional: Create a CSS file for styling if needed

const Home = () => {
    return (
        <div style={{ marginTop: '40px', padding: '20px' }}>
            <h1>Welcome to Food52</h1>
            <p>
            Food52 is a dynamic online platform that has revolutionized the way people approach cooking and food. It's more than just a recipe repository; it's a vibrant community where users come together to share their culinary experiences, learn from experts, and discover new flavors.

At the heart of Food52 is its extensive collection of recipes. From classic comfort food to innovative gourmet dishes, users can find inspiration for every occasion. The platform's user-friendly interface makes it easy to search for recipes based on ingredients, dietary restrictions, or cooking time. Each recipe is accompanied by detailed instructions, high-quality photos, and user reviews, providing a comprehensive guide for anyone looking to recreate the dish.

Beyond recipes, Food52 offers a wealth of resources for aspiring cooks. The platform features a blog with informative articles on cooking techniques, kitchen gadgets, and food trends. Users can also participate in online cooking classes, learn about different culinary cultures, and connect with like-minded individuals.

One of the most distinctive aspects of Food52 is its emphasis on community. Users can create profiles, share their own recipes, and engage in discussions with other members. The platform's forums provide a space for users to ask questions, share tips, and offer support to one another. This sense of community fosters a welcoming and inclusive environment where everyone feels empowered to explore their culinary passions.

In conclusion, Food52 is a valuable resource for anyone interested in cooking and food. Whether you're a seasoned chef or just starting your culinary journey, the platform offers something for everyone. With its vast collection of recipes, informative articles, and supportive community, Food52 is a must-visit destination for food enthusiasts.
            </p>
            {/* Include the food slider here */}
            <div className="food-slider">
                <div className="food-items">
                    <img src="/chole.jpg" alt="Food 1" />
                    <img src="/vegan.jpg" alt="Food 2" />
                    <img src="/biryani.jpeg" alt="Food 3" />
                    <img src="/noodles.jpeg" alt="Food 4" />
                    <img src="/sandwich.jpg" alt="Food 5" />
                    <img src="/panner.jpeg" alt="Food 6" />
                    <img src="/pasta.jpg" alt="Food 7" />
                    {/* Duplicate the images to create the continuous scroll effect */}
                    <img src="/pizza.jpg" alt="Food 1" />
                    <img src="/icr-cream.jpg" alt="Food 2" />
                    <img src="/burger.jpg" alt="Food 3" />
                    <img src="/noodles.jpeg" alt="Food 4" />
                    <img src="/sandwich.jpg" alt="Food 5" />
                    <img src="/panner.jpeg" alt="Food 6" />
                    <img src="/pasta.jpg" alt="Food 7" />

                    <img src="/vegan.jpg" alt="Food 1" />
                    <img src="/icr-cream.jpg" alt="Food 2" />
                    <img src="/burger.jpg" alt="Food 3" />
                    <img src="/noodles.jpeg" alt="Food 4" />
                    <img src="/biryani.jpeg" alt="Food 5" />
                    <img src="/panner.jpeg" alt="Food 6" />
                    <img src="/chole.jpg" alt="Food 7" />
                </div>
            </div>
        </div>
    );
};

export default Home;
