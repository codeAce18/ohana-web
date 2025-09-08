"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const links = [
    { href: "#home", label: "ホーム" },
    { href: "#stats", label: "実績" },
    { href: "#about", label: "私たちについて" },
    { href: "#approach", label: "アプローチ" },
    { href: "#performance", label: "パフォーマンス" },
    { href: "#seo-sem", label: "SEO/SEM" },
    { href: "#analytics", label: "アナリティクス" },
    { href: "#vision", label: "ビジョン" },
    { href: "#portfolio", label: "ポートフォリオ" },
    { href: "#testimonials", label: "お客様の声" },
    { href: "#successful-projects", label: "成功事例" },
    { href: "#why-choose-us", label: "選ばれる理由" },
  ]

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer
      className="relative text-[#000] bg-[#f8f9fd]"

    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 py-12 relative z-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="h-12 md:h-20 flex items-center">
                <Image
                  src="/logo/Ohana Blue.svg"
                  alt="Ohanaweb"
                  width={140}
                  height={80}
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>
            </div>
            <p className="mt-4  text-sm leading-relaxed max-w-sm">
              数ヶ月ではなく、数日でプロフェッショナルで使いやすいWebサイトを構築します。親切なサポート、明確なコミュニケーション、そして本当に大切な「ユーザー」に焦点を当てます。
            </p>
            <div className="mt-6">
              <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>
                <Button size="lg" className="bg-[#00c7f1] hover:bg-[#15aecb] text-white">今すぐ始める</Button>
              </a>
            </div>
          </div>

          {/* Quick Links (split into two columns on md) */}
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-semibold tracking-wide ">ナビゲーション</h3>
              <ul className="mt-4 space-y-3">
                {links.slice(0, Math.ceil(links.length / 2)).map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={(e) => handleSmoothScroll(e, l.href)}
                      className=" hover:text-[#00c7f1] transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wide ">その他</h3>
              <ul className="mt-4 space-y-3">
                {links.slice(Math.ceil(links.length / 2)).map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={(e) => handleSmoothScroll(e, l.href)}
                      className=" hover:text-[#00c7f1] transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-sm font-semibold tracking-wide ">お問い合わせ</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>メール: cbnbc08@gmail.com</li>
                <li>営業時間: 月〜金 9:00–18:00（JST）</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Ohanaweb. 無断複写・転載を禁じます。</p>
          <p className="text-white/60 text-sm">OHANA‑WEBが心を込めて制作しました</p>
        </div>
      </div>
    </footer>
  )
}