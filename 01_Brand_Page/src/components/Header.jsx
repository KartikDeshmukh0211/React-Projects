import "../Header.css"

export default function Header() {
  return (
    <>
      <div className="Header">
        <img src="brand_logo.svg" alt="" />
        <ul className="list">
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="btn">Login</button>
      </div>
    </>
  );
}
