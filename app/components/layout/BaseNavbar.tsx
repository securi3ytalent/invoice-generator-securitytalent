import { useMemo } from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Assets
// import Logo from "@/public/assets/img/invoify-logo.svg";

// ShadCn
import { Card } from "@/components/ui/card";

// Components
import { DevDebug, LanguageSelector, ThemeSwitcher } from "@/app/components";

const BaseNavbar = () => {
    const devEnv = useMemo(() => {
        return process.env.NODE_ENV === "development";
    }, []);

    return (
        <header className="lg:container z-[99]">
            <nav>
                <Card className="flex flex-wrap justify-between items-center px-5 gap-5">
                    <Link href={"/"}>
                        <h1 className="text-2xl font-bold py-7">Security Talent</h1>
                    </Link>
                    {/* ? DEV Only */}
                    {devEnv && <DevDebug />}
                    <LanguageSelector />
                    <ThemeSwitcher />
                </Card>
            </nav>
        </header>
    );
};

export default BaseNavbar;
