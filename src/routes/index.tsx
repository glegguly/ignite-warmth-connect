import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Facebook, Instagram, Mail, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png.asset.json";
import hero from "@/assets/hero.jpg.asset.json";
import about from "@/assets/about.jpg.asset.json";
import event from "@/assets/event.jpg.asset.json";
import moment1 from "@/assets/moment1.jpg.asset.json";
import moment2 from "@/assets/moment2.jpg.asset.json";
import moment3 from "@/assets/moment3.jpg.asset.json";
import moment4 from "@/assets/moment4.jpg.asset.json";
import moment5 from "@/assets/moment5.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "燃點真愛 | Kindle True Love" },
    { name: "description", content: "燃點真愛以義工服務、音樂與藝術推動社區共融，將愛與溫暖傳遞。" },
    { property: "og:title", content: "燃點真愛 | Kindle True Love" },
    { property: "og:description", content: "將心中愛盡變力量，以行動回饋社會。" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

type Lang = "zh" | "en";
const copy = {
  zh: {
    nav: ["關於我們", "命名來源", "過往活動", "最新活動", "聯繫我們"], donate: "捐款支持", overline: "將心中愛盡變力量",
    title: "由一點真愛，\n燃亮整個社區", intro: "用愛心傳遞溫暖，以行動回饋社會。攜手推動社區共融，跨代傳承希望。", support: "支持我們", join: "了解活動",
    aboutLabel: "機構介紹", aboutTitle: "每一份真心，\n都能發出無窮力量", aboutP1: "「燃點真愛」於2025年正式註冊成為香港法定慈善機構，由一群義工自發組成。多年來積極策劃及參與多項公益活動，與不同夥伴攜手，以身體力行實踐樂善好施。", aboutP2: "我們帶領義工及青少年，以音樂會友、推動藝術文化；以行善弘愛，培養行義新力軍。", year: "正式註冊", spirit: "義工精神", mission: "共同使命", nameLabel: "命名來源", nameTitle: "為什麼叫「燃點真愛」？", quote: "「將心中愛盡變力量」", origin: "團體名稱取自鄭國江老師填詞的歌曲《燃點真愛》。我們相信人人以真心待人，用愛能發出無窮力量；這份信念也是義工隊繼續發光發熱、回饋社會的最大動力。",
    moments: "過往活動", drift: "真實服務點滴", volunteer: "義工服務", music: "音樂活動", activities: ["關懷探訪", "節慶手作工作坊", "賣旗籌款", "慈善步行與支援", "節慶綜藝晚會", "粵劇曲藝敬老盛會"],
    latest: "最新活動", mar: "2026年3月", marTitle: "善學慈善基金慈善步行 2026 暨嘉年華會", marText: "獲邀於科學園參與活動，並於現場義賣紀念品籌款。", feb: "2026年2月至3月", febTitle: "書出愛心．十元義賣", febText: "參與大型分書日，協助將市民捐贈的書籍分類及包裝支援。",
    donateLabel: "捐款支持", donateTitle: "你的支持，\n是下一點暖光", donateText: "每一份支持，都讓我們能持續服務社區、培育新一代義工。", account: "銀行戶口", fps: "轉數快", license: "慈善牌照", accountName: "燃點真愛有限公司", contact: "聯繫我們", contactTitle: "一起為社會燃點真愛", contactText: "歡迎查詢義工參與、活動合作及捐款事宜。", pending: "電郵地址即將公布", footer: "用愛心傳遞溫暖，以行動回饋社會。",
  },
  en: {
    nav: ["About", "Our Name", "Past Work", "Latest", "Contact"], donate: "Donate", overline: "Turn the love in our hearts into strength",
    title: "One spark of love,\na brighter community", intro: "Passing warmth through compassion and giving back through action. Together, we foster inclusion and carry hope across generations.", support: "Support us", join: "Explore our work",
    aboutLabel: "About us", aboutTitle: "Every sincere heart\nholds infinite strength", aboutP1: "Kindle True Love was formally registered as a Hong Kong charitable organisation in 2025. Founded by volunteers, we plan and support community initiatives with partners, putting generosity into action.", aboutP2: "We bring volunteers and young people together through music and the arts, nurturing a new generation committed to serving others.", year: "Registered", spirit: "Volunteer spirit", mission: "Shared mission", nameLabel: "Our name", nameTitle: "Why “Kindle True Love”?", quote: "“Turn the love in our hearts into strength”", origin: "Our name comes from the song Kindle True Love, with lyrics by Cheng Kwok-kong. We believe sincerity and love create boundless strength — the force that keeps our volunteers shining and serving the community.",
    moments: "Past activities", drift: "Moments of service", volunteer: "Volunteer service", music: "Music programmes", activities: ["Care visits", "Festive craft workshops", "Flag fundraising", "Charity walks & support", "Festive variety shows", "Cantonese opera for seniors"],
    latest: "Latest activities", mar: "March 2026", marTitle: "Sin Hok Charity Walk 2026 & Carnival", marText: "Invited to join the event at Hong Kong Science Park and raise funds through a souvenir charity sale.", feb: "February–March 2026", febTitle: "Books for Love · HK$10 Charity Sale", febText: "Supported the large-scale sorting days by categorising and packing books donated by the public.",
    donateLabel: "Donate", donateTitle: "Your support becomes\nthe next warm light", donateText: "Every contribution helps us serve the community and nurture the next generation of volunteers.", account: "Bank account", fps: "FPS", license: "Charity licence", accountName: "Cheers97 Company Limited", contact: "Contact", contactTitle: "Kindle true love with us", contactText: "Contact us about volunteering, partnerships or donations.", pending: "Email address coming soon", footer: "Passing warmth through compassion; giving back through action.",
  },
};

const anchors = ["about", "name", "moments", "events", "contact"];
const gallery = [moment1, moment3, moment4, moment2, moment5];

function Index() {
  const [lang, setLang] = useState<Lang>("zh");
  const [menu, setMenu] = useState(false);
  const t = copy[lang];
  return <main className="min-h-screen overflow-x-hidden bg-background text-foreground antialiased">
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3"><img src={logo.url} alt="燃點真愛 Kindle True Love" className="h-14 w-auto max-w-40 object-contain" /></a>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">{t.nav.map((x,i)=><a key={x} href={`#${anchors[i]}`} className="transition-colors hover:text-primary">{x}</a>)}</nav>
        <div className="flex items-center gap-2"><div className="flex rounded-full bg-surface-deep p-1 text-xs"><Button variant={lang==="zh"?"languageActive":"language"} onClick={()=>setLang("zh")}>繁中</Button><Button variant={lang==="en"?"languageActive":"language"} onClick={()=>setLang("en")}>EN</Button></div><Button asChild variant="ember" className="hidden sm:inline-flex"><a href="#donate">{t.donate}</a></Button><Button variant="language" className="size-10 p-0 lg:hidden" aria-label="Menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</Button></div>
      </div>{menu&&<nav className="grid border-t border-border px-5 py-4 lg:hidden">{t.nav.map((x,i)=><a key={x} href={`#${anchors[i]}`} onClick={()=>setMenu(false)} className="py-3 text-sm">{x}</a>)}</nav>}
    </header>

    <section id="top" className="relative h-[76vh] min-h-[560px] max-h-[760px] overflow-hidden"><img src={hero.url} alt="燃點真愛義工活動" className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-foreground/10"/><div className="absolute inset-0 flex items-end"><div className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 sm:pb-20"><p className="rise rise-one mb-4 text-sm font-medium text-gold">{t.overline}</p><h1 className="rise rise-two max-w-[17ch] whitespace-pre-line font-display text-5xl font-semibold leading-[1.05] text-background sm:text-7xl">{t.title}</h1><p className="rise rise-three mt-5 max-w-[48ch] text-base leading-relaxed text-background/85 sm:text-lg">{t.intro}</p><div className="rise rise-three mt-8 flex gap-3"><Button asChild><a href="#donate">{t.support}</a></Button><Button asChild variant="outlineLight"><a href="#events">{t.join}</a></Button></div></div></div></section>

    <section id="about" className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-12 md:gap-14"><img src={about.url} alt="義工服務現場" className="aspect-[4/5] w-full rounded-lg object-cover md:col-span-5"/><div className="md:col-span-7"><p className="mb-3 text-sm font-medium text-primary">{t.aboutLabel}</p><h2 className="max-w-[20ch] whitespace-pre-line font-display text-4xl font-semibold leading-tight sm:text-5xl">{t.aboutTitle}</h2><p className="mt-6 max-w-[56ch] text-base leading-8 text-muted-foreground sm:text-lg">{t.aboutP1}</p><p className="mt-4 max-w-[56ch] text-base leading-8 text-muted-foreground">{t.aboutP2}</p><div className="mt-10 grid grid-cols-3 gap-5 border-t border-border pt-8"><div><b className="font-display text-3xl text-primary">2025</b><p className="text-xs text-muted-foreground">{t.year}</p></div><div><b className="font-display text-3xl text-primary">義</b><p className="text-xs text-muted-foreground">{t.spirit}</p></div><div><b className="font-display text-3xl text-primary">愛</b><p className="text-xs text-muted-foreground">{t.mission}</p></div></div></div></section>

    <section id="name" className="bg-foreground text-background"><div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-12"><div className="md:col-span-4"><p className="mb-3 text-sm font-medium text-gold">{t.nameLabel}</p><h2 className="font-display text-4xl font-semibold">{t.nameTitle}</h2></div><div className="md:col-span-8"><blockquote className="font-display text-3xl leading-snug text-background/95 sm:text-4xl">{t.quote}</blockquote><p className="mt-6 max-w-[58ch] text-base leading-8 text-background/70 sm:text-lg">{t.origin}</p></div></div></section>

    <section id="moments" className="overflow-hidden py-20"><div className="mx-auto mb-8 flex max-w-6xl items-end justify-between px-5 sm:px-8"><h2 className="font-display text-4xl font-semibold">{t.moments}</h2><p className="hidden text-sm text-muted-foreground sm:block">{t.drift}</p></div><div className="photo-drift flex w-max gap-5">{[...gallery,...gallery].map((img,i)=><img key={i} src={img.url} alt={t.activities[i%t.activities.length]} className="aspect-[4/5] w-64 shrink-0 rounded-lg object-cover sm:w-72"/>)}</div><div className="mx-auto mt-12 grid max-w-6xl gap-8 px-5 sm:px-8 md:grid-cols-2"><div><h3 className="font-display text-2xl font-semibold">{t.volunteer}</h3><ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-muted-foreground">{t.activities.slice(0,4).map(x=><li key={x}>— {x}</li>)}</ul></div><div><h3 className="font-display text-2xl font-semibold">{t.music}</h3><ul className="mt-4 space-y-3 text-sm text-muted-foreground">{t.activities.slice(4).map(x=><li key={x}>— {x}</li>)}</ul></div></div></section>

    <section id="events" className="bg-surface-deep"><div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28"><h2 className="mb-10 font-display text-4xl font-semibold">{t.latest}</h2><div className="grid gap-6 md:grid-cols-2"><article className="overflow-hidden rounded-lg bg-background"><img src={event.url} alt={t.marTitle} className="aspect-[16/9] w-full object-cover"/><div className="p-7"><p className="text-xs font-medium text-primary">{t.mar}</p><h3 className="mt-3 font-display text-2xl font-semibold">{t.marTitle}</h3><p className="mt-3 leading-7 text-muted-foreground">{t.marText}</p></div></article><article className="flex min-h-80 flex-col justify-end rounded-lg bg-foreground p-8 text-background"><p className="text-xs font-medium text-gold">{t.feb}</p><h3 className="mt-3 font-display text-3xl font-semibold">{t.febTitle}</h3><p className="mt-3 max-w-[44ch] leading-7 text-background/70">{t.febText}</p></article></div></div></section>

    <section id="donate" className="bg-primary text-primary-foreground"><div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-12"><div className="md:col-span-7"><p className="mb-3 text-sm font-medium text-primary-foreground/75">{t.donateLabel}</p><h2 className="whitespace-pre-line font-display text-4xl font-semibold sm:text-5xl">{t.donateTitle}</h2><p className="mt-5 max-w-[48ch] text-primary-foreground/80">{t.donateText}</p></div><div className="rounded-lg bg-background p-7 text-foreground md:col-span-5"><dl className="space-y-4 text-sm"><div><dt className="text-muted-foreground">{t.accountName}</dt><dd className="mt-1 font-medium">012-560-2030-4296</dd></div><div><dt className="text-muted-foreground">{t.fps}</dt><dd className="mt-1 font-medium">127610020</dd></div><div><dt className="text-muted-foreground">{t.license}</dt><dd className="mt-1 font-medium">91/20257</dd></div></dl></div></div></section>

    <section id="contact" className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-2"><div><p className="mb-3 text-sm font-medium text-primary">{t.contact}</p><h2 className="font-display text-4xl font-semibold">{t.contactTitle}</h2><p className="mt-5 text-muted-foreground">{t.contactText}</p></div><div className="space-y-5"><a href="tel:95511959" className="flex items-center gap-4"><Phone className="text-primary"/><span>9551 1959</span></a><div className="flex items-center gap-4 text-muted-foreground"><Mail className="text-primary"/><span>{t.pending}</span></div><div className="flex gap-3"><a href="#" aria-label="Facebook" className="grid size-11 place-items-center rounded-full bg-surface-deep"><Facebook/></a><a href="#" aria-label="Instagram" className="grid size-11 place-items-center rounded-full bg-surface-deep"><Instagram/></a></div></div></section>
    <footer className="bg-foreground text-background/70"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 text-center text-xs sm:flex-row sm:px-8 sm:text-left"><img src={logo.url} alt="燃點真愛" className="h-14 w-auto brightness-0 invert"/><p>© 2026 燃點真愛有限公司 · 91/20257</p><p>{t.footer}</p></div></footer>
  </main>;
}