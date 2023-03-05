import logoImage from "./assets/logo.svg";
import cartIcon from "./assets/icon-cart.svg";
import avatartImage from "./assets/image-avatar.png";
import product1Image from "./assets/image-product-1.jpg";
import product2Image from "./assets/image-product-2.jpg";
import product3Image from "./assets/image-product-3.jpg";
import product4Image from "./assets/image-product-4.jpg";
import plusImage from "./assets/icon-plus.svg";
import minusImage from "./assets/icon-minus.svg";
import closeImage from "./assets/icon-close.svg";
import previousImage from "./assets/icon-previous.svg";
import nextImage from "./assets/icon-next.svg";
import menuIcon from "./assets/icon-menu.svg";
import deleteIcon from "./assets/icon-delete.svg";
import { useState } from "react";

function App() {
  const smallImages = document.querySelectorAll(".small-img");
  const mainImage = document.querySelector(".main-img");
  const smallImages2 = document.querySelectorAll(".small-img-2");
  const mainImage2 = document.querySelector(".main-img-2");
  const aside = document.querySelector(".aside");
  const images = [product1Image, product2Image, product3Image, product4Image];
  const links = document.querySelector(".links");
  const cartSales = document.querySelector(".cart-sales");
  const cartInfo = document.querySelector(".cart-info");

  let counter = 0;
  let [itemCount, setItemCount] = useState(0);

  smallImages.forEach((item) => {
    item.addEventListener("click", () => {
      smallImages.forEach((item) => item.classList.remove("active"));
      item.classList.add("active");
      mainImage.src = item.src;
    });
  });

  smallImages2.forEach((item, index) => {
    item.addEventListener("click", () => {
      smallImages2.forEach((item) => item.classList.remove("active"));
      item.classList.add("active");
      mainImage2.src = item.src;
      counter = index;
    });
  });

  function openAside() {
    mainImage2.src = mainImage.src;
    aside.style.display = "flex";
  }

  function closeAside() {
    aside.style.display = "none";
  }

  function moveImage(e) {
    counter += e.target.alt === "next icon" ? 1 : -1;

    if (counter > 3) {
      counter = 0;
    }

    smallImages2.forEach((item) => item.classList.remove("active"));

    smallImages2[counter].classList.add("active");
    mainImage2.src = images[counter];
  }

  function decreaseItemCount() {
    if (itemCount === 0) return;

    setItemCount((itemCount) => itemCount - 1);
  }

  function increaseItemCount() {
    if (itemCount === 99) {
      return alert("You can not order more than 99 items at once!");
    }

    setItemCount((itemCount) => itemCount + 1);
  }

  function showLinks() {
    links.style.left = "0";
  }

  function hideLinks() {
    links.style.left = "-160px";
  }

  function addItem() {
    const newItem = document.createElement("div");
    const htmlComponent = `<img src=${mainImage.src} class="selected-img" />
    <h3 class="price">${itemCount * 125}.00$</h3>
    <img src=${deleteIcon} class="delete-btn" />`;
    newItem.className = "selected-item";
    newItem.innerHTML = htmlComponent;

    cartSales.appendChild(newItem);
  }

  function showHideCart() {
    cartInfo.style.display = cartInfo.style.display == "flex" ? "none" : "flex";
  }

  return (
    <>
      <nav className="nav-bar">
        <div>
          <img
            src={menuIcon}
            alt="menu icon"
            className="menu-links-btn"
            onClick={showLinks}
          />
          <img src={logoImage} alt="logo" />

          <ul className="links">
            <img
              src={closeImage}
              alt="close icon"
              className="close-links-btn"
              onClick={hideLinks}
            />
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <button className="cart-btn">
            <img
              src={cartIcon}
              alt="cart icon"
              className="cart-icon"
              onClick={showHideCart}
            />
            <div className="cart-info">
              <h3>Cart</h3>
              <hr />
              <div className="cart-sales">
                <a href="#" className="btn">
                  Checkout
                </a>
              </div>
            </div>
          </button>
          <img src={avatartImage} alt="avatart image" className="avatar-img" />
        </div>
      </nav>
      <header className="header">
        <section className="image-section">
          <img
            src={product1Image}
            alt="main-image"
            className="main-img"
            onClick={openAside}
          />
          <div className="small-images">
            <img
              src={product1Image}
              alt="product"
              className="small-img active"
            />
            <img src={product2Image} alt="product" className="small-img" />
            <img src={product3Image} alt="product" className="small-img" />
            <img src={product4Image} alt="product" className="small-img" />
          </div>
        </section>
        <section className="details-section">
          <h3 className="mini-title">Sneaker Company</h3>
          <h1 className="title">Fall Limited Edition Sneakers</h1>
          <p className="text">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer soul, they'll withstand everything
            the weather can offer.
          </p>
          <div className="price-section">
            <h3 className="price">$125.00</h3>
            <span className="discount">50%</span>
            <h4 className="previous-price">$250.00</h4>
          </div>
          <div className="btns-section">
            <div className="adding-section">
              <img
                src={minusImage}
                alt="minus icon"
                onClick={decreaseItemCount}
              />
              <span className="count">{itemCount}</span>
              <img
                src={plusImage}
                alt="plus icon"
                onClick={increaseItemCount}
              />
            </div>
            <a href="#" className="btn" onClick={addItem}>
              <img src={cartIcon} alt="cart" />
              Add to cart
            </a>
          </div>
        </section>
      </header>
      <aside className="aside">
        <img
          src={closeImage}
          alt="close image"
          className="close-img"
          onClick={closeAside}
        />
        <section className="image-section">
          <img
            src={previousImage}
            alt="previous icon"
            className="previous-btn"
            onClick={moveImage}
          />
          <img src={product1Image} alt="main image" className="main-img-2" />
          <img
            src={nextImage}
            alt="next icon"
            className="next-btn"
            onClick={moveImage}
          />
          <div className="small-images">
            <img
              src={product1Image}
              alt="product"
              className="small-img-2 active"
            />
            <img src={product2Image} alt="product" className="small-img-2" />
            <img src={product3Image} alt="product" className="small-img-2" />
            <img src={product4Image} alt="product" className="small-img-2" />
          </div>
        </section>
      </aside>
    </>
  );
}

export default App;
