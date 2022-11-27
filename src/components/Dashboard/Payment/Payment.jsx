import { CardElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
const stripeKey = import.meta.env.VITE_APP_stripe_pk;

const Payment = () => {
  const order = useLoaderData();
  const stripePromise = loadStripe(stripeKey);

  return (
    <div className="bg-gray-50 p-4">
      <h3 className="text-2xl p-3">
        Pay <strong>{order.sellPrice}৳</strong> for {order.name}
      </h3>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm order={order} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
