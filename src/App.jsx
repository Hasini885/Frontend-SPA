import Card from "./Card.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "./App.css";

function App(){
  return (
    <div className="app-container">
      <Header 
        title="Welcome to My Website" 
        subtitle="A simple landing page built with React + Vite"
      />

      <section className="hero">
        <h2>Featured Services</h2>
        <p>Check out our amazing services below</p>
      </section>

      <section className="cards-container">
        <Card 
          title="Web Development" 
          content="Build responsive and modern websites with the latest technologies. Create engaging user experiences with clean code and best practices." 
          image="/webdev.jpg"  
        />
        <Card 
          title="UI/UX Design" 
          content="Design beautiful and intuitive user interfaces. Focus on user experience to create products that users love and enjoy using." 
          image="/ui.jpg"
        />
      </section>

      <Footer 
        year="2024" 
        companyName="My Website"
      />
    </div>
  );
}

export default App;
