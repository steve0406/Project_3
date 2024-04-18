There is not a single person alive right now that has not been affected by COVID-19 a few years ago. Countries all accross the world was adversly affected to varying degrees. In this project we aim to gain some more insights into how different countries were affected. We aim to look at countries with the highest population and tourism to see if there is any correlation between the amount of cases and deaths within those countries. We also would are going to make the comparison of the highest deaths along with the mean age in those countries.

Some ethical considerations that we took was we ensured that the data we used did not include any Personal Indentifiable Information (PII). Every metric and parameter that is available in this dataset cannot be used to identify anyone.

Files in this repo:
1) COVID_Cases_Mortality_Features_By_Country.csv - Dataset in csv format
2) COVID_Cases_Mortality_Features_By_Country.sqlite - Dataset in sqlite format
3) DataVisualizationNotebook.ipynb - Python code that shows all the barchart visualization from the mysql database
4) data.py - python script that reads the csv file and convers the data to javascript format
5) data.js - data input from the csv file that is use as an input for the leaflet map
6) map.js - javascript code that is used to create the leaflet man visualization
7) index.html - website to show the leaflet visualization
8) style.css - adds some customization to the html website
9) app.py - Flask routes for seaborn visualizations

The dataset was from Kaggle, it came with a csv file and a sqlite database.
https://www.kaggle.com/datasets/mdinmore/covid-cases-mortality-with-features-by-country
