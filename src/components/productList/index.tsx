import React from 'react';
import { DetailsProps } from '../../App';
import {categoryDetailsProps} from '../../App';
import ProductListView from './product-list-view';
export interface SubCategoryDetailsProps {
  categoryDetails: string;
}
export interface SubDetailsProps {
  details: [];
}

const ProductList: React.FC<DetailsProps&categoryDetailsProps> = ({details,categoryDetails}) => {
  

  console.log(categoryDetails);
  return  <ProductListView details={details} categoryDetails={categoryDetails}/>;
};
export default ProductList;
