import curriculumPt from "../assets/curriculum.pdf";
import curriculumEn from "../assets/curriculum-en.pdf";
import { useLanguage } from "../i18n/LanguageContext";

export function useCurriculumPdf() {
  const { language } = useLanguage();

  return {
    href: language === "en" ? curriculumEn : curriculumPt,
    filename: "Maciel_Barbosa_CV.pdf",
  };
}
