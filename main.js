//Javascript to create a function call to get the visitor count value from a Cosmos DB via an Azure Function


// Event listener
window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitorCount();
})

const   functionAPI = '';

// Call the function app
const getVisitorCount = () => {

    let count = 30;
    fetch(functionAPI).then(response => {
        return response.json()

    }).then(response =>{
        console.log("Website call to Function API");
        count = response.count;
        document.getElementById("counter").innerText=count;
    }).catch(function(error){
        console.log(error);
    }
    );
    return count;
}