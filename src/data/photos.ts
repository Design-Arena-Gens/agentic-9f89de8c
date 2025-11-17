export type PhotoOrientation = "landscape" | "portrait" | "square";

export interface Photo {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  location: string;
  photographer: string;
  date: string;
  orientation: PhotoOrientation;
  url: string;
  color: string;
}

export const photos: Photo[] = [
  {
    id: "cascading-river",
    title: "چشمه‌های خروشان",
    description:
      "جریان آرام رودخانه‌ای در دل جنگل مه‌آلود که حس طراوت طبیعت بکر را زنده می‌کند.",
    category: "طبیعت",
    tags: ["آبشار", "مه", "جنگل"],
    location: "مازندران، ایران",
    photographer: "الهام کاویانی",
    date: "2024-04-18",
    orientation: "landscape",
    url: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?auto=format&fit=crop&w=1600&q=80",
    color: "#3d5a80",
  },
  {
    id: "desert-dunes",
    title: "رقص شن‌ها",
    description:
      "تپه‌های شنی روان که با نور طلایی غروب آفتاب در حال تغییر شکل هستند.",
    category: "مناظر",
    tags: ["کویر", "غروب", "الگو"],
    location: "لوط، ایران",
    photographer: "مانی فرهی",
    date: "2023-11-02",
    orientation: "landscape",
    url: "https://images.unsplash.com/photo-1476611338391-6f395a0ebc6a?auto=format&fit=crop&w=1600&q=80",
    color: "#c47f5d",
  },
  {
    id: "mountain-lake",
    title: "آیینه آسمان",
    description:
      "دریاچه‌ای آرام در پای کوه‌های سر به فلک کشیده که آسمان شب را منعکس می‌کند.",
    category: "طبیعت",
    tags: ["دریاچه", "کوه", "ستاره"],
    location: "چهارمحال و بختیاری",
    photographer: "رضا رستگار",
    date: "2022-08-11",
    orientation: "landscape",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
    color: "#1f4e5f",
  },
  {
    id: "city-night",
    title: "نفس شهر",
    description:
      "شهر زنده در شب با نورهای نئون و خیابان‌های پرهیاهو در باران.",
    category: "شهری",
    tags: ["شب", "نئون", "باران"],
    location: "تهران، ایران",
    photographer: "سارا مقدم",
    date: "2024-01-27",
    orientation: "landscape",
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
    color: "#9d4edd",
  },
  {
    id: "old-bazaar",
    title: "نبض بازار",
    description:
      "بازار قدیمی با نورهای گرم و عطر ادویه که فضای سنتی را تداعی می‌کند.",
    category: "مردم",
    tags: ["بازار", "سنت", "زندگی روزمره"],
    location: "اصفهان، ایران",
    photographer: "فرزاد امامی",
    date: "2022-05-03",
    orientation: "portrait",
    url: "https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=900&q=80",
    color: "#b46b25",
  },
  {
    id: "nomad-portrait",
    title: "چشم‌های آفتاب‌سوخته",
    description:
      "پرتره‌ای صمیمی از زن عشایری که داستان زندگی را در نگاهش پنهان کرده است.",
    category: "پرتره",
    tags: ["پرتره", "عشایر", "چهره"],
    location: "کهگیلویه و بویراحمد",
    photographer: "الهه صالحی",
    date: "2021-09-16",
    orientation: "portrait",
    url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    color: "#8e562e",
  },
  {
    id: "tea-house",
    title: "چای و گفتگو",
    description:
      "فضای گرم یک خانه چای سنتی با میزهای چوبی و بخار چای تازه.",
    category: "مردم",
    tags: ["چای", "کافه", "دوستی"],
    location: "رشت، ایران",
    photographer: "شهاب رضوی",
    date: "2024-02-07",
    orientation: "landscape",
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
    color: "#6b705c",
  },
  {
    id: "northern-lights",
    title: "رقص نورها",
    description:
      "شفق قطبی در آسمان سرد شمال با انعکاس رنگ‌ها بر روی سطح یخ‌زده.",
    category: "طبیعت",
    tags: ["شفق", "قطب", "شب"],
    location: "نروژ",
    photographer: "لیلا نادری",
    date: "2023-03-21",
    orientation: "landscape",
    url: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1600&q=80",
    color: "#264653",
  },
  {
    id: "minimal-stairs",
    title: "پله‌های آرام",
    description:
      "نمای مینیمال از پله‌های سفید که با نور طبیعی روز روشن شده‌اند.",
    category: "معماری",
    tags: ["مینیمال", "معماری", "نور"],
    location: "کپنهاگ، دانمارک",
    photographer: "آوا کیهانی",
    date: "2023-12-09",
    orientation: "portrait",
    url: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=900&q=80",
    color: "#e9ecef",
  },
  {
    id: "ocean-waves",
    title: "نبض دریا",
    description:
      "امواج خروشان دریای آبی که با صخره‌های ساحلی درهم می‌آمیزند.",
    category: "طبیعت",
    tags: ["دریا", "صخره", "قدرت"],
    location: "چابهار، ایران",
    photographer: "پارسا مهدوی",
    date: "2022-07-29",
    orientation: "landscape",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    color: "#005f73",
  },
  {
    id: "artisan-hands",
    title: "دستان هنرمند",
    description:
      "جزئیات دست‌های هنرمندی که روی سفال ظریف در حال کار است.",
    category: "مردم",
    tags: ["هنر", "سفال", "جزئیات"],
    location: "لالجین، ایران",
    photographer: "مهسا نیازی",
    date: "2021-12-04",
    orientation: "square",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    color: "#bc6c25",
  },
  {
    id: "forest-path",
    title: "راه مخملی",
    description:
      "مسیر پیاده‌روی در جنگل پاییزی با برگ‌های زرد و نارنجی زیر پا.",
    category: "طبیعت",
    tags: ["پاییز", "مسیر", "جنگل"],
    location: "گیلان، ایران",
    photographer: "افسون لشکری",
    date: "2023-10-14",
    orientation: "portrait",
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
    color: "#d18f21",
  },
];

export const categories = Array.from(new Set(photos.map((photo) => photo.category)));

export const tags = Array.from(
  new Set(photos.flatMap((photo) => photo.tags))
).sort((a, b) => a.localeCompare(b, "fa"));
