const itemsRecommended = [
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
        review: "5 (42)"
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
];
const itemsRated = [
    {
        id: 1,
        tripType: "DAY TRIP",
        name: "Ho Chi Minh City: Private Street Food Motorbike Tour",
        description: "4 hours • Pickup available",
        image: "images/rated-image.png",
        cost: "đ800,000",
        review: "4.8 (638)"
    },
    {
        id: 2,
        tripType: "DAY TRIP",
        name: "Saigon: City Day Sights & Local Food Tour | Opt: Ao Dai Riders",
        description: "4 hours • Pickup available",
        image: "images/rated-image.png",
        cost: "đ671,500",
        review: "5 (42)"
    },
    {
        id: 3,
        tripType: "DAY TRIP",
        name: "Ho Chi Minh City: Walking Food Tour with 13 Tastings",
        description: "3.5 hours • Pickup available",
        image: "images/rated-image.png",
        cost: "đ394,100",
        review: "4.7 (848)"
    },
    {
        id: 4,
        tripType: "DAY TRIP",
        name: "Saigon: Night Sights & Local Food Tour w Ao Dai Rider Option",
        description: "3.5 hours • Pickup available",
        image: "images/rated-image.png",
        cost: "đ2,910,800",
        review: "4.8 (276)"
    },
];
const itemsRecently = [
    {
        id: 1,
        tripType: "DAY TRIP",
        name: "Ho Chi Minh: A O Show Bamboo Circus at Saigon Opera House",
        description: "1 hours",
        image: "images/tour-image.png",
        cost: "đ800,000",
        review: "4.8 (638)"
    },
    {
        id: 2,
        tripType: "DAY TRIP",
        name: "Ho Chi Minh: Original Walking Street Food Tour With Local",
        description: "3 hours • Private group • Pickup available",
        image: "images/rated-image.png",
        cost: "đ671,500",
        review: "5 (42)"
    },
    {
        id: 3,
        tripType: "DAY TRIP",
        name: "Ho Chi Minh: Water Puppet Show Ticket",
        description: "45 minutes",
        image: "images/tour-image.png",
        cost: "đ394,100",
        review: "4.7 (848)"
    },
    {
        id: 4,
        tripType: "DAY TRIP",
        name: "Ho Chi Minh City: Mekong Delta Full-Day Speedboat Tour",
        description: "8 hours • Pickup available",
        image: "images/rated-image.png",
        cost: "đ2,910,800",
        review: "4.8 (276)"
    },
];

// Populate the recommended list
const recommendedList = document.getElementById("recommended-list");
itemsRecommended.forEach(item => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <div class="tour-image">
            <img src="${item.image}" alt="${item.name}" class="pro-image">
        </div>
        <img src="images/fav-heart.png" alt="${item.name}" class="fav-heart" onclick="toggleFavorite(this)" data-favorite="false">
        <div class="content-recommended">
            <h3>${item.tripType}</h3>
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <div class="info-recommended">
                <h4>From ${item.cost}</h4>
                <div class="feedback-recommended">
                    <img src="images/star.png" alt="${item.name}">
                    <h5>${item.review}</h5>
                </div>
            </div>
        </div>
    `;
    recommendedList.appendChild(listItem);
});

// Populate the rated list
const ratedList = document.getElementById("rated-list");
itemsRated.forEach(item => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
            <div class="tour-image">
                <img src="${item.image}" alt="${item.name}" class="pro-image">
            </div>
            <img src="images/fav-heart.png" alt="${item.name}" class="fav-heart" onclick="toggleFavorite(this)" data-favorite="false">
            <div class="content-rated">
                <h3>${item.tripType}</h3>
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <div class="info-rated">
                    <h4>From ${item.cost}</h4>
                    <div class="feedback-rated">
                        <img src="images/star.png" alt="${item.name}">
                        <h5>${item.review}</h5>
                    </div>
                </div>
        </div>
    `;
    ratedList.appendChild(listItem);
});

// Populate the rated list
const recentlyList = document.getElementById("recently-list");
itemsRecently.forEach(item => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <div class="tour-image">
            <img src="${item.image}" alt="${item.name}" class="pro-image">
        </div>
        <img src="images/fav-heart.png" alt="${item.name}" class="fav-heart" onclick="toggleFavorite(this)" data-favorite="false">        <div class="content-recently">
            <h3>${item.tripType}</h3>
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <div class="info-recently">
                <h4>From ${item.cost}</h4>
                <div class="feedback-recently">
                    <img src="images/star.png" alt="${item.name}">
                    <h5>${item.review}</h5>
                </div>
            </div>
        </div>
    `;
    recentlyList.appendChild(listItem);
});
function toggleFavorite(img) {
    if (img.dataset.favorite === "false") {
        img.src = "images/fav-heart-ON.png";
        img.dataset.favorite = "true";
    } else {
        img.src = "images/fav-heart.png";
        img.dataset.favorite = "false";
    }
}