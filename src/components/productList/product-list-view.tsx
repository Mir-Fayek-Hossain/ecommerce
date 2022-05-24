import React from 'react';
import { Link } from 'react-router-dom';
import { SubCategoryDetailsProps, SubDetailsProps } from '.';
import { CardProps } from '../../App';

const ProductListView: React.FC<SubDetailsProps&SubCategoryDetailsProps> = ({
  details,
  categoryDetails,
}) => {
  console.log(categoryDetails);
  
  return (
      <div>
        {details.map((x: CardProps, i: number) => {
          return x.category === categoryDetails ? (
            <Link to={`/${x.category.replace(/ /g,'')}/${x.id}`} key={i}>
              <img src={x.image} alt="" width={100} />
              <h2>{x.title}</h2>
              <h3>{x.price} BDT</h3>
            </Link>
          ) : null;
        })}
      </div>
  );
};
export default ProductListView;
