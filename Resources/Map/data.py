import os
import csv

#Reads CSV file
covid_csv = os.path.join("..","COVID_Cases_Mortality_Features_By_Country.csv")

with open(covid_csv) as csvfile:
    csvreader = csv.reader(csvfile, delimiter=",")
    for row in csvreader:
        country = row[0]
        population  = row[1]
        tourism = row[2]
        cases = row[10]
        deaths = row[11]
        age = row[7]
        lat = row[5]
        long = row[6]
        print("{")
        print(f"     coordinates: [{lat} , {long}],")
        print("     country: {")
        print(f"         name: '{country}' ,")
        print(f"         population: {population},")
        print(f"         tourism:{tourism},")
        print(f"         cases:{cases},")
        print(f"         deaths:{deaths},")
        print(f"         mean_age:{age}")
        print("     },")
        print("    },")