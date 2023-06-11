const router = require("express").Router();
//const stripe = require("stripe")(process.env.STRIPE_KEY);
//const KEY = process.env.STRIPE_KEY
//const stripe = require("stripe")(KEY);
const stripe = require('stripe')('sk_test_51NDlN7SJeWuhnYCirQtArtpdeETN2EnITUZGFTKCYAlVKaicRS33B8qeVrk1tzV8Rn1xBkJaiZaNEK0MZ0LyuURl00BIwB99mJ');

/* router.post("/payment",(req,res)=>{
    stripe.paymentIntents.create({
        source:req.body.tokenId,
        amount:req.body.amount,
        currency: "inr",
    },
    (stripeErr,stripeRes)=>{
        if(stripeErr){
            res.status(500).json(stripeErr);
        }else{
            res.status(200).json(stripeRes);
        }
    })
});
*/


router.post('/create-checkout-session', async (req, res) => {

     const line_items = req.body.products.map(item =>{
      return {
  price_data: {
            currency: 'inr',
            product_data: {
              name: item.product.title,
             
            },
            unit_amount: item.product.price *100,
          },
          quantity: item.quantity,
          }
        })
      
       const session = await stripe.checkout.sessions.create({
        line_items,
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
    });
  
    res.send({url: session.url});
  });
  
  module.exports = router; 
  
  
