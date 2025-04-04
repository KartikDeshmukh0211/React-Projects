import "../Hero.css";

const Hero = () => {
  return (
    <main className="Hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="buttons">
          <button className="shop-btn"> Shop Now</button>
          <button className="category-btn">Category</button>
        </div>
        <div className="addition-info">
          <h5>Also Available on</h5>
          <div className="logos">
            <img src="flipkart.svg" alt="Flipkart Logo" />
            <img src="amazon.svg" alt="Amazon Logo" />
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src="shoe_image.png" alt="Red Shoe" />
      </div>
    </main>
  );
};

export default Hero;
