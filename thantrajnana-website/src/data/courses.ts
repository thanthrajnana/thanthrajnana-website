import type { Course } from "@/types/course";

export const courses: Course[] = [
  {
    id: 1,
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description: "Build mobile apps using Scratch-style visual coding.",
    longDescription:
      "Students learn mobile app development concepts using a visual block-based platform and gradually understand screens, components, actions, navigation and app logic.",
    category: "mobile",
    duration: "12 Weeks",
    level: "Beginner",
    platform: "Mobile App Scratch Platform",
    hasKit: false,
    price: 4999,
  },
  {
    id: 2,
    title: "Web Development",
    slug: "web-development",
    description: "Create websites and web applications visually.",
    longDescription:
      "Students learn web page structure, styling, user interaction and web app logic through a visual coding environment that generates web code.",
    category: "web",
    duration: "12 Weeks",
    level: "Beginner",
    platform: "Web App Scratch Platform",
    hasKit: false,
    price: 4999,
  },
  {
    id: 3,
    title: "IoT with ESP32",
    slug: "iot-with-esp32",
    description: "Create smart IoT projects using ESP32 and sensors.",
    longDescription:
      "Students build IoT projects using ESP32, sensors and cloud concepts through a Scratch-style platform that generates ESP32 code.",
    category: "iot",
    duration: "14 Weeks",
    level: "Beginner to Intermediate",
    platform: "IoT Scratch Platform",
    hasKit: true,
    price: 6999,
  },
  {
    id: 4,
    title: "Arduino Embedded Systems",
    slug: "arduino-embedded-systems",
    description: "Learn electronics and embedded programming using Arduino.",
    longDescription:
      "Students learn digital input/output, sensors, LEDs, motors and basic embedded programming using Arduino and block-based coding.",
    category: "arduino",
    duration: "14 Weeks",
    level: "Beginner",
    platform: "Arduino Scratch Platform",
    hasKit: true,
    price: 6499,
  },
  {
    id: 5,
    title: "Robotics with Arduino",
    slug: "robotics-with-arduino",
    description: "Build robot projects using motors, sensors and Arduino.",
    longDescription:
      "Students build robotics projects using motors, sensors, chassis, motor drivers and Arduino-based visual programming.",
    category: "robotics",
    duration: "16 Weeks",
    level: "Beginner to Intermediate",
    platform: "Robotics Scratch Platform",
    hasKit: true,
    price: 7999,
  },
];
