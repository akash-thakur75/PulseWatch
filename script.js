const button = document.getElementById("btn");

button.addEventListener("click", async function () {

    const brand = document.getElementById("brand").value;
    const review = document.getElementById("review").value;

    if (brand === "" || review === "") {
        alert("Please enter Brand and Review");
        return;
    }

    try {

        const response = await fetch(
            "https://mkbzq4cqta.execute-api.ap-south-1.amazonaws.com/prod/sentiment",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    brand: brand,
                    text: review
                })
            }
        );

        const data = await response.json();

        document.getElementById("result").innerHTML =
        `
        <p>Brand : <b>${data.brand}</b></p>
        <p>Sentiment : <b>${data.sentiment}</b></p>
        <p>Message : <b>${data.message}</b></p>
        `;

    }
    catch(error){

        document.getElementById("result").innerHTML =
        `
        <p style="color:red">
        API Error
        </p>
        `;

        console.log(error);

    }

});