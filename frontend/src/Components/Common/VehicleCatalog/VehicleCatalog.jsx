import React from "react";
import "./VehicleCatalog.styles.css";
import VehicleCard from "../VehicleCard/VehicleCard";
import Constants from "../../../Utils/Constants";

import axios from "axios";

const VehicleCatalog = () => {
  let catalog = [];
  axios.get(`${Constants.BACKEND_SERVER}/getAllVehicles`).then((response) => {
    catalog = response.body.catalog;
  });
  const bannerDetails = [
    {
      imageURL:
        "https://media2.zipcar.com/drupal-presales/column-section/ic-saving_0.svg",
      text:
        "Zipcar covers gas, insurance, parking, and maintenance for a potential savings of $600/month over car ownership.",
    },
    {
      imageURL:
        "https://media2.zipcar.com/drupal-presales/column-section/ic-saving_0.svg",
      text:
        "Zipcar covers gas, insurance, parking, and maintenance for a potential savings of $600/month over car ownership.",
    },
    {
      imageURL:
        "https://media2.zipcar.com/drupal-presales/column-section/ic-saving_0.svg",
      text:
        "Zipcar covers gas, insurance, parking, and maintenance for a potential savings of $600/month over car ownership.",
    },
    {
      imageURL:
        "https://media2.zipcar.com/drupal-presales/column-section/ic-saving_0.svg",
      text:
        "Zipcar covers gas, insurance, parking, and maintenance for a potential savings of $600/month over car ownership.",
    },
    {
      imageURL:
        "https://media2.zipcar.com/drupal-presales/column-section/ic-saving_0.svg",
      text:
        "Zipcar covers gas, insurance, parking, and maintenance for a potential savings of $600/month over car ownership.",
    },
    {
      imageURL:
        "https://media2.zipcar.com/drupal-presales/column-section/ic-saving_0.svg",
      text:
        "Zipcar covers gas, insurance, parking, and maintenance for a potential savings of $600/month over car ownership.",
    },
    {
      imageURL:
        "https://media2.zipcar.com/drupal-presales/column-section/ic-saving_0.svg",
      text:
        "Zipcar covers gas, insurance, parking, and maintenance for a potential savings of $600/month over car ownership.",
    },
    {
      imageURL:
        "https://media2.zipcar.com/drupal-presales/column-section/ic-saving_0.svg",
      text:
        "Zipcar covers gas, insurance, parking, and maintenance for a potential savings of $600/month over car ownership.",
    },
    {
      imageURL:
        "https://media2.zipcar.com/drupal-presales/column-section/ic-saving_0.svg",
      text:
        "Zipcar covers gas, insurance, parking, and maintenance for a potential savings of $600/month over car ownership.",
    },
    {
      imageURL:
        "https://media2.zipcar.com/drupal-presales/column-section/ic-saving_0.svg",
      text:
        "Zipcar covers gas, insurance, parking, and maintenance for a potential savings of $600/month over car ownership.",
    },
    {
      imageURL:
        "https://media2.zipcar.com/drupal-presales/column-section/ic-saving_0.svg",
      text:
        "Zipcar covers gas, insurance, parking, and maintenance for a potential savings of $600/month over car ownership.",
    },
    {
      imageURL:
        "https://media2.zipcar.com/drupal-presales/column-section/ic-saving_0.svg",
      text:
        "Zipcar covers gas, insurance, parking, and maintenance for a potential savings of $600/month over car ownership.",
    },
    {
      imageURL:
        "https://media2.zipcar.com/drupal-presales/column-section/ic-saving_0.svg",
      text:
        "Zipcar covers gas, insurance, parking, and maintenance for a potential savings of $600/month over car ownership.",
    },
  ];

  return (
    <div className="catalogPage">
      <div className="vehicleCatalog">
        {bannerDetails.map((details) => (
          <VehicleCard {...details} />
        ))}
      </div>
    </div>
  );
};

export default VehicleCatalog;
