import React from 'react';

const Paymennt = () => {
    return (
        <>
            <div className="container-fluid pay-container mb-5">
                <div>
                    <p className="fs-4">Pay Your Payment</p>
                    <button className="checkout-button btn btn-primary">
                        <a href='https://paycube.vercel.app/processpayment' target="_blank" className='text-white text-decoration-none'>Checkout</a>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Paymennt;