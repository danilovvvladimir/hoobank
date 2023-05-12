import iconStar from "../assets/images/icons/star.svg";
import iconShield from "../assets/images/icons/shield.svg";
import iconPlane from "../assets/images/icons/plane.svg";

interface IMenuItem {
  title: string;
  id: number;
}
export interface IBenefitsContentBlock {
  title: string;
  subtitle: string;
  id: number;
}

type SvgIcon = {
  width: string;
  height: string;
  viewBox: string;
  fill: string;
  xmlns: string;
  path: {
    d: string;
    fill: string;
  };
};

export const menuItems: IMenuItem[] = [
  { title: "Home", id: 1 },
  { title: "About Us", id: 2 },
  { title: "Features", id: 3 },
  { title: "Solution", id: 4 },
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
