# Project_3

from flask import Flask, jsonify, render_template
import pandas as pd
import sqlite3
import matplotlib.pyplot as plt

@app.route('/tourism')
def tourism():
    conn = sqlite3.connect("sqlite:///../input/COVID_Cases_Mortality_Features_By_Country.sqlite")
    coutries_tourism_df = pd.read_sql_query('SELECT Country, Tourism FROM COVID_data ORDER BY Tourism DESC LIMIT 10', conn)
    conn.close()
    
    x = coutries_tourism_df['Country']
    y = coutries_tourism_df['Tourism']
    
    plt.figure(figsize=(12, 6))
    plt.bar(x, y)
    plt.title("Countries Vs Tourism")
    plt.xlabel("Countries")
    plt.ylabel("Tourism")
    plt.xticks(rotation='vertical')
    
    # Save the plot to a file
    plt.savefig('tourism.png')
    
    return jsonify({'message': 'Tourism plot created successfully!'})

@app.route('/population')
def population():
    conn = sqlite3.connect("sqlite:///../input/COVID_Cases_Mortality_Features_By_Country.sqlite")
    coutries_population_df = pd.read_sql_query('SELECT Country, Population_Size FROM COVID_data ORDER BY Population_Size DESC LIMIT 10', conn)
    conn.close()
    
    x = coutries_population_df['Country']
    y = coutries_population_df['Population_Size']
    
    plt.figure(figsize=(12, 6))
    plt.bar(x, y)
    plt.title("Countries Vs Population")
    plt.xlabel("Countries")
    plt.ylabel("Population")
    plt.xticks(rotation='vertical')
    
    # Save the plot to a file
    plt.savefig('population.png')
    
    return jsonify({'message': 'Population plot created successfully!'})

@app.route('/meanage')
def meanage():
    conn = sqlite3.connect("sqlite:///../input/COVID_Cases_Mortality_Features_By_Country.sqlite")
    meanage_death_df = pd.read_sql_query('SELECT Mean_Age, Deaths FROM COVID_data GROUP BY Mean_Age ORDER BY Mean_Age DESC LIMIT 10', conn)
    conn.close()
    
    x = meanage_death_df['Mean_Age']
    y = meanage_death_df['Deaths']
    
    plt.figure(figsize=(12, 6))
    plt.bar(x, y)
    plt.title("Mean Age Vs Deaths")
    plt.xlabel("Mean Age")
    plt.ylabel("Deaths")
    plt.xticks(rotation='vertical')
    
    # Save the plot to a file
    plt.savefig('meanage.png')
    
    return jsonify({'message': 'Mean Age plot created successfully!'})

if __name__ == '__main__':
    app.run(debug=True)
