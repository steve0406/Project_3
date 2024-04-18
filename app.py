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


if __name__ == "__main__":
    app.run(debug=True)