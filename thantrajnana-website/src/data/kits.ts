import type { Kit } from "@/types/kit";

export const kits: Kit[] = [
  {
    id: 1,
    title: "Arduino Kit",
    slug: "arduino-kit",
    description: "Starter hardware kit for embedded systems learning.",
    course: "Arduino Embedded Systems",
    price: 2499,
    items: ["Arduino-compatible board", "Breadboard", "LEDs", "Sensors", "Jumper wires"],
  },
  {
    id: 2,
    title: "IoT ESP32 Kit",
    slug: "iot-esp32-kit",
    description: "ESP32 kit for building connected IoT projects.",
    course: "IoT with ESP32",
    price: 2999,
    items: ["ESP32 board", "Sensors", "Relay module", "Display", "Connectors"],
  },
  {
    id: 3,
    title: "Robotics Kit",
    slug: "robotics-kit",
    description: "Complete robotics kit for student projects.",
    course: "Robotics with Arduino",
    price: 3999,
    items: ["Robot chassis", "Motors", "Wheels", "Motor driver", "Sensors", "Arduino-compatible board"],
  },
];
