# leaflet-challenge

Leaflet Homework: Visualizing Data with Leaflet
Background

1-Logo

Welcome to the United States Geological Survey, or USGS for short. The USGS is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. As a new hire, you will be helping them out with an exciting new project!

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.
Before You Begin

    Create a new repository for this project called leaflet-challenge. Do not add this homework to an existing repository.

    Clone the new repository to your computer.

    Inside your local git repository, create a directory for the Leaflet challenge. Use the folder names to correspond to the challenges: Leaflet-Step-1 and Leaflet-Step-2.

    This homework uses both html and JavaScript so be sure to add all the necessary files. These will be the main files to run for analysis.

    Push the above changes to GitHub or GitLab.

Your Task
Level 1: Basic Visualization

2-BasicMap

Your first task is to visualize an earthquake data set.

    Get your data set

    3-Data

    The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the USGS GeoJSON Feed page and pick a data set to visualize. When you click on a data set, for example "All Earthquakes from the Past 7 Days", you will be given a JSON representation of that data. You will use the URL of this JSON to pull in the data for our visualization.

    4-JSON

    Import & Visualize the Data

    Create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude.

        Your data markers should reflect the magnitude of the earthquake by their size and and depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger and earthquakes with greater depth should appear darker in color.

        HINT: The depth of the earth can be found as the third coordinate for each earthquake.

        Include popups that provide additional information about the earthquake when a marker is clicked.

        Create a legend that will provide context for your map data.

        Your visualization should look something like the map above.



RESULT: 

![image](https://user-images.githubusercontent.com/89807813/148324885-ce3816d4-396c-4e7b-b972-c6a0be3ded3d.png)
