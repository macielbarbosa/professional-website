import multiprovaLogo from "../assets/logos/multiprova.svg";
import dataAgrinLogo from "../assets/logos/data-agrin.svg";
import danoneLogo from "../assets/logos/danone.webp";
import mrsLogo from "../assets/logos/mrs.png";
import pasiLogo from "../assets/logos/pasi.png";
import smDiretoLogo from "../assets/logos/sm-direto.png";
import aulaInterativaLogo from "../assets/logos/aula-interativa.png";
import smartSuiteLogo from "../assets/logos/smart-suite.png";

export const clients = [
  {
    name: "Multiprova",
    logo: multiprovaLogo,
    url: "https://site.multiprova.ufrn.br/",
  },
  {
    name: "Data Agrin",
    logo: dataAgrinLogo,
    url: "https://www.dataagrin.com.br/",
  },
  {
    name: "Danone",
    logo: danoneLogo,
    url: "https://www.danone.com/",
  },
  {
    name: "MRS",
    logo: mrsLogo,
    url: "https://www.mrs.com.br/",
  },
  {
    name: "PASI",
    logo: pasiLogo,
    url: "https://www.pasi.com.br/",
  },
  {
    name: "SM Direto",
    logo: smDiretoLogo,
    url: "https://www.smdireto.com.br/",
  },
  {
    name: "Aula Interativa",
    logo: aulaInterativaLogo,
    url: "https://aulainterativa.ect.ufrn.br",
  },
  {
    name: "Smart Suite",
    logo: smartSuiteLogo,
    url: null,
  },
] as const;
