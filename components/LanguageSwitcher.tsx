'use client';

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from 'next/navigation';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const changeLocale = (newLocale: string) => {
        // Replace the first segment (/en, /ja, /fr, etc.)
        const segments = pathname.split('/');
        segments[1] = newLocale;
        router.push(segments.join('/'));
    };

    return (
        <select
            value={locale}
            onChange={(e) => changeLocale(e.target.value)}
        >
           <option value="en">English</option>
           <option value="ja">日本語</option>
           <option value="zh">中文</option>
        </select>
    );
}
