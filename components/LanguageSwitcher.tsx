'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { routing } from "@/i18n/routing";
import Image from 'next/image';

import ChineseFlag from "@/app/assets/flags/china.svg";
import JapaneseFlag from "@/app/assets/flags/japan.svg";
import USAFlag from "@/app/assets/flags/usa.svg";

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const languages: Record<string, { name: string, flag: any }> = {
        en: { name: 'English', flag: USAFlag },
        zh: { name: '中文', flag: ChineseFlag },
        jp: { name: '日本語', flag: JapaneseFlag } // Changed from 'ja' to 'jp'
    };

    const changeLocale = (newLocale: string) => {
        const segments = pathname.split('/');
        segments[1] = newLocale;
        router.push(segments.join('/') || '/');
        setIsOpen(false);
    };

    const currentLang = languages[locale] || languages['en'];

    return (
        <div className="relative ml-6 inline-block text-left dark:bg-black">
            <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="flex items-center gap-2 border border-gray-100 rounded-lg p-2 bg-white hover:bg-gray-50 transition-all dark:bg-black"
            >
                <Image src={currentLang.flag} alt="" width={20} height={15} className="rounded-sm" />
                <span className="text-sm font-medium hidden md:block">{currentLang.name}</span>
                <span className={`text-[10px] transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>

            {isOpen && (
                <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}></div>

                    <ul className="absolute mt-2 w-40 rounded-md shadow-lg bg-white border border-gray-100 z-50 py-1 overflow-hidden">
                        {routing.locales.map((lang) => {
                            const data = languages[lang];
                            if (!data) return null;

                            return (
                                <li key={lang}>
                                    <button
                                        onClick={() => changeLocale(lang)}
                                        className={`flex items-center gap-3 w-full px-4 py-2 text-sm transition-colors hover:bg-gray-100 ${
                                            locale === lang ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                                        }`}
                                    >
                                        <Image src={data.flag} alt="" width={20} height={15} className="rounded-sm" />
                                        {data.name}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </>
            )}
        </div>
    );
}