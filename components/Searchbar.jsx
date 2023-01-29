import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';
import Product from './Product';



const Searchbar =  ({ products,product: { image, name, slug, price } })=> {
  return (
    <div>
 console.log(name)
{products.map((item) => (

                <Product key={item._id} product={item} />
              ))}

              <div className='search'>
               console.log(name)
              <h3> {name}</h3>
              console.log(name)
              </div>
    </div>
    
  )
}

export default Searchbar