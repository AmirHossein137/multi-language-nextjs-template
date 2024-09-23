import Link from "next/link";

export default function Home() {
  

  return (
    <div className="flex items-center justify-center gap-3 my-6">
      <Link href={'/dashboard'}>Dashboard</Link>
      <Link href={'/blog'}>Blog</Link>
    </div>
  )
}
