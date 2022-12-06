import React, { useState } from 'react'
import MusicCartProduct from "../components/products/MusicCartProduct"


const ProductsPage = () => {
  const [page, setPage] = useState(1);
  const [isSideBar, setIsSideBar] = useState(true);

  function changeSideBarStatus(){
    setIsSideBar(!isSideBar);
  };


  return (
    <div>
        <MusicCartProduct page={page} setPage={setPage} changeSideBarStatus={changeSideBarStatus}/>
    </div>
  )
}

export default ProductsPage