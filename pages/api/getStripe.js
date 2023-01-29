import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe('pk_test_51MRcX1CPtQ54QjLhAx87SPNWYxVHk45XZ0xbUqXWMoa5BqEHoPDJByBexHoZ8QEK6qEllVPnARptvYwCCXYIczQY005KhC5F3c');
  }

  return stripePromise;
}

export default getStripe;