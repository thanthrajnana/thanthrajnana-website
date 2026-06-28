export type Course = {
  id: number;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  category: "mobile" | "web" | "iot" | "arduino" | "robotics";
  duration: string;
  level: string;
  platform: string;
  hasKit: boolean;
  price: number;
};
