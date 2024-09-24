"use client";
import { usePathname, useRouter } from "@/navigation";
import { useParams } from "next/navigation";
import React, { useTransition } from "react";

const LocaleSwitcherSelect = ({ defaultValue, label, children }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace({ pathname, params }, { locale: nextLocale });
    });
  }

  return (
    <label
      className={`relative text-gray-400 ${
        isPending && "transition-opacity [&:disabled]: opacity-30"
      }`}
    >
      <p>{label}</p>
      <select
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </label>
  );
};

export default LocaleSwitcherSelect;
