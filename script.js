const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

// Function to toggle the menu and close it when clicking on a menu item
function toggleMenu() {
    navLinks.classList.toggle('active');
}

// Event listener for the menu icon
menuIcon.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevents the click event from reaching the document body
    toggleMenu();
});

// Event listener for menu items
const navItems = document.querySelectorAll('#nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevents the click event from reaching the document body
        toggleMenu(); // Close the menu
    });
});

// Event listener to close the menu when clicking outside
document.body.addEventListener('click', function() {
    navLinks.classList.remove('active'); // Close the menu
});

// Popup functionality
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');
    const closeBtn = document.querySelector('.close');

    const projectDetails = {
        inventory: "<p>The Inventory Management System project involves developing a robust system to manage stock levels, orders, and deliveries efficiently. It features real-time tracking and automated alerts for low stock levels.•	Designed one of the best and optimized inventory management systems. The major goal of the database design is to locate entities engaged in inventory management. then determined each entity's properties using these entities.The created database followed BCNF, also tested database by updating and deleting data entities, used Indexing for Improved performance and created several functions. Developed a user interface where users can give the SQL queries in input box and fetch the results through web page which is deployed on a local server. used HTML, CSS, and ReactJS to create user interface. </p>",
        timeseries: "<p>The Time Series Analysis project focuses on analyzing and forecasting trends using historical data. This project utilizes various statistical and machine learning techniques to predict future values. Preprocessed the dataset, imputed missing values using seadec imputation, performed augmented dickey fuller test to check non-stationarity of dataset.Tested several models i.e., ARIMA, SARIMA, Holt winters, ETS, STL, Prophet etc. used AIC, BIC and RMSE values as metrics to evaluate performance of models, also created several plots for analysis.</p>",
        recession: "<p>The Recession Prediction project aims to predict economic downturns using macroeconomic indicators and advanced modeling techniques. The project includes data analysis, feature engineering, and model evaluation.•	Demonstrated a thorough comprehension of macroeconomic concepts leveraging time series data starting from 1960. observed correlations between features, including yield curve data. Utilized data of the past 58 years to provide predictions.Developed expertise in model selection, filtering features, and hyperparameter tuning to achieve a predictive accuracy of 80% for identifying economic recessions. Skilled in building predictive models for economic analysis.Gained expertise in identifying trends, seasonal patterns, cyclic patterns, and autocorrelation in time series data.</p>",
        customersegmentation: "<p>The Customer Segmentation project involves segmenting customers based on their behaviors and demographics. It uses clustering algorithms to identify distinct customer groups and helps tailor marketing strategies accordingly.Led a customer segmentation analysis, determined distinct customer groups based on previous purchases and demographic data. Improved model accuracy by 20% over previous product-based segmentation methods.Developed a deep understanding of clustering and dimensionality reduction techniques, specifically deploying Principal Component Analysis (PCA), to extract meaningful insights from customer data.Devised targeted marketing strategies resulted in a 12% increase in overall customer engagement and an increase in sales.</p>"
    };
    
    document.querySelectorAll('.know-more').forEach(button => {
        button.addEventListener('click', function() {
            const projectKey = this.getAttribute('data-project');
            console.log('Button clicked for project:', projectKey); // Debug log
            console.log('Project details:', projectDetails[projectKey]); // Debug log
            popupText.innerHTML = projectDetails[projectKey];
            popup.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});


