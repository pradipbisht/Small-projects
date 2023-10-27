
// API Key
const apiKey = '0089c5aac4c343dbb323c20c6dc1d441';

const container = document.querySelector('.container');
const optionsContainer = document.querySelector('.options-container');
// ----------------------------------------\\\\\\\
const prevPageButton = document.querySelector('#prevPage');
const nextPageButton = document.querySelector('#nextPage');
const itemsPerPage = 10; // Number of articles to display per page
let currentPage = 1; // Current page number


// 'in' stands for India
const country = 'in';

const options = [
    'general',
    'entertainment',
    'health',
    'science',
    'sports',
    'technology',
];

let requestURL;

const generateUI = (articles) => {
    for (let item of articles) {
        let card = document.createElement("div");
        card.classList.add("news-card");
        card.innerHTML = `<div class="news-image-container">
            <img src="${item.urlToImage || "./newspaper.jpg"}" alt=""/>
        </div>
        <div class="news-content">
            <div class="news-title">
                ${item.title}
            </div>
            <div class="news-description">
                ${item.description || item.content || ""}
            </div>
            <a href="${item.url}" target="_blank" class="view-button">Read More</a>
        </div>`;
        container.appendChild(card);
    }
};

// Function to update the UI with pagination
function updateUIWithPagination(articles) {
    container.innerHTML = '';

    // Calculate the starting and ending indices for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    for (let i = startIndex; i < endIndex; i++) {
        if (articles[i]) {
            let card = document.createElement("div");
            card.classList.add("news-card");
            card.innerHTML = `<div class="news-image-container">
                <img src="${articles[i].urlToImage || "./newspaper.jpg"}" alt=""/>
            </div>
            <div class="news-content">
                <div class="news-title">
                    ${articles[i].title}
                </div>
                <div class="news-description">
                    ${articles[i].description || articles[i].content || ""}
                </div>
                <a href="${articles[i].url}" target="_blank" class="view-button">Read More</a>
            </div>`;
            container.appendChild(card);
        }
    }
}
// Function to load the previous page
prevPageButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updateUIWithPagination(articlesData); // Replace 'articlesData' with your actual data
    }
});

// Function to load the next page
nextPageButton.addEventListener('click', () => {
    const totalArticles = articlesData.length; // Replace 'articlesData' with your actual data
    const totalPages = Math.ceil(totalArticles / itemsPerPage);

    if (currentPage < totalPages) {
        currentPage++;
        updateUIWithPagination(articlesData); // Replace 'articlesData' with your actual data
    }
});
// /--------------------------------------------------------

// News API call
const getNews = async () => {
    container.innerHTML = '';
    let response = await fetch(requestURL);
    if (!response.ok) {
        alert("Data is unavailable at the moment. Please try again later.");
        return false;
    }
    let data = await response.json();
    generateUI(data.articles);
};

// Category Selection
const selectCategory = (e, category) => {
    let options = document.querySelectorAll(".options");
    options.forEach((element) => {
        element.classList.remove('active');
    });
    requestURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
    e.target.classList.add('active');
    getNews();
};

// Options Buttons
const createOptions = () => {
    for (let i of options) {
        optionsContainer.innerHTML += `
            <button class="options ${i === "general" ? "active" : ""}" onclick="selectCategory(event, '${i}')">
                ${i}
            </button>`;
    }
};

const init = () => {
    optionsContainer.innerHTML = "";
    getNews();
    createOptions();
};

window.onload = () => {
    requestURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=general&apiKey=${apiKey}`;
    init();
};


// ////////////////////////////////////////////////////////////////////////////////////////////////////////////
const darkModeToggle = document.querySelector('#darkModeToggle');
const body = document.body;

// Check if dark mode is enabled
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Set the initial mode
if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}

// Toggle dark/light mode
darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    // Save the mode to local storage
    localStorage.setItem('darkMode', darkModeToggle.checked);
});
// /////////////////////////////////////////////pagiantion codes/////////////////////////////////////////////////////////



