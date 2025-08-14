const express = require("express");
const app = express();
const port = 3040;

const cors = require("cors")  //Package to Link FrontEnd and Backend AND THESE TWO LINES SHOULD BE DECLARED  BELOW THE PORT NO. OTHERWISE IT WILL DISPLAY NETWORK ERROR ON TOAST
const stripe = require("stripe")("sk_test_51R7XJKRoF1SYIkBC0ZKcUI8PZdvrrEPk0owjHS1jkPvOhyXzZEwXUHLQMQXW79AnqqiSCBwwR9waD4XWZeErM7Eg00FmIQyUgR")
const verifyToken = require("./config/middleware");

const bodyParser = require("body-parser");

app.use(cors())

const seeder = require("./config/seeder")
seeder.adminseeder()

const config = require("./config/db");

app.use(express.json({ limit: "50mb" })); // Ensure JSON middleware is applied first //essential for routing and aways above the api routes export
app.use(express.urlencoded({ extended: true }));

const route = require("./Routes/apiRoutes")
app.use("/api",route)


app.use(express.static(__dirname+("/Public/")))




app.post("/api/create-checkout-session", verifyToken, async (req, res) => {
    console.log("Received body:", req.body); // Debugging log

    try {
        const { customerId, courseId, price } = req.body;

        if (!customerId || !courseId || !price) {
            console.error("Missing fields:", { customerId, courseId, price, quantity });
            return res.status(400).json({ message: "Missing required fields" });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "inr",
                        product_data: { name: courseId },
                        unit_amount: price * 100, 
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: "http://localhost:5173/success",
            cancel_url: "http://localhost:5173/cancel",
        });

        console.log("Stripe Session Created:", session.id);
        res.json({ id: session.id });
    } catch (error) {
        console.error("Stripe Error:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});



app.get("/eLearning",(req,res)=>{
    console.log("E-Learning on Chrome")
})

app.listen(port,()=>{
    console.log("WELCOME TO MY E-LEARNING PROJECT");
    console.log("PORT OF E-LEARNING PROJECT IS "+ port);

})