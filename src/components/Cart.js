import React, { useContext, useEffect, useState } from 'react'
import { cartData } from './Context'



export default function Cart() {
      
      let{cart,setCart}=useContext(cartData)
      const [sumWithInitial, setsumWithInitial] = useState([])
      const [subTotal, setsubTotal] = useState([])
      useEffect(() => {
   
    
        setsumWithInitial(cart.reduce(
            (previousValue, currentValue) => Number(previousValue) + Number(currentValue.price),
            0
            ));
    }, [cart])
  return (
    <>

    <div className="container">
        <h1>My cart</h1>
        <div class="container">
            <table id="cart" className="table table-hover table-condensed">
                <thead>
                    <tr>
                        <th style={{ width: '50%' }}>Product</th>
                        <th style={{ width: '10%' }}>Price</th>
                        <th style={{ width: '8%' }}>Quantity</th>
                        <th style={{ width: '22%' }} className="text-center">Subtotal</th>
                        <th style={{ width: '10%' }} />
                    </tr>
                </thead>
                <tbody>
                    {cart && cart.map((product) => (
                        <tr>
                            <td data-th="Product">
                                <div className="row">
                                    <div className="col-sm-2 hidden-xs"><img src={product.image} alt="..." className="cart-img"  /></div>
                                    <div className="col-sm-10">
                                        <h4 className="nomargin">{product.title}</h4>
                                        
                                    </div>
                                </div>
                            </td>
                            <td data-th="Price">{product.price}</td>
                            <td data-th="Quantity">
                                <input type="number" min="1" className="form-control text-center" defaultValue={1} onChange={(e)=>{setsubTotal(e.target.value*product.price)}} />
                            </td>
                            <td data-th="Subtotal" className="text-center">{subTotal}</td>
                            <td className="actions" data-th>
                                // <button className="btn btn-info btn-sm" ><i className="fa fa-refresh" /></button>
                                <button className="btn btn-danger btn-sm" onClick={()=>{setCart(cart.filter(item=>item.id!==product.id))}}><i className="fa fa-trash-o" /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr className="visible-xs">
                        <td className="text-center"><strong>{sumWithInitial}</strong></td>
                    </tr>
                    <tr>
                        <td><a href="#" className="btn btn-warning"><i className="fa fa-angle-left" /> Continue Shopping</a></td>
                        <td colSpan={2} className="hidden-xs" />
                        <td className="hidden-xs text-center"><strong>Total ${sumWithInitial}</strong></td>
                        <td><a href="#" className="btn btn-success btn-block">Checkout <i className="fa fa-angle-right" /></a></td>
                    </tr>
                </tfoot>
            </table>

        </div>
    </div>
</>
  )
}

