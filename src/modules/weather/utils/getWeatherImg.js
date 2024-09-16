import {
  Oblacno,
  PoloOblacno,
  Prehanky,
  Slnecno,
  Dazd,
} from "../../../assets/images/weather";

export default function getWeatherImg(weather) {
  switch (weather) {
    case "Oblačno":
      return Oblacno;
    case "Polooblačno":
      return PoloOblacno;
    case "Prehánky":
      return Prehanky;
    case "Dážd":
      return Dazd;
    case "Slnečno":
      return Slnecno;
    default:
      return "Neznáme";
  }
}
