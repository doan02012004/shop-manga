import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Auth",
    description: "Generated by create next app",
};

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="bg-gray-200 min-h-screen">
            <Header />
            {children}
            <Footer />
        </main>
    );
}