import React from 'react';
import NavBar from "../components/NavBar.js";
import NavBarCategory from "../components/NavBarCategory.js";
import SearchBar from "../components/searchBar.js";
import Location from "../components/Breadcrumb.js";
import ProductInfo from "../components/ProductInfo.js";
import Reviews from "../components/Reviews.js";
import FriendCheer from "../components/FriendCheer.js";
import RelatedProducts from "../components/RelatedProducts.js";
import CompanyPolicies from "../components/CompanyPolicies.js";
import VendorPolicies from "../components/VendorPolicies.js";

export default class HomePage extends React.Component {
  	render() {
		return(
			<div>
				<NavBar />
				<div className="col-10 d-flex flex-column mx-auto mb-4">
					<NavBarCategory />
					<SearchBar />
					<Location />
					<ProductInfo />
					<Reviews />
					<div className="col-12">
						<CompanyPolicies />
						<VendorPolicies />
					</div>
					<FriendCheer />
					<RelatedProducts />
				</div>
			</div>
		);
	}
}

