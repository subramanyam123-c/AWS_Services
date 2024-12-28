// Replace with your actual API endpoint
var API_ENDPOINT = "YOUR_API_GATEWAY";

// 1) SAVE (CREATE) PRODUCT
document.getElementById("saveproduct").onclick = function(){
    var inputData = {
        "productid": $('#productid').val(),
        "name": $('#name').val(),
        "description": $('#description').val(),
        "price": $('#price').val(),
        "category": $('#category').val()
    };
    $.ajax({
        url: API_ENDPOINT,         // POST to root or /products if that's how your API is set
        type: 'POST',
        data: JSON.stringify(inputData),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            document.getElementById("productSaved").innerHTML = "Product Data Saved!";
        },
        error: function () {
            alert("Error saving product data.");
        }
    });
};

// 2) GET ALL PRODUCTS
document.getElementById("getproducts").onclick = function(){  
    $.ajax({
        url: API_ENDPOINT,         // GET from root or /products
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        success: function(response) {
            // If using non-proxy integration, the array is likely in response.body:
            var products = JSON.parse(response.body);

            // Clear existing rows (except the header row)
            $('#productTable tr').slice(1).remove();  

            // Append each product as a new row
            $.each(products, function(i, item) {
                $("#productTable").append("<tr> \
                    <td>" + (item['ProductID'] || '') + "</td> \
                    <td>" + (item['name'] || '') + "</td> \
                    <td>" + (item['description'] || '') + "</td> \
                    <td>" + (item['price'] || '') + "</td> \
                    <td>" + (item['category'] || '') + "</td> \
                </tr>");
            });
        },
        error: function () {
            alert("Error retrieving product data.");
        }
    });
};

// 3) GET PRODUCT BY ID
document.getElementById("getproductbyid").onclick = function(){  
    var pid = $('#productidSearch').val().trim();
    if(!pid){
        alert("Please enter a Product ID.");
        return;
    }

    // Example: GET /{productid}
    $.ajax({
        url: API_ENDPOINT + "/" + pid,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        success: function(response) {
            // If it's non-proxy integration returning a single item in response.body:
            var product = JSON.parse(response.body);

            if(product && product.ProductID){
                document.getElementById("singleProductResult").innerHTML =
                    "Found product: " +
                    "<br>ID: " + product.ProductID +
                    "<br>Name: " + product.name +
                    "<br>Description: " + product.description +
                    "<br>Price: " + product.price +
                    "<br>Category: " + product.category;
            } else {
                document.getElementById("singleProductResult").innerHTML =
                    "No product found with ProductID " + pid;
            }
        },
        error: function () {
            alert("Error retrieving product by ID.");
        }
    });
};

// 4) DELETE PRODUCT BY ID
document.getElementById("deleteproduct").onclick = function(){
    var pid = $('#productidDelete').val().trim();
    if(!pid){
        alert("Please enter a Product ID to delete.");
        return;
    }

    // Example: DELETE /{productid}
    $.ajax({
        url: API_ENDPOINT + "/" + pid,
        type: 'DELETE',
        contentType: 'application/json; charset=utf-8',
        success: function(response) {
            // If the Lambda returns a success message in response.body:
            if(response && response.body){
                document.getElementById("deleteResult").innerHTML = response.body;
            } else {
                document.getElementById("deleteResult").innerHTML = "Delete successful.";
            }
        },
        error: function () {
            alert("Error deleting product.");
        }
    });
};
