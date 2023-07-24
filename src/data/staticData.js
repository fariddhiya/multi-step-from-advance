import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";

const planData = [
  { icon: arcadeIcon, plan: "Arcade", monthPrice: 9, yearPrice: 90 },
  { icon: advancedIcon, plan: "Advanced", monthPrice: 12, yearPrice: 120 },
  { icon: proIcon, plan: "Pro", monthPrice: 15, yearPrice: 150 },
];

const infoData = [
  { label: "Name", placeholder: "e.g. Stephen King" },
  { label: "Email Address", placeholder: "e.g. stephenking@lorem.com" },
  { label: "Phone Number", placeholder: "e.g. +1 234 567 890" },
];

const addOnsData = [
  {
    label: "Online service",
    desc: "Access to multiplayer games",
    monthPrice: 1,
    yearPrice: 10,
  },
  {
    label: "Larger storage",
    desc: "Extra 1TB of cloud save",
    monthPrice: 2,
    yearPrice: 20,
  },
  {
    label: "Customizable profile",
    desc: "Custom theme on your profile",
    monthPrice: 2,
    yearPrice: 20,
  },
];

export { planData, infoData, addOnsData };
