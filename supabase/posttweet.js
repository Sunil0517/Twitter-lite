const postMethods = () => {
    fetch("tweets.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("Data fetched:", data);
            data.forEach(element => {
                fetch("http://localhost:3004/tweets/1", {  
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(element)
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("Success:", data);
                })
                .catch(error => {
                    console.error("Error:", error);
                });
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
};

postMethods();
