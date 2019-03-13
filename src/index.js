import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.querySelector('#root'));

// import systemet from './api/systemet.mjs';
// import { MLperNOK, NOKperML } from './calculation.mjs';

// const getData = endpoint => systemet.get(endpoint);
// const search = params => systemet.get("/products",  { params } );

// const main = async () => {
//   const response = await getData("products");
//   const sorted = await search({ search: "vodka", sort: "price_per_liter:asc" });
//   console.log(sorted.data);
// }

// main();