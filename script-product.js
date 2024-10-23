const itemsProduct = [
    {
        id: 1,
        tripType: "DAY TRIP",
        name: "Ho Chi Minh: Cu Chi Tunnels and Mekong Delta Full-Day Tour",
        description: "10 hours • Small group • Pickup available",
        image: "images/tour-image.png",
        cost: "đ1,154,000",
        review: "4.6 (442)"
    },
    {
        id: 2,
        tripType: "DAY TRIP",
        name: "Private taxi: Mui Ne to Ho Chi Minh Airport (SGN)/HCM",
        description: "3 hours • Private group • Pickup available",
        image: "images/tour-image.png",
        cost: "đ1,740,000",
        review: "4.3 (12)"
    },
    {
        id: 3,
        tripType: "DAY TRIP",
        name: "Saigon: Street Food Tasting & Sightseeing Tour by Motorbike",
        description: "3 - 4 hours • Small group • Skip the line",
        image: "images/tour-image.png",
        cost: "đ669,700",
        review: "4.6 (4,422)"
    },
    {
        id: 4,
        tripType: "DAY TRIP",
        name: "Ho Chi Minh City: Food Tour by Scooter with Eleven Tastings",
        description: "4 hours • Pickup available",
        image: "images/tour-image.png",
        cost: "đ685,000",
        review: "5 (520)"
    },
    {
        id: 5,
        tripType: "DAY TRIP",
        name: "Ho Chi Minh: A O Show Bamboo Circus at Saigon Opera House",
        description: "1 hours",
        image: "images/tour-image.png",
        cost: "đ800,000",
        review: "4.8 (638)"
    },
    {
        id: 6,
        tripType: "DAY TRIP",
        name: "Ho Chi Minh: Original Walking Street Food Tour With Local",
        description: "3 hours • Private group • Pickup available",
        image: "images/tour-image.png",
        cost: "đ671,500",
        review: "5 (402)"
    },
    {
        id: 7,
        tripType: "DAY TRIP",
        name: "Ho Chi Minh: Water Puppet Show Ticket",
        description: "45 minutes",
        image: "images/tour-image.png",
        cost: "đ394,100",
        review: "4.7 (848)"
    },
    {
        id: 8,
        tripType: "DAY TRIP",
        name: "Ho Chi Minh City: Mekong Delta Full-Day Speedboat Tour",
        description: "8 hours • Pickup available",
        image: "images/tour-image.png",
        cost: "đ2,910,800",
        review: "4.8 (276)"
    },
    {
        id: 9,
        tripType: "DAY TRIP",
        name: "Ho Chi Minh: Cu Chi Tunnels and Mekong Delta Full-Day Tour",
        description: "10 hours • Small group • Pickup available",
        image: "images/tour-image.png",
        cost: "đ1,154,000",
        review: "4.6 (442)"
    },
    {
        id: 10,
        tripType: "DAY TRIP",
        name: "Private taxi: Mui Ne to Ho Chi Minh Airport (SGN)/HCM",
        description: "3 hours • Private group • Pickup available",
        image: "images/tour-image.png",
        cost: "đ1,740,000",
        review: "4.3 (12)"
    },
    {
        id: 11,
        tripType: "DAY TRIP",
        name: "Saigon: Street Food Tasting & Sightseeing Tour by Motorbike",
        description: "3 - 4 hours • Small group • Skip the line",
        image: "images/tour-image.png",
        cost: "đ669,700",
        review: "4.6 (4,422)"
    },
    {
        id: 12,
        tripType: "DAY TRIP",
        name: "Ho Chi Minh City: Food Tour by Scooter with Eleven Tastings",
        description: "4 hours • Pickup available",
        image: "images/tour-image.png",
        cost: "đ685,000",
        review: "5 (520)"
    },
    {
        id: 13,
        tripType: "DAY TRIP",
        name: "Ho Chi Minh: A O Show Bamboo Circus at Saigon Opera House",
        description: "1 hours",
        image: "images/tour-image.png",
        cost: "đ800,000",
        review: "4.8 (638)"
    },
    {
        id: 14,
        tripType: "DAY TRIP",
        name: "Ho Chi Minh: Original Walking Street Food Tour With Local",
        description: "3 hours • Private group • Pickup available",
        image: "images/tour-image.png",
        cost: "đ671,500",
        review: "5 (302)"
    },
    {
        id: 15,
        tripType: "DAY TRIP",
        name: "Ho Chi Minh: Water Puppet Show Ticket",
        description: "45 minutes",
        image: "images/tour-image.png",
        cost: "đ394,100",
        review: "4.7 (848)"
    },
    {
        id: 16,
        tripType: "DAY TRIP",
        name: "Ho Chi Minh City: Mekong Delta Full-Day Speedboat Tour",
        description: "8 hours • Pickup available",
        image: "images/tour-image.png",
        cost: "đ2,910,800",
        review: "4.8 (276)"
    },
    {
        id: 1,
        tripType: "DAY TRIP",
        name: "Ho Chi Minh: Cu Chi Tunnels and Mekong Delta Full-Day Tour",
        description: "10 hours • Small group • Pickup available",
        image: "images/tour-image.png",
        cost: "đ1,154,000",
        review: "4.6 (442)"
    },
    {
        id: 2,
        tripType: "DAY TRIP",
        name: "Private taxi: Mui Ne to Ho Chi Minh Airport (SGN)/HCM",
        description: "3 hours • Private group • Pickup available",
        image: "images/tour-image.png",
        cost: "đ1,740,000",
        review: "4.3 (12)"
    },
    {
        id: 3,
        tripType: "DAY TRIP",
        name: "Saigon: Street Food Tasting & Sightseeing Tour by Motorbike",
        description: "3 - 4 hours • Small group • Skip the line",
        image: "images/tour-image.png",
        cost: "đ669,700",
        review: "4.6 (4,422)"
    },
    {
        id: 4,
        tripType: "DAY TRIP",
        name: "Ho Chi Minh City: Food Tour by Scooter with Eleven Tastings",
        description: "4 hours • Pickup available",
        image: "images/tour-image.png",
        cost: "đ685,000",
        review: "5 (520)"
    },
    {
        id: 5,
        tripType: "DAY TRIP",
        name: "Ho Chi Minh: A O Show Bamboo Circus at Saigon Opera House",
        description: "1 hours",
        image: "images/tour-image.png",
        cost: "đ800,000",
        review: "4.8 (638)"
    },
    {
        id: 6,
        tripType: "DAY TRIP",
        name: "Ho Chi Minh: Original Walking Street Food Tour With Local",
        description: "3 hours • Private group • Pickup available",
        image: "images/tour-image.png",
        cost: "đ671,500",
        review: "5 (252)"
    },
    {
        id: 7,
        tripType: "DAY TRIP",
        name: "Ho Chi Minh: Water Puppet Show Ticket",
        description: "45 minutes",
        image: "images/tour-image.png",
        cost: "đ394,100",
        review: "4.7 (848)"
    },
    {
        id: 8,
        tripType: "DAY TRIP",
        name: "Ho Chi Minh City: Mekong Delta Full-Day Speedboat Tour",
        description: "8 hours • Pickup available",
        image: "images/tour-image.png",
        cost: "đ2,910,800",
        review: "4.8 (276)"
    },
    {
        id: 9,
        tripType: "DAY TRIP",
        name: "Ho Chi Minh: Cu Chi Tunnels and Mekong Delta Full-Day Tour",
        description: "10 hours • Small group • Pickup available",
        image: "images/tour-image.png",
        cost: "đ1,154,000",
        review: "4.6 (442)"
    },
    {
        id: 10,
        tripType: "DAY TRIP",
        name: "Private taxi: Mui Ne to Ho Chi Minh Airport (SGN)/HCM",
        description: "3 hours • Private group • Pickup available",
        image: "images/tour-image.png",
        cost: "đ1,740,000",
        review: "4.3 (12)"
    },
    {
        id: 11,
        tripType: "DAY TRIP",
        name: "Saigon: Street Food Tasting & Sightseeing Tour by Motorbike",
        description: "3 - 4 hours • Small group • Skip the line",
        image: "images/tour-image.png",
        cost: "đ669,700",
        review: "4.6 (4,422)"
    },
    {
        id: 12,
        tripType: "DAY TRIP",
        name: "Ho Chi Minh City: Food Tour by Scooter with Eleven Tastings",
        description: "4 hours • Pickup available",
        image: "images/tour-image.png",
        cost: "đ685,000",
        review: "5 (520)"
    },
    {
        id: 13,
        tripType: "DAY TRIP",
        name: "Ho Chi Minh: A O Show Bamboo Circus at Saigon Opera House",
        description: "1 hours",
        image: "images/tour-image.png",
        cost: "đ800,000",
        review: "4.8 (638)"
    },
    {
        id: 14,
        tripType: "DAY TRIP",
        name: "Ho Chi Minh: Original Walking Street Food Tour With Local",
        description: "3 hours • Private group • Pickup available",
        image: "images/tour-image.png",
        cost: "đ671,500",
        review: "5 (122)"
    },
    {
        id: 15,
        tripType: "DAY TRIP",
        name: "Ho Chi Minh: Water Puppet Show Ticket",
        description: "45 minutes",
        image: "images/tour-image.png",
        cost: "đ394,100",
        review: "4.7 (848)"
    },
    {
        id: 16,
        tripType: "DAY TRIP",
        name: "Ho Chi Minh City: Mekong Delta Full-Day Speedboat Tour",
        description: "8 hours • Pickup available",
        image: "images/tour-image.png",
        cost: "đ2,910,800",
        review: "4.8 (276)"
    },
];

function toggleFavorite(img) {
    if (img.dataset.favorite === "false") {
        img.src = "images/fav-heart-ON.png";
        img.dataset.favorite = "true";
    } else {
        img.src = "images/fav-heart.png";
        img.dataset.favorite = "false";
    }
}

let currentItemsCount = 0; // Keep track of how many items are currently displayed
const itemsToShow = 8; // Number of items to show with each button click

// Populate the product list
const productList = document.getElementById("product-list");

// Function to display items
function displayItems(startIndex) {
    const endIndex = Math.min(startIndex + itemsToShow, itemsProduct.length);
    for (let i = startIndex; i < endIndex; i++) {
        const item = itemsProduct[i];
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <div class="tour-image">
                <img src="${item.image}" alt="${item.name}" class="pro-image">
            </div>
            <img src="images/fav-heart.png" alt="${item.name}" class="fav-heart" onclick="toggleFavorite(this)" data-favorite="false">
            <div class="content-product">
                <h3>${item.tripType}</h3>
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <div class="info-product">
                    <h4>From ${item.cost}</h4>
                    <div class="feedback-product">
                        <img src="images/star.png" alt="${item.name}">
                        <h5>${item.review}</h5>
                    </div>
                </div>
            </div>
        `;
        productList.appendChild(listItem);
    }
    currentItemsCount += itemsToShow;

    // Hide the button if all items are displayed
    if (currentItemsCount >= itemsProduct.length) {
        document.getElementById("show-more-btn").style.display = 'none';
    }
}

// Initial display of items
displayItems(currentItemsCount);

// Event listener for the "Show More" button
document.getElementById("show-more-btn").addEventListener("click", () => {
    displayItems(currentItemsCount);
});