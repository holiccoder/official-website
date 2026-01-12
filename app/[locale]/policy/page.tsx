import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {useTranslations} from "next-intl";

export default function Policy() {

    const t = useTranslations('policy');

    return (
        <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 bg-pattern">
            <Header />
              <div className={"min-h-screen flex items-center justify-center"}>
                  this is the policy page
              </div>
            <Footer />
        </main>
    )
}
