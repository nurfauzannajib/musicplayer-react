import { v4 as uuidv4 } from "uuid";

function MusicLibrary() {
  return [
    {
      name: "Vitamin D",
      artist: "fantompower",
      color: ["#D3E2E2", "#F9F9F6"],
      id: uuidv4(),
      active: false,
      audio: "https://mp3.chillhop.com/serve.php/?mp3=22790",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/3b73a510169f14c4af83ac4016e809917412702b-1024x1024.jpg",
    },
    {
      name: "Chit Chat",
      artist: "Middle School",
      color: ["#243F54", "#C35B3D"],
      id: uuidv4(),
      active: false,
      audio: "https://mp3.chillhop.com/serve.php/?mp3=22934",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/5821e04fd52fa668a0b9890f213cbb12e454cc6b-1024x1024.jpg",
    },
    {
      name: "Memories Pt.1",
      artist: "Ruck P",
      color: ["#604D71", "#F9A863"],
      id: uuidv4(),
      active: false,
      audio: "https://mp3.chillhop.com/serve.php/?mp3=21659",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/034f52eeaeceb144cca67b0930d705d32fc39e37-1024x1024.jpg",
    },
    {
      name: "Glaciar",
      artist: "Juan Rios",
      color: ["#49203F", "#F9A863"],
      id: uuidv4(),
      active: false,
      audio: "https://mp3.chillhop.com/serve.php/?mp3=21648",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/4163ebb931e06d4ee8eb184295c0246d4a5055f7-1024x1024.jpg",
    },
  ];
}

export default MusicLibrary;
