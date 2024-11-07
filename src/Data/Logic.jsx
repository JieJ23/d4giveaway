export const grabRunes = (nam) => {
  switch (nam) {
    case "Ahu":
    case "Bac":
    case "Lith":
    case "Tam":
    case "Xol":
    case "Yul":
    case "Feo":
    case "Neo":
    case "Noc":
    case "Poc":
    case "Cem":
    case "Cir":
    case "Moni":
    case "Yax":
    case "Zan":
      return "Ritual";
    case "Eom":
    case "Jah":
    case "Ohm":
    case "Vex":
    case "Xan":
    case "Yom":
    case "Kry":
    case "Lac":
    case "Mot":
    case "Ner":
    case "Qax":
    case "Qua":
    case "Que":
    case "Thul":
    case "Tzic":
    case "Wat":
    case "Xal":
    case "Zec":
    case "Ceh":
    case "Gar":
    case "Lum":
    case "Tal":
    case "Teb":
    case "Tec":
    case "Ton":
    case "Tun":
      return "Invocation";
  }
};
