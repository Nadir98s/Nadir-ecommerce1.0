import './Electronics.css'
import yellowHeadphone from '../assets/images/yello headphone.jpg';
import monitor4k from '../assets/images/monitor.jpg';
import smartWatch from '../assets/images/smartwatch.jpg';
import earbuds from '../assets/images/earbuds.jpg';
import keyboard from '../assets/images/keyboard.jpg';
import speaker from '../assets/images/speaker.jpg';
import { FeaturedProducts } from './Home.jsx'
import { useState } from 'react';
// import { featuredCardRating } from './Home.jsx'

function Filter({setMinPrice, setMaxPrice, setBrands, brands, setRating4Plus, setRating3Plus}) {
    function handlePriceSubmit(event) {
        console.log("Button clickd")/
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const minPrice = formData.get('minPrice');
        const maxPrice = formData.get('maxPrice');
        // const maxPrice = console.log("min",event.currentTarget.get('minPrice'));
        setMinPrice(minPrice);
        setMaxPrice(maxPrice);
    }

    function handleCheckBox(event) {
        const container = event.currentTarget.closest('.brandCheckbox');
        const checkedBoxes = container.querySelectorAll('input[name="brandName"]:checked');
        console.log("Query",checkedBoxes);
        const selectedBrands = Array.from(checkedBoxes).map(input => input.value);
        setBrands(selectedBrands);
        console.log("QueryBrands",checkedBoxes, typeof(selectedBrands));
        console.log("QueryBrands2", brands, typeof(brands));

    }
    return (
        // <div>
        <div className='filter'>
            <div className='filterC'>
                <div className='priceRange'>
                    <h3>Price Range</h3>
                    <div className='priceRangeForm'>
                        <form onSubmit={handlePriceSubmit} >
                            <div className='priceRangeInput'>
                            <input name='minPrice' placeholder='Min' type='number' />
                            <input name='maxPrice' placeholder='Max' type='Number' />
                            </div>
                        <button type='submit'>Apply</button>
                        </form>
                    </div>
                </div>
                <div className='brand'>
                    <h3>Brand</h3>
                    <div className='brandCheckbox'>
                        <label className='brandLabel'>
                            <input type='checkbox' id='SoundPro' name='brandName' value='SoundPro' onChange={handleCheckBox} />
                            <span htmlFor='SoundPro'>SoundPro</span>
                        </label>
                        <label className='brandLabel'>
                            <input type='checkbox' id='TechFit' name='brandName' value='TechFit' onChange={handleCheckBox} />
                            <span htmlFor='TechFit'>TechFit</span>
                        </label>
                        <label className='brandLabel'>
                            <input type='checkbox' id='KeyMaster' name='brandName' value='KeyMaster' onChange={handleCheckBox} />
                            <span htmlFor='KeyMaster'>KeyMaster</span>
                        </label>
                        <label className='brandLabel'>
                            <input type='checkbox' id='LumaBright' name='brandName' value='LumaBright' onChange={handleCheckBox} />
                            <span htmlFor='LumaBright'>LumaBright</span>
                        </label>
                    </div>
                </div>
                <div className='rating'>
                    <h3>Rating</h3>
                    <div className='ratingButtons'>
                        <button className='ratingButton' onClick={() => setRating4Plus(true)}>
                            <div class="flex gap-0.5">
                                <span class="amberStar">★</span>
                                <span class="amberStar">★</span>
                                <span class="amberStar">★</span>
                                <span class="amberStar">★</span>
                                <span class="greyStar">★</span>
                            </div>
                            <span>4 Star & up</span>
                        </button>
                        <button className='ratingButton' onClick={() => setRating3Plus(true)}>
                            <div class="flex gap-0.5">
                                <span class="amberStar">★</span>
                                <span class="amberStar">★</span>
                                <span class="amberStar">★</span>
                                <span class="greyStar">★</span>
                                <span class="greyStar">★</span>
                            </div>
                            <span>3 Star & up</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        /* </div> */
    );
}

function ElectronicsProducts({minPrice, maxPrice, brands, rating4Plus, rating3Plus, totalProducts, filteredProducts, setTotalProducts, setFilteredProducts}) {
    const [sortType, setSortType] = useState(1);
    const electronicsPage = true;
    // const [minPrice, setMinPrice] = useState(0);
    // const [maxPrice, setMaxPrice] = useState(99999);

    return (
        <div className='electronicsProducts'>
            {/* <h1>bus</h1> */}
            <div className='selectOptionP'>
                <span>Showing {filteredProducts} of {totalProducts} products</span>
                <select name="sortType" onChange={(e) => { console.log("value changed"); setSortType(e.target.value) }}>
                    <option value={1}>Sort by: Featured</option>
                    <option value={2}>Price: Low to High</option>
                    <option value={3}>Price: High to Low</option>
                    <option value={4}>Top Rated</option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-chevron-down absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none">
                    <path d="m6 9 6 6 6-6"></path>
                </svg>
            </div>
            <FeaturedProducts sortType={sortType} minPrice={minPrice} maxPrice={maxPrice} brands={brands} rating4Plus={rating4Plus} rating3Plus={rating3Plus} setTotalProducts={setTotalProducts} setFilteredProducts={setFilteredProducts} electronicsPage={electronicsPage}/>
        </div>
    )
}

function Electronics() {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(99999);
    const [brands, setBrands] = useState([]);
    const [rating4Plus, setRating4Plus] = useState(false);
    const [rating3Plus, setRating3Plus] = useState(false);
    const [totalProducts, setTotalProducts] = useState(0);
    const [filteredProducts, setFilteredProducts] = useState(0);

    return (
        <>
            <div className='electronics'>
                <span>Home/Electronics</span>
                <h1>Electronics</h1>
                <div className='mainContent'>
                    <Filter setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} setBrands={setBrands} brands={brands} setRating4Plus={setRating4Plus} setRating3Plus={setRating3Plus}/>
                    <ElectronicsProducts minPrice={minPrice} maxPrice={maxPrice} brands={brands} rating4Plus={rating4Plus} rating3Plus={rating3Plus} totalProducts={totalProducts} filteredProducts={filteredProducts} setTotalProducts={setTotalProducts} setFilteredProducts={setFilteredProducts}/>
                </div>
            </div>
        </>
    )
}

export default Electronics;