import { useState } from "react";
import './Home.css'
import yellowHeadphone from '../assets/images/yello headphone.jpg';

function TopFixBar() {
    return (<div className="topFixBar">
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
    </div>)
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
        <div>
            <div>
                <h2>Shop by Category</h2>
                <button>View all</button>
            </div>
            <div className="categoryCards">
                <CategoryBtn icon="💻" text="Electronics"/>
                <CategoryBtn icon="👕" text="Clothing"/>
                <CategoryBtn icon="⚽" text="Sports"/>
                <CategoryBtn icon="👜" text="Accessories"/>
                <CategoryBtn icon="🏠" text="Home"/>
            </div>
        </div>
        </>
    )
}

function CategoryBtn ({icon, text}) {
    return (
        <button className="categoryBtn">
            <span className="categoryBtnIcon">{icon}</span>
            <span className="categoryText">{text}</span>
        </button>

    )
}

function Homee() {
    return (
        <>
            <TopFixBar />
            <Header />
            <Strip />
            <Category/>
        </>
    )
}

export default Homee

// export default topFixBar