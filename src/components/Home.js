import React, { useContext, useEffect, useState } from 'react'
import {cartData } from './Context';
import Products from './Products';

export default function Home() {
    
   
    let{cart,setCart}=useContext(cartData)
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
    useEffect(()=>{

        fetch('http://localhost:8000/products')
            .then((res)=>{
                if(!res.ok){
                    throw new Error(`error => ${res.status}`)
                }
                return res.json()
            })
            .then((data)=>{
                setData(data);
                setIsPending(false)

            })
            .catch((err)=>{
                setError(err.message);
                setIsPending(false)
            })

    },[])


    // console.log(cart)
  return (
    <>
    {data &&<Products data={data} cart={cart} setCart={setCart}></Products>}
    
    </>
  )
}
