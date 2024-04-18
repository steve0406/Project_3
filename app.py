from flask import Flask, send_file
import seaborn as sns
import pandas as pd
import matplotlib.pyplot as plt
import io
import os

# Flask Setup
app = Flask(__name__)

# Load data
new_df = pd.read_csv("../Project_3/COVID_Cases_Mortality_Features_By_Country.csv")

# Define directory for saving plots
plot_dir = os.path.join(app.static_folder, "plots")
os.makedirs(plot_dir, exist_ok=True)

# Define route for the landing page
@app.route("/")
def welcome():
    return (
        f"Available Routes: <br/>"
        f"/api/covid/pair_plot<br/>"
        f"/api/covid/pair_plot_with_hue<br/>"
        f"/api/covid/bar_plot<br/>"
        f"/api/covid/top_10_cases_bar_plot<br/>"
        
    )

# Define route to generate and serve the pair plot
@app.route("/api/covid/pair_plot")
def pair_plot():
    # Select relevant columns
    columns = ['Population_Size', 'Mean_Age', 'Outdoor_Pollution_Death_Rate', 'Case_Rate', 'Case_Fatality_Ratio']
    data = new_df[['Country'] + columns]

    # Generate pair plot
    sns_plot = sns.pairplot(data.dropna(), kind='reg')

    # Save the pair plot as an image
    plot_filename = 'pair_plot.png'
    plot_path = os.path.join(plot_dir, plot_filename)
    sns_plot.savefig(plot_path)
    plt.close()

    # Serve the image file
    return send_file(plot_path, mimetype='image/png')

# Define route to generate and serve the pair plot with hue
@app.route("/api/covid/pair_plot_with_hue")
def pair_plot_with_hue():
    # Generate pair plot with hue
    sns_plot = sns.pairplot(new_df.dropna(), hue="Country")

    # Save the pair plot as an image
    plot_filename = 'pair_plot_with_hue.png'
    plot_path = os.path.join(plot_dir, plot_filename)
    sns_plot.savefig(plot_path)
    plt.close()

    # Serve the image file
    return send_file(plot_path, mimetype='image/png')

@app.route("/api/covid/bar_plot")
def bar_plot():
    # Sort the DataFrame by 'Deaths' column in descending order and select the top 10 rows
    top_10_countries = new_df.sort_values(by='Deaths', ascending=False).head(10)

    # Generate bar plot
    sns.set(style="whitegrid")
    plt.figure(figsize=(10, 6))
    sns.barplot(data=top_10_countries, x="Country", y="Deaths")
    plt.title('Top 10 Countries by Deaths')
    plt.xlabel('Country')
    plt.ylabel('Deaths')
    plt.xticks(rotation=45)  # Rotate x-axis labels for better readability

    # Save the bar plot as an image
    plot_filename = 'bar_plot_top_10.png'
    plot_path = os.path.join(plot_dir, plot_filename)
    plt.savefig(plot_path)
    plt.close()

    # Serve the image file
    return send_file(plot_path, mimetype='image/png')

@app.route("/api/covid/top_10_cases_bar_plot")
def top_10_cases_bar_plot():
    # Sort the DataFrame by 'Cases' column in descending order and select the top 10 rows
    top_10_countries_cases = new_df.sort_values(by='Cases', ascending=False).head(10)

    # Generate bar plot
    sns.set(style="whitegrid")
    plt.figure(figsize=(10, 6))
    sns.barplot(data=top_10_countries_cases, x="Country", y="Cases")
    plt.title('Top 10 Countries by Cases')
    plt.xlabel('Country')
    plt.ylabel('Cases')
    plt.xticks(rotation=45)  # Rotate x-axis labels for better readability

    # Save the bar plot as an image
    plot_filename = 'top_10_cases_bar_plot.png'
    plot_path = os.path.join(plot_dir, plot_filename)
    plt.savefig(plot_path)
    plt.close()

    # Serve the image file
    return send_file(plot_path, mimetype='image/png')

# Define directory for saving plots
plot_dir = os.path.join(app.static_folder, "plots")
os.makedirs(plot_dir, exist_ok=True)


if __name__ == "__main__":
    app.run(debug=True)