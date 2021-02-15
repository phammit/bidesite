import React, { FC } from "react";
//import './index.css';
import Grid from "@material-ui/core/Grid";
import bitcoinImage from "./images/bitcoin.jpg";
import litecoinImage from "./images/litecoin.jpg";




//code from https://css-tricks.com/designing-a-product-page-layout-with-flexbox/
const HeaderLayout = () => {
    return (
        <div>
        <nav className="product-filter">
            <h1>Miners</h1>
            <div className="sort">
                <div className="collection-sort">
                    <label>Filter by:</label>
                    <select>
                        <option value="/">All Miners</option>
                    </select>
                </div>
                <div className="collection-sort">
                    <label>Sort by:</label>
                    <select>
                        <option value="/">Featured</option>
                    </select>
                </div>
            </div>
        </nav>
        <Grid className="products" container spacing={5} >
            <Grid className="product-card" item xs={6} sm={4} md={4} lg={3} xl={2}>
                <div className="product-image">
                    <img src={bitcoinImage}></img>
                </div>
                <div className="product-info">
                    <h5>New Bitcoin Miner</h5>
                    <h6>$99.99</h6>
                </div>
            </Grid>
            <Grid className="product-card" item xs={6} sm={4} md={4} lg={3} xl={2}>
                <div className="product-image">
                    <img src={litecoinImage}></img>
                </div>
                <div className="product-info">
                    <h5>Litecoin Miner</h5>
                    <h6>$150.99</h6>
                </div>
            </Grid>
            <Grid className="product-card" item xs={6} sm={4} md={4} lg={3} xl={2}>
                <div className="product-image">
                    <img src={litecoinImage}></img>
                </div>
                <div className="product-info">
                    <h5>Litecoin Miner</h5>
                    <h6>$20.49</h6>
                </div>
            </Grid>
            <Grid className="product-card" item xs={6} sm={4} md={4} lg={3} xl={2}>
                <div className="product-image">
                    <img src={bitcoinImage}></img>
                </div>
                <div className="product-info">
                    <h5>New Bitcoin Miner</h5>
                    <h6>$199.99</h6>
                </div>
            </Grid>
            <Grid className="product-card" item xs={6} sm={4} md={4} lg={3} xl={2}>
                <div className="product-image">
                    <img src={bitcoinImage}></img>
                </div>
                <div className="product-info">
                    <h5>New Bitcoin Miner</h5>
                    <h6>$99.99</h6>
                </div>
            </Grid>
            <Grid className="product-card" item xs={6} sm={4} md={4} lg={3} xl={2}>
                <div className="product-image">
                    <img src={litecoinImage}></img>
                </div>
                <div className="product-info">
                    <h5>Litecoin Miner</h5>
                    <h6>$150.99</h6>
                </div>
            </Grid>
            <Grid className="product-card" item xs={6} sm={4} md={4} lg={3} xl={2}>
                <div className="product-image">
                    <img src={litecoinImage}></img>
                </div>
                <div className="product-info">
                    <h5>Litecoin Miner</h5>
                    <h6>$20.49</h6>
                </div>
            </Grid>
            <Grid className="product-card" item xs={6} sm={4} md={4} lg={3} xl={2}>
                <div className="product-image">
                    <img src={bitcoinImage}></img>
                </div>
                <div className="product-info">
                    <h5>New Bitcoin Miner</h5>
                    <h6>$199.99</h6>
                </div>
            </Grid>
        </Grid>
        </div>
    );
}

export interface productprops { };

const ProductGallery: FC<productprops> = ({ }) => {
    return (
        <div>
        <div>ProductGalleryPage</div>
        <HeaderLayout />
        </div>
    );
}

export default ProductGallery;