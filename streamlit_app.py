import streamlit as st

st.set_page_config(page_title="scube", layout="wide")

st.title("🌱 scube - Smart Agriculture App")

# Sidebar navigation
app = st.sidebar.radio("Choose a Module", [
    "Home",
    "Crop Recommendation",
    "Plant Disease Detection"
])

if app == "Home":
    st.markdown("Welcome to AgriSens 🌾")
    st.markdown("Use the sidebar to navigate between modules.")

elif app == "Crop Recommendation":
    exec(open("CROP-RECOMMENDATION/webapp.py").read())

elif app == "Plant Disease Detection":
    exec(open("PLANT-DISEASE-IDENTIFICATION/main.py").read())
