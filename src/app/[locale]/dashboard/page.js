'use client'
import { redirect } from '@/navigation';
import { useAppSelector } from '@/redux/hooks';
import { useTranslations } from 'next-intl'
import React from 'react'


const Dashboard = () => {

  const { token } = useAppSelector((state) => state.auth)
  if(!token){
    redirect('/login')
  }

  const t = useTranslations("Dashboard");
  return (
    <div>
      {t("title")}
    </div>
  )
}

export default Dashboard