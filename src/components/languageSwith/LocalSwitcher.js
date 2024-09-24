"use client";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import { locales } from "@/config";

const LocalSwitcher = () => {
  const t = useTranslations("LocalSwitcher");
  const locale = useLocale();
  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {t("locale", { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
};

export default LocalSwitcher;
