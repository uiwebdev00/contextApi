import React, { useContext } from 'react'
import { cartData } from './Context'

export default function Products({ data}) {
    let{cart,setCart}=useContext(cartData)
    
    return (

        <>
        <div className="container mt-5">
            <div className="row">
                {data.map((product) => (<div className="col-md-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={product.image} className="card-img-top img-fluid" style={{height:"200px"}} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <small>{product.price}$</small><br />
                      
                            {cart.find(item=>item.id==product.id)?<a href="#" className="btn btn-primary" onClick={()=>{setCart(cart.filter(item=>item.id!==product.id))}}>remove From Cart</a>:<a href="#" className="btn btn-primary" onClick={()=>setCart([...cart,product])}>Add to Cart</a>}
                        </div>
                    </div>
                </div>))}
            </div>
        </div>


        </>

    )
}
