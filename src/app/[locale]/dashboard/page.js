import { useTranslations } from 'next-intl'
import React from 'react'

const Dashboard = () => {
  const t = useTranslations("Dashboard");
  return (
    <div>
      {t("title")}
    </div>
  )
}

export default Dashboard