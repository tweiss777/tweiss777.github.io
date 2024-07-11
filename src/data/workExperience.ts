type WorkExperience = {
  name: string;
  position: string;
  date: string;
  company_img: string;
  cardMargin?: string;
  description?: string[];
};

const workExperience: WorkExperience[] = [
  {
    name: "Google",
    position: "Software Engineer",
    date: "2022 - 2024",
    company_img:
      "https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png",
    cardMargin: "right",
  },
  {
    name: "Google",
    position: "Software Engineer",
    date: "2020 - 2021",
    company_img:
      "https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png",
    cardMargin: "left",
  },
  {
    name: "Google",
    position: "Software Engineer",
    date: "2018",
    company_img:
      "https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png",
    cardMargin: "right",
  },
];
export default workExperience;
