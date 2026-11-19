import { useState } from "react";
import "./App.css";
import { meals } from "./data.js";

function App() {
  const [meal, setMeal] = useState(null);
  const [selectedProtein, setSelectedProtein] = useState("any");

  const filteredMeals = meals.filter(
    (meal) => selectedProtein === "any" || meal.value === selectedProtein,
  );

  function generateMeal() {
    if (filteredMeals.length === 0) return false;
    let randomMeal;
    do {
      randomMeal =
        filteredMeals[Math.floor(Math.random() * filteredMeals.length)];
    } while (filteredMeals.length > 1 && meal?.id == randomMeal.id);
    setMeal(randomMeal);
  }

  return (
    <main className="app">
      <div className="app-container">
        <header className="hero">
          <p className="eyebrow">THE WEEKLY MENU</p>
          <h1>Less thinking. More cooking.</h1>
          <p className="hero-description">
            Your next meal prep idea is just one click away.
          </p>
        </header>
        <section className="generator-card">
          <h3>What are you craving?</h3>
          <p>Choose your protein</p>
          <div>
            <button
              type="button"
              onClick={() => setSelectedProtein("any")}
              className={`protein-button ${selectedProtein === "any" ? "active" : ""}`}
            >
              Any
            </button>
            <button
              type="button"
              onClick={() => setSelectedProtein("chicken")}
              className={`protein-button ${selectedProtein === "chicken" ? "active" : ""}`}
            >
              Chicken
            </button>
            <button
              type="button"
              onClick={() => setSelectedProtein("beef")}
              className={`protein-button ${selectedProtein === "beef" ? "active" : ""}`}
            >
              Beef
            </button>
            <button
              type="button"
              onClick={() => setSelectedProtein("turkey")}
              className={`protein-button ${selectedProtein === "turkey" ? "active" : ""}`}
            >
              Turkey
            </button>
          </div>
          <button
            type="button"
            className="generate-button"
            onClick={generateMeal}
          >
            Generate Meal
          </button>
        </section>
        {meal && (
          <section className="meal-card">
            <p className="meal-label">YOUR MEAL OF THE WEEK</p>
            <h2 className="meal-title">{meal.name}</h2>
            <div className="meal-tags">
              <span>{meal.cuisine}</span>
              <span>{meal.protein}</span>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default App;
