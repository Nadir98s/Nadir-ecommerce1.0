import { useState } from "react";
import './Home.css'
import yellowHeadphone from '../assets/images/yello headphone.jpg';
import monitor4k from '../assets/images/monitor.jpg';
import smartWatch from '../assets/images/smartwatch.jpg';import earbuds from '../assets/images/earbuds.jpg';
import keyboard from '../assets/images/keyboard.jpg';
import speaker from '../assets/images/speaker.jpg';


function TopFixBar() {
    return (
        <div className="topFixBar">
            {/* <div className="topFixBarDivP"> */}
                <div >
                    <button className="mainBtn">
                        <div className="QLogo">
                            <span>Q</span>
                        </div>
                        <span className="QLogoText">QuickCart</span>
                    </button>
                </div>
                <form className="searchBar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="searchLogo">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </svg>
                    <input className="searchInput" placeholder="Search products . . ."></input>
                </form>
                <div className="accountCart">
                    <button className="accountBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user w-5 h-5">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <span>Account</span>
                    </button>
                    <button className="cartBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart w-5 h-5 text-gray-700">
                            <circle cx="8" cy="21" r="1"></circle>
                            <circle cx="19" cy="21" r="1"></circle>
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                        </svg>
                        <span className="cartProductsNmbr">4</span>
                    </button>
                    {/* <button></button> */}
                </div>
            {/* </div> */}
        </div>
    )
}

function Header() {
    return (
        <>
            <div className="header">
                <div className="headerSubDiv">
                    <div className="headerDivTop">
                        <div className="headerText">
                            <span className="headerSaleText">Summer Sale -- Up to 40% Off</span><br />
                            <h1 className="headerHeading">Shop the <br />Best Deals</h1>
                            <p className="headerText">Free shipping on orders over $50. Thousands of products at unbeatable prices.</p>
                        </div>
                        <button className="shopNow">Shop Now
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-arrow-right w-4 h-4">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="headerImg">
                        <img src={yellowHeadphone} alt="yellow head phone" />
                    </div>
                </div>
            </div>
        </>
    )
}

function Strip() {
    return (
        <>
            <div className="strip">
                <div className="stripShipping">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-truck w-4 h-4 text-primary">
                        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                        <path d="M15 18H9"></path>
                        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                        <circle cx="17" cy="18" r="2"></circle>
                        <circle cx="7" cy="18" r="2"></circle>
                    </svg>
                    <span>Free Shipping over $50</span>
                </div>
                <div className="stripReturn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-rotate-ccw w-4 h-4 text-primary">
                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                        <path d="M3 3v5h5"></path>
                    </svg>
                    <span>Easy 30-Day Returns</span>
                </div>
                <div className="stripSecure">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-shield-check w-4 h-4 text-primary">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <span>Secure Checkout</span>
                </div>
            </div>
        </>
    )
}

function Category() {
    return (
        <>
            <div className="category">
                <div className="categoryHeadingDiv">
                    <h2 className="categoryHeading">Shop by Category</h2>
                    <button className="categoryViewAllBtn">View all</button>
                </div>
                <div className="categoryCards">
                    <CategoryBtn icon="💻" text="Electronics" />
                    <CategoryBtn icon="👕" text="Clothing" />
                    <CategoryBtn icon="⚽" text="Sports" />
                    <CategoryBtn icon="👜" text="Accessories" />
                    <CategoryBtn icon="🏠" text="Home" />
                </div>
            </div>
        </>
    )
}

function CategoryBtn({ icon, text }) {
    return (
        <button className="categoryBtn">
            <span className="categoryBtnIcon">{icon}</span>
            <span className="categoryText">{text}</span>
        </button>

    )
}

export function FeaturedProducts() {
    // let varr;
    const featuredCardsData = [{ company: "SoundPro", product: "Wireless Noise-Cancelling Headphones", src: { yellowHeadphone }, price: "79.99", salePrice: "129.99" },
    { company: "LumaBright", product: '4K Ultra HD Monitor 27"', src: { monitor4k }, price: "349.99" },
    { company: "TechFit", product: "Smart Fitness Watch", src: { smartWatch }, price: "149.99" },
    { company: "SoundPro", product: "Wireless Earbuds Pro", src: { earbuds }, price: "59.99", salePrice: "89.99" },
    { company: "KeyMaster", product: "Mechanical Keyboard", src: { keyboard }, price: "89.99" },
    { company: "SoundPro", product: "Portable Bluetooth Speaker", src: { speaker }, price: "49.99" }
    ]

    featuredCardsData.map(parseData);

    function parseData(item) {
        let varr = Object.entries(item).map(([key, value]) =>
            `${key}="${value}"`).join(" ");
        console.log("nadir", varr);
        varr = "<FeaturedCards " + varr + " />";
        console.log(varr, typeof (varr), "type");
        return varr;
    }
    return (
        <>
            <div className="category">
                <div className="categoryHeadingDiv">
                    <h2 className="categoryHeading">Featured Products</h2>
                    <button className="categoryViewAllBtn">
                        View all
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-arrow-right w-3.5 h-3.5">
                            <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
                <div className="featuredPDiv">
                    {/* <FeaturedCards company="SoundPro" product="Wireless Noise-Cancelling Headphones" src={yellowHeadphone} price="79.99" salePrice="129.99" />
                    <FeaturedCards company="LumaBright" product='4K Ultra HD Monitor 27"' src={monitor4k} price="349.99" />
                    <FeaturedCards company="TechFit" product="Smart Fitness Watch" src={smartWatch} price="149.99" /> */}



                    {featuredCardsData.map((item, index) => (
                        <FeaturedCards
                            key={index}
                            company={item.company}
                            product={item.product}
                            src={Object.values(item.src)[0]}
                            price={item.price}
                            salePrice={item.salePrice}
                        />))}

                </div>
            </div>
        </>
    )
}

function FeaturedCards({ company, product, price, salePrice, src, noReviews }) {
    console.log("SsalesPrice", salePrice);
    return (
        <div className="featuredCards">
            <div className="featuredCardImgDiv">
                <img className="featuredCardImg" src={src} />
                <span className="featuredCardSaleText">SALE</span>
            </div>
            <div className="featuredCardTxt">
                <div className="featuredCardInfo">
                    <p>{company}</p>
                    <h3>{product}</h3>
                </div>
                <div className="featuredCardRating">
                    <div className="featuredCardRatingStars">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-star w-3.5 h-3.5 fill-amber-400 text-amber-400">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-star w-3.5 h-3.5 fill-amber-400 text-amber-400">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-star w-3.5 h-3.5 fill-amber-400 text-amber-400">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-star w-3.5 h-3.5 fill-amber-400 text-amber-400">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-star w-3.5 h-3.5 text-gray-200 fill-gray-200">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                    </div>
                    <span>({noReviews})</span>
                </div>
                <div className="featuredCardPrice">
                    <span className="featuredPrice">${price}</span>
                    {salePrice !== undefined ? <span className="featuredSalePrice">${salePrice}</span> : ""}
                </div>
                <button className="featuredCardButton">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-shopping-cart w-4 h-4">
                        <circle cx="8" cy="21" r="1"></circle>
                        <circle cx="19" cy="21" r="1"></circle>
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                    </svg>
                    Add to Cart
                </button>
            </div>
        </div>

    )
}

function Footer() {
    return (
        <>
            <footer className="footer">
                {/* <div> */}
                <div className="footerLinks">
                    <div className="footerLogoDiv">
                        <div className="footerLogo">
                            <button className="mainBtn">
                                <div className="QLogo">
                                    <span>Q</span>
                                </div>
                                <span className="QLogoText">QuickCart</span>
                            </button>
                        </div>
                        <p>Your one-stop shop for the best deals on electronics, clothing, and more.</p>
                    </div>
                    <div className="footerLinksDiv">
                        <h4>Shop</h4>
                        <ul className="listLinks">
                            <li><button className="listLinkButtons">Electronics</button></li>
                            <li><button className="listLinkButtons">Clothing</button></li>
                            <li><button className="listLinkButtons">Sports</button></li>
                            <li><button className="listLinkButtons">Accessories</button></li>
                        </ul>
                    </div>
                    <div className="footerLinksDiv">
                        <h4>Support</h4>
                        <ul className="listLinks">
                            <li><button className="listLinkButtons">Help Center</button></li>
                            <li><button className="listLinkButtons">Track Order</button></li>
                            <li><button className="listLinkButtons">Returns</button></li>
                            <li><button className="listLinkButtons">Contact Us</button></li>
                        </ul>
                    </div>
                    <div className="footerLinksDiv">
                        <h4>Company</h4>
                        <ul className="listLinks">
                            <li><button className="listLinkButtons">About Us</button></li>
                            <li><button className="listLinkButtons">Careers</button></li>
                            <li><button className="listLinkButtons">Press</button></li>
                            <li><button className="listLinkButtons">Blog</button></li>
                        </ul>
                    </div>
                </div>
                <div className="footerRights">
                    <p>© 2024 QuickCart, Inc. All rights reserved.</p>
                    <div className="footerRightsButtons">
                        <button class="hover:text-white">Privacy</button>
                        <button class="hover:text-white">Terms</button>
                        <button class="hover:text-white">Cookies</button>
                    </div>
                </div>
                {/* </div> */}
            </footer>
        </>
    )
}

function Homee() {
    return (
        <>
            <TopFixBar />
            <Header />
            <Strip />
            <Category />
            <FeaturedProducts />
            <Footer />
        </>
    )
}

export default Homee

// export default topFixBar