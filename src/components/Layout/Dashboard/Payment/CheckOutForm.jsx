

import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import { useState } from "react";




const CheckOutForm = () => {
    const [error, setError] = useState()
    const stripe = useStripe();
    const elements = useElements();


    const handleSubmit = async (event)=>{
        event.preventDefault();
    
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
          }
    
          const card = elements.getElement(CardElement);
          if (card == null) {
            return;
          }
    
    
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
    
    
          if (error) {
            console.log('[error]', error);
            setError(error.message)
          } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
          }
        };

    return (
       <form onSubmit={handleSubmit}>
        <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-info bg-red-700 text-white" type="submit" disabled={!stripe}>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
       </form>
    );
};

export default CheckOutForm;