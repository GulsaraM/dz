import './App.css';

function AboutUs() {
  return (
      <>
          <h1>ABOUT US</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores beatae consequatur consequuntur dolores eaque exercitationem minima minus molestias mollitia neque officiis pariatur quasi quis, quo. Enim non tenetur velit!</p>
      </>
  )
}

function Portfolio() {
  return (
      <>
          <h2>Portfolio</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad debitis dolore dolorum ducimus laboriosam mollitia neque nobis perspiciatis temporibus. Consequatur cumque esse ipsam iste molestiae nulla quas reprehenderit veniam voluptas.</p>
      </>
  )
}

function App() {
  return (
    <div className="App">
      <AboutUs/>
      <Portfolio/>
    </div>
  );
}

export default App;
