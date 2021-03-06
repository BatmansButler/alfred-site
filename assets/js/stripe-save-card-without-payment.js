var stripeElements = function(publicKey, setupIntent) {
    var stripe = Stripe(publicKey);
    var elements = stripe.elements();

    // Element styles
    var style = {
        base: {
            fontSize: "16px",
            color: "#32325d",
            fontFamily:
                "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
            fontSmoothing: "antialiased",
            "::placeholder": {
                color: "rgba(0,0,0,0.4)"
            }
        }
    };

    var card = elements.create("card", { style: style });

    card.mount("#card-element");

    // Element focus ring
    card.on("focus", function() {
        var el = document.getElementById("card-element");
        el.classList.add("focused");
    });

    card.on("blur", function() {
        var el = document.getElementById("card-element");
        el.classList.remove("focused");
    });

    // Handle payment submission when user clicks the pay button.
    var button = document.getElementById("submit");
    button.addEventListener("click", function(event) {
        event.preventDefault();
        changeLoadingState(true);
        var email = document.getElementById("email").value;

        console.log("DEBUG: setupIntent:", setupIntent);
        console.log("DEBUG: email:", email);

        stripe
            .confirmCardSetup(setupIntent.createdPresale.client_secret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: email
                    }
                }
            })
            .then(function(result) {
                if (result.error) {
                    changeLoadingState(false);
                    var displayError = document.getElementById("card-errors");
                    displayError.textContent = result.error.message;
                } else {
                    // The PaymentMethod was successfully set up
                    orderComplete(stripe, setupIntent.createdPresale.client_secret);
                }
            });
    });
};

var getSetupIntent = function(publicKey, setupIntentUrl, metadata) {
    // TODO: Dynamically change pre-sale 'plan' property based on selected plan
    // return fetch("/create-setup-intent", {
    return fetch(setupIntentUrl, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(metadata),
        // body: JSON.stringify({
        //     // amount: "24",
        //     // currency: "USD",
        //     plan: "presale-test-plan",
        // })
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(setupIntent) {
            stripeElements(publicKey, setupIntent);
        });
};

var getPublicKey = function() {
    return fetch("/public-key", {
        method: "get",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            getSetupIntent(response.publicKey);
        });
};

// Show a spinner on payment submission
var changeLoadingState = function(isLoading) {
    if (isLoading) {
        document.querySelector("button").disabled = true;
        document.querySelector("#spinner").classList.remove("hidden");
        document.querySelector("#button-text").classList.add("hidden");
    } else {
        document.querySelector("button").disabled = false;
        document.querySelector("#spinner").classList.add("hidden");
        document.querySelector("#button-text").classList.remove("hidden");
    }
};

/* Shows a success / error message when the payment is complete */
var orderComplete = function(stripe, clientSecret) {
    console.log("Stripe setupIntent successful!")
    stripe.retrieveSetupIntent(clientSecret).then(function(result) {
        var setupIntent = result.setupIntent;
        var setupIntentJson = JSON.stringify(setupIntent, null, 2);

        document.querySelector(".sr-payment-form").classList.add("hidden");
        document.querySelector(".sr-result").classList.remove("hidden");
        // TODO: Display success message instead of JSON after successful testing
        // document.querySelector("pre").textContent = setupIntentJson;
        // setTimeout(function() {
        //     document.querySelector(".sr-result").classList.add("expand");
        // }, 200);

        // $("#presaleModal").modal().hide();
        // $("#successModal").modal().show();
        var presaleModal = document.getElementById("presaleModal");
        bootstrap.Modal.getInstance(presaleModal).hide();
        var successModal = document.getElementById("successModal");
        new bootstrap.Modal(successModal).show();

        changeLoadingState(false);
    });
};

// getPublicKey();

const plan_id = document.getElementById("plan_id").value;
const plan_coupon = document.getElementById("plan_coupon").value;
const plan_referral = document.getElementById("plan_referral").value;
const metadata = { plan_id: plan_id, plan_coupon: plan_coupon, plan_referral: plan_referral };

// publicKey = "pk_test_51HvuI1GWadBFKXSLciAMeatoirfWpXeu75poNl2gMuIHevw3TaOUD4lRfQssEx4dnPXNodsKcLjHAkXPYflN79Su00y1MjsN8b"
publicKey = "pk_live_51HvuI1GWadBFKXSLwYtUZE2foY7cRxLDuHVlXbfmsYCS5IAiN2g3zc26yyOHfA6UeDAsJytOyCFd1iW1hwdK3KGw00nMQnVMJ0"
// setupIntentUrl = "http://127.0.0.1:3000/"
setupIntentUrl = "https://8vb8o3qehk.execute-api.us-east-1.amazonaws.com/prod/presale"
getSetupIntent(publicKey, setupIntentUrl, metadata);
