import React from "react";

export const TABS = [
  {
    label: "Vacations Packages",
    icon: "/images/icons/tree-icon.svg",
    showFrom: true,
    showTo: true,
    showDates: true,
    showTravellers: true,
  },
  {
    label: "Hotels",
    icon: "/images/icons/bed-icon.svg",
    showFrom: false,
    showTo: true,
    showDates: true,
    showTravellers: true,
  },
  {
    label: "Flights",
    icon: "/images/icons/flights-icon.svg",
    showFrom: true,
    showTo: true,
    showDates: true,
    showTravellers: true,
  },
  {
    label: "Attractions",
    icon: "/images/icons/attractions-icon.svg",
    showFrom: false,
    showTo: true,
    showDates: false,
    showTravellers: false,
  },
  {
    label: "Cruises",
    icon: "/images/icons/cruises-icon.svg",
    showFrom: false,
    showTo: true,
    showDates: true,
    showTravellers: true,
  },
];

export const FILTERS = [
  "All inclusive",
  "Beach resorts",
  "Family friendly",
  "Adults only",
  "Cruises",
  "City breaks",
  "Ski & mountain",
  "Last minute",
];

export const DESTINATIONS = [
  {
    country: "Mexico",
    city: "CANCUN",
    price: "$949",
    image: "/images/destinations/destination1.jpg",
  },
  {
    country: "Dominican Rep.",
    city: "PUNTA CANA",
    price: "$899",
    image: "/images/destinations/destination2.jpg",
  },
  {
    country: "Cuba",
    city: "VARADERO",
    price: "$799",
    image: "/images/destinations/destination3.jpg",
  },
  {
    country: "Italy",
    city: "ROME",
    price: "$1,299",
    image: "/images/destinations/destination4.jpg",
  },
  {
    country: "Dominican Rep.",
    city: "PUNTA CANA",
    price: "$899",
    image: "/images/destinations/destination2.jpg",
  },
];

export const navItems = [
  { label: "Our Features", href: "/features" },
  { label: "Our Services", href: "/services" },
  { label: "Our Partners", href: "/partners" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const FOOTER_LINKS = [
  "Customer Support",
  "Travel Advisory",
  "redtag.ca gift cards",
  "Exclusive Perks",
];

export interface ResultCard {
  destination: string;
  nights: string;
  hotel: string;
  date: string;
  price: string;
  badge: string;
  badgeColor: string;
}

export const RESULTS: ResultCard[] = [
  {
    destination: "CANCUN · 7 NIGHTS",
    nights: "7 nights",
    hotel: "May 17 · Moon Palace",
    date: "",
    price: "$2,349",
    badge: "Best match",
    badgeColor: "bg-[#B91C1C]",
  },
  {
    destination: "VARADERO · 7 NIGHTS",
    nights: "7 nights",
    hotel: "May 17 · Melia Las Americas",
    date: "",
    price: "$1,899",
    badge: "Best value",
    badgeColor: "bg-[#B91C1C]",
  },
  {
    destination: "PUNTA CANA · 7 NIGHTS",
    nights: "7 nights",
    hotel: "May 18 · Iberostar",
    date: "",
    price: "$2,198",
    badge: "Popular",
    badgeColor: "bg-[#B91C1C]",
  },
  {
    destination: "VARADERO · 7 NIGHTS",
    nights: "7 nights",
    hotel: "May 17 · Melia Las Americas",
    date: "",
    price: "$1,899",
    badge: "Best match",
    badgeColor: "bg-[#B91C1C]",
  },
];

export const CHIPS = [
  "Which has the best beach?",
  "More on Cuba",
  "Extend to 10 nights",
  "Flight times",
];

export interface Deal {
  location: string;
  name: string;
  discount: number;
  nights: string;
  type: string;
  packageType: string;
  price: string;
  image: string;
}

export const DEALS: Deal[] = [
  {
    location: "Cancun",
    name: "Moon Palace Resort",
    discount: 32,
    nights: "May 17 to 24 · 7 nights",
    type: "All inclusive",
    packageType: "Flight + Hotel",
    price: "$1,249",
    image: "/images/deals/deal1.jpg",
  },
  {
    location: "Punta Cana",
    name: "Iberostar Selection",
    discount: 18,
    nights: "May 20 to 24 · 5 nights",
    type: "All inclusive",
    packageType: "Flight + Hotel",
    price: "$989",
    image: "/images/deals/deal2.jpg",
  },
  {
    location: "Varadero",
    name: "Melia Las Americas",
    discount: 24,
    nights: "May 17 to 24 · 7 nights",
    type: "All inclusive",
    packageType: "Flight + Hotel",
    price: "$949",
    image: "/images/deals/deal3.jpg",
  },
  {
    location: "Varadero",
    name: "Melia Las Americas",
    discount: 14,
    nights: "May 17 to 24 · 7 nights",
    type: "Breakfast",
    packageType: "Flight + Hotel",
    price: "$1,599",
    image: "/images/deals/deal4.jpg",
  },
  {
    location: "Punta Cana",
    name: "Iberostar Selection",
    discount: 18,
    nights: "May 20 to 24 · 5 nights",
    type: "All inclusive",
    packageType: "Flight + Hotel",
    price: "$989",
    image: "/images/deals/deal2.jpg",
  },
  {
    location: "Cancun",
    name: "Moon Palace Resort",
    discount: 32,
    nights: "May 17 to 24 · 7 nights",
    type: "All inclusive",
    packageType: "Flight + Hotel",
    price: "$1,249",
    image: "/images/deals/deal1.jpg",
  },
];

export interface Step {
  number: string;
  label: string;
  title: string;
  description: string;
}

export const STEPS: Step[] = [
  {
    number: "Step 1",
    label: "Step 1",
    title: "Describe your trip",
    description:
      "Type naturally - budget, dates, who's travelling, the vibe you want. No forms to fill out.",
  },
  {
    number: "Step 2",
    label: "Step 2",
    title: "AI finds the deals",
    description:
      "Redtag scans live inventory across flights, hotels, and packages to surface your best options.",
  },
  {
    number: "Step 3",
    label: "Step 3",
    title: "Book in one click",
    description:
      "Confirm your pick, enter payment once, and your itinerary lands in your inbox instantly.",
  },
];

export interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
  highlight?: boolean;
}

export const STATS: Stat[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="36"
        viewBox="0 0 44 36"
        fill="none"
      >
        <path
          d="M28.465 8.04936L13.5175 0.271858C12.9175 -0.0356424 12.22 -0.0881421 11.59 0.144358L8.50747 1.26936C7.73497 1.54686 7.47247 2.49936 7.97497 3.14436L15.5875 12.7369L8.07247 15.4669L3.56497 12.7219C3.09997 12.4369 2.52997 12.3844 2.01247 12.5644L0.789973 13.0144C0.0849726 13.2694 -0.215027 14.1019 0.167473 14.7469L4.18747 21.6319C5.35747 23.6344 7.79497 24.5119 9.96997 23.7169L10.9375 23.3644L40.8175 12.4894C43 11.6944 44.1175 9.28686 43.33 7.10436C42.5425 4.92186 40.1275 3.80436 37.945 4.59186L28.465 8.04936ZM2.97997 30.8569C1.65247 30.8569 0.579973 31.9294 0.579973 33.2569C0.579973 34.5844 1.65247 35.6569 2.97997 35.6569H41.38C42.7075 35.6569 43.78 34.5844 43.78 33.2569C43.78 31.9294 42.7075 30.8569 41.38 30.8569H2.97997Z"
          fill="#00537A"
        />
      </svg>
    ),
    value: "2.4M+",
    label: "Trips booked",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="39"
        height="39"
        viewBox="0 0 39 39"
        fill="none"
      >
        <path
          d="M19.2 38.4C29.805 38.4 38.4 29.805 38.4 19.2C38.4 8.595 29.805 0 19.2 0C8.595 0 0 8.595 0 19.2C0 29.805 8.595 38.4 19.2 38.4ZM12.405 24.1425C13.935 26.2425 16.41 27.6 19.2 27.6C21.99 27.6 24.465 26.2425 25.995 24.1425C26.58 23.34 27.705 23.16 28.5075 23.745C29.31 24.33 29.49 25.455 28.905 26.2575C26.7225 29.25 23.19 31.2 19.2 31.2C15.21 31.2 11.6775 29.25 9.495 26.2575C8.91 25.455 9.09 24.33 9.8925 23.745C10.695 23.16 11.82 23.34 12.405 24.1425ZM10.8 15.6C10.8 14.2725 11.8725 13.2 13.2 13.2C14.5275 13.2 15.6 14.2725 15.6 15.6C15.6 16.9275 14.5275 18 13.2 18C11.8725 18 10.8 16.9275 10.8 15.6ZM25.2 13.2C26.5275 13.2 27.6 14.2725 27.6 15.6C27.6 16.9275 26.5275 18 25.2 18C23.8725 18 22.8 16.9275 22.8 15.6C22.8 14.2725 23.8725 13.2 25.2 13.2Z"
          fill="#FEFEFE"
        />
      </svg>
    ),
    value: "98%",
    label: "One-time satisfaction",
    highlight: true,
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="39"
        height="39"
        viewBox="0 0 39 39"
        fill="none"
      >
        <path
          d="M19.2 0C21.96 0 24.36 1.5525 25.5675 3.8325C28.035 3.075 30.825 3.675 32.775 5.625C34.725 7.575 35.325 10.3725 34.5675 12.8325C36.8475 14.04 38.4 16.44 38.4 19.2C38.4 21.96 36.8475 24.36 34.5675 25.5675C35.325 28.035 34.725 30.825 32.775 32.775C30.825 34.725 28.0275 35.325 25.5675 34.5675C24.36 36.8475 21.96 38.4 19.2 38.4C16.44 38.4 14.04 36.8475 12.8325 34.5675C10.365 35.325 7.575 34.725 5.625 32.775C3.675 30.825 3.075 28.0275 3.8325 25.5675C1.5525 24.36 0 21.96 0 19.2C0 16.44 1.5525 14.04 3.8325 12.8325C3.075 10.365 3.675 7.575 5.625 5.625C7.575 3.675 10.3725 3.075 12.8325 3.8325C14.04 1.5525 16.44 0 19.2 0ZM14.4 16.8C15.7275 16.8 16.8 15.7275 16.8 14.4C16.8 13.0725 15.7275 12 14.4 12C13.0725 12 12 13.0725 12 14.4C12 15.7275 13.0725 16.8 14.4 16.8ZM26.4 24C26.4 22.6725 25.3275 21.6 24 21.6C22.6725 21.6 21.6 22.6725 21.6 24C21.6 25.3275 22.6725 26.4 24 26.4C25.3275 26.4 26.4 25.3275 26.4 24ZM25.275 15.675C25.98 14.97 25.98 13.83 25.275 13.1325C24.57 12.435 23.43 12.4275 22.7325 13.1325L13.125 22.725C12.42 23.43 12.42 24.57 13.125 25.2675C13.83 25.965 14.97 25.9725 15.6675 25.2675L25.275 15.675Z"
          fill="#00537A"
        />
      </svg>
    ),
    value: "$180",
    label: "Avg. savings per booking",
  },
];
