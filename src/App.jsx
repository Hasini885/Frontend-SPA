import Card from "./Card.jsx";
import "./App.css";

function App(){
  return (
    <div className="app-container">
      <header className="header">
        <h1>Welcome to My Website</h1>
        <p>A simple landing page built with React + Vite</p>
      </header>

      <section className="hero">
        <h2>Featured Services</h2>
        <p>Check out our amazing services below</p>
      </section>

      <section className="cards-container">
        <Card 
          title="Web Development" 
          content="Build responsive and modern websites with the latest technologies. Create engaging user experiences with clean code and best practices." 
          image="https://via.placeholder.com/400x300?text=Web+Development" 
        />
        <Card 
          title="UI/UX Design" 
          content="Design beautiful and intuitive user interfaces. Focus on user experience to create products that users love and enjoy using." 
          image="https://via.placeholder.com/400x300?text=UI+UX+Design" 
        />
      </section>

      <footer className="footer">
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;