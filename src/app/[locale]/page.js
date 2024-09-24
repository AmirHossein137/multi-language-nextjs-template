"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export default function Home() {
  const t = useTranslations("IndexPage");
  return (
    <>
      <div className="flex items-center justify-center gap-3 my-6">
        <Link href={"/dashboard"}>Dashboard</Link>
        <Link href={"/blog"}>Blog</Link>
      </div>
      <div className="mt-5">
        <span>{t("title")}</span>
      </div>
    </>
  );
}
