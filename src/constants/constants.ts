import iconStar from "../assets/images/icons/star.svg";
import iconShield from "../assets/images/icons/shield.svg";
import iconPlane from "../assets/images/icons/plane.svg";

import userIMG from "../assets/images/testimonials/mark.jpg";

import airbnbIMG from "../assets/images/testimonials/companies/airbnb.svg";
import binanceIMG from "../assets/images/testimonials/companies/binance.svg";
import coinbaseIMG from "../assets/images/testimonials/companies/coinbase.svg";
import dropboxIMG from "../assets/images/testimonials/companies/dropbox.svg";

interface IMenuItem {
  title: string;
  id: number;
  url: string;
}
export interface IBenefitsContentBlock {
  title: string;
  subtitle: string;
  id: number;
}

export const menuItems: IMenuItem[] = [
  { title: "Home", id: 1, url: "hero" },
  { title: "About Us", id: 2, url: "benefits" },
  { title: "Features", id: 3, url: "features" },
  { title: "Solution", id: 4, url: "service" },
];

export const benefitsContentBlocks: IBenefitsContentBlock[] = [
  {
    title: "You do the business, we'll handle the money.",
    subtitle:
      "With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.",
    id: 1,
  },
  {
    title: "Lorem ipsum dolor sit amet .",
    subtitle:
      "With inancial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market. the right credit card, you can improve your f",
    id: 2,
  },
  {
    title: "Lorem ipsum dolor sit ame. 3",
    subtitle:
      "With the right credit card,and saving money. But with hundreds of credit cards on the market you can improve your financial life by building credit, earning rewards .",
    id: 3,
  },
];

export interface IBenefitsTrigger {
  title: string;
  subtitle: string;
  icon: string;
  id: number;
}

export const benefitsTriggers: IBenefitsTrigger[] = [
  {
    icon: iconStar,
    title: "Rewards",
    subtitle:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
    id: 1,
  },
  {
    icon: iconShield,
    title: "100% Secured",
    subtitle:
      "We take proactive steps make sure your information and transactions are secure.",
    id: 2,
  },
  {
    icon: iconPlane,
    title: "Balance Transfer",
    subtitle:
      "A balance transfer credit card can save you a lot of money in interest charges.",
    id: 3,
  },
];

interface ITestimonial {
  id: number;
  message: string;
  name: string;
  position: string;
  image: string;
}

export const testimonials: ITestimonial[] = [
  {
    id: 1,
    message:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    position: "Founder & Leader",
    image: userIMG,
  },
  {
    id: 2,
    message:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    position: "Founder & Leader",
    image: userIMG,
  },
  {
    id: 3,
    message:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    position: "Founder & Leader",
    image: userIMG,
  },
];

interface ICompany {
  id: number;
  name: string;
  image: string;
}

export const companies: ICompany[] = [
  {
    id: 1,

    name: "airbnb",
    image: airbnbIMG,
  },
  {
    id: 2,
    name: "binance",
    image: binanceIMG,
  },
  {
    id: 3,
    name: "coinbase",
    image: coinbaseIMG,
  },
  {
    id: 4,
    name: "dropbox",
    image: dropboxIMG,
  },
];

interface ILink {
  title: string;
  id: number;
  url: string;
}

export const usefulLinks: ILink[] = [
  { title: "Content", id: 1, url: "http://google.com" },
  { title: "How it Works", id: 2, url: "http://google.com" },
  { title: "Create", id: 3, url: "http://google.com" },
  { title: "Explore", id: 4, url: "http://google.com" },
  { title: "Terms & Services", id: 5, url: "http://google.com" },
];

export const communityLinks: ILink[] = [
  { title: "Help Center", id: 1, url: "http://google.com" },
  { title: "Partners", id: 2, url: "http://google.com" },
  { title: "Suggestions", id: 3, url: "http://google.com" },
  { title: "Blog", id: 4, url: "http://google.com" },
  { title: "Newsletters", id: 5, url: "http://google.com" },
];

export const partnerLinks: ILink[] = [
  { title: "Our Partner", id: 1, url: "http://google.com" },
  { title: "Become a Partner", id: 2, url: "http://google.com" },
];
