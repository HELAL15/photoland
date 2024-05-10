import React, { memo } from 'react';

const Qty = ({item}) => {
  return <p className='text-gray-400'>{item.amount} in cart </p>;
};

export default memo(Qty);
