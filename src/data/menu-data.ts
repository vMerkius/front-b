// type
type IMenuDataType = {
  id: number;
  title: string;
  link: string;
  sub_menu?: {
    title: string;
    link: string;
  }[];
};

const menu_data: IMenuDataType[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "BOOST",
    link: "#",
    sub_menu: [
      { title: "LOL", link: "/calculator/lol" },
      { title: "TFT", link: "/calculator/tft" },
      { title: "Valorant", link: "/calculator/valorant" },
    ],
  },
  {
    id: 3,
    title: "COACHING",
    link: "/coaching",
  },
  {
    id: 4,
    title: "ABOUT US",
    link: "/about",
  },
  {
    id: 5,
    title: "FaQ",
    link: "/faq",
  },
];

export default menu_data;
