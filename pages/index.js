import Image from "next/image";
import localFont from "next/font/local";

export default function Home() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Design CSS Website By Ali Abbas</title>
  <link rel="stylesheet" href="style.css" />
  <div className="banner">
  <video autoPlay loop muted playsInline className="background-video">
      <source src="/video.mp4" type="video/mp4" />
    </video>
    <div className="navbar">
      <img className="logo" src="/images/logo.png" alt="Website Logo" />
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Travel</a>
        </li>
        <li>
          <a href="#">Blogs</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </ul>
    </div>
    <div className="content">
      <h1>Explore The World</h1>
      <div className="buttons">
        <button type="button">Explore</button>
      </div>
    </div>
  </div>
</>

  );
}