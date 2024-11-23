import React,{ Component } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import './Index.css'
function Index({search}){
    const [products, setProducts] = useState([]);
  const [cat,setCat]=useState([])
  const [filter,setFilter]=useState("")
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData =async () => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts([...data.products])
      }).catch((error)=>{
        console.log(error);
        
      })
      const rescat=await fetch('https://dummyjson.com/products/categories')
      const cats=await rescat.json();
      setCat([...cats])
};
console.log(products);
if (products.length === 0) {
    return <h1>Loading...</h1>;
}
return(
    <>
    <div style={{display:'flex'}} className="cat">
      <button className='btn1' onClick={()=>setFilter("")} style={{padding:"10px"}}>All</button>
      {
        cat.map((ct)=><button className='btn1' onClick={()=>setFilter(ct.name)} style={{padding:"10px"}}>{ct.name}</button>)
      }
        </div>
      <div className="main">
        <div className="smain">
          {products.filter((i)=>i.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())).filter((i)=>i.category.includes(filter.toLocaleLowerCase())).map((product) => (
            <Link className="link" to={`/details/${product.id}`}>
            <div key={product.id} className="item">
              <div className="image">
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <div className="conte">
                <h3>{product.title}</h3>
                <p className='p1'>Price: ${product.price}</p>
                <p className='p2'>{product.description}</p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    
      </>
)
}
export default Index