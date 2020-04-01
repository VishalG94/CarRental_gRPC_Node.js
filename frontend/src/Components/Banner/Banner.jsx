import React from "react";
import BannerCard from "../BannerCard/BannerCard";
import "./Banner-styles.css";

const Banner = () => {
  const bannerDetails = [
    {
      imageURL:
        "https://media2.zipcar.com/drupal-presales/column-section/ic-saving_0.svg",
      text:
        "Zipcar covers gas, insurance, parking, and maintenance for a potential savings of $600/month over car ownership."
    },
    {
      imageURL:
        "https://media2.zipcar.com/drupal-presales/column-section/ic-saving_0.svg",
      text:
        "Zipcar covers gas, insurance, parking, and maintenance for a potential savings of $600/month over car ownership."
    },
    {
      imageURL:
        "https://media2.zipcar.com/drupal-presales/column-section/ic-saving_0.svg",
      text:
        "Zipcar covers gas, insurance, parking, and maintenance for a potential savings of $600/month over car ownership."
    },
    {
      imageURL:
        "https://media2.zipcar.com/drupal-presales/column-section/ic-saving_0.svg",
      text:
        "Zipcar covers gas, insurance, parking, and maintenance for a potential savings of $600/month over car ownership."
    },
    {
      imageURL:
        "https://media2.zipcar.com/drupal-presales/column-section/ic-saving_0.svg",
      text:
        "Zipcar covers gas, insurance, parking, and maintenance for a potential savings of $600/month over car ownership."
    }
  ];

  return (
    <div className="Banner">
      {bannerDetails.map(details => (
        <BannerCard {...details} />
      ))}
    </div>
  );
};

export default Banner;
