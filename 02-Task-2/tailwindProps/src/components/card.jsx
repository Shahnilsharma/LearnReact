import React from 'react';

const Card = ({productName='New Item', productPrice='0.00', btnText="Buy Now"}) => {
  
  return (
    <div className="flex font-sans bg-white">
<div className="flex-none w-48 relative">
  <img src="https://images.unsplash.com/photo-1678778012416-36b2443c332e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
</div>
<form className="flex-auto p-6">
  <div className="flex flex-wrap">
    <h1 className="flex-auto text-lg font-semibold text-slate-900">
      {productName}
    </h1>
    <div className="text-lg font-semibold text-slate-500">
      ${productPrice}
    </div>
    <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
      In stock
    </div>
  </div>
  <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
    <div className="space-x-2 flex text-sm">
      <label>
        <input className="sr-only peer" name="size" type="radio" value="xs" checked />
        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
          XS
        </div>
      </label>
      <label>
        <input className="sr-only peer" name="size" type="radio" value="s" />
        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
          S
        </div>
      </label>
      <label>
        <input className="sr-only peer" name="size" type="radio" value="m" />
        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
          M
        </div>
      </label>
      <label>
        <input className="sr-only peer" name="size" type="radio" value="l" />
        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
          L
        </div>
      </label>
      <label>
        <input className="sr-only peer" name="size" type="radio" value="xl" />
        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
          XL
        </div>
      </label>
    </div>
  </div>
  <div className="flex space-x-4 mb-6 text-sm font-medium">
    <div className="flex-auto flex space-x-4">
      <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
        {btnText}
      </button>
      
    </div>
    
  </div>
  <p className="text-sm text-slate-700">
    Free shipping on all continental US orders.
  </p>
</form>
</div>
  );
}

export default Card;
