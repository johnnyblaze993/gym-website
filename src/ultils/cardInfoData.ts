import { Group, School, Foundation } from "@mui/icons-material";

export interface CARD_INFO_DATA {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
}

const cardInfoData: CARD_INFO_DATA[] = [
  {
    id: 1,
    icon: School,
    title: "Top noch facility",
    description:
      "We have the best equipment and the best trainers in the area.",
  },
  {
    id: 2,
    icon: Group,
    title: "Free group classes",
    description:
      " We offer a variety of group classes including yoga, pilates, and more.",
  },
  {
    id: 3,
    icon: Foundation,
    title: "Certified trainers",
    description:
      "All of our trainers are certified by the National Academy of Sports Medicine (NASM) and the American Council on Exercise (ACE) ",
  },
];

export default cardInfoData;
