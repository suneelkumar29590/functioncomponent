import { useState } from 'react';
import './index.css';
import React from 'react';


       const Evenodd=()=>{
        const [count, setcount]=useState(0);
        const [isclicked, setisclicked]=useState(true);
        const generaterandomnumber=()=>{
            const random=Math.floor(Math.random()*101);
            setcount(count+random);
            console.log(random);
            const number=count+random;
            console.log(number)

            if (number%2===0)
            {
                setisclicked(true)
            }
            else{
                setisclicked(false)
            }
        };
        return(
            <div>
                <center>
                    <div className='even mt-5'>
                        <div>
                            <h3>count <span>{count}</span></h3>
                            <h5>count is <span>{isclicked?"even":"odd"}</span></h5>
                            <button className='btn btn-primary' onClick={generaterandomnumber}>increament

                            </button>
                        </div>

                    </div>
                </center>
            </div>
        )
       }


export default Evenodd;