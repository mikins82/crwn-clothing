import React from 'react';

import './collection-item.styles.scss';

const Collectionitem = ({ id, name, price, imageUrl }) => (
  <div className='collection-item'>
    <div
      className='image'
      style={{
        background: `url(${imageUrl})`
      }}
    >
    </div>
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='name'>{price}</span>
    </div>
  </div>
)

export default Collectionitem;