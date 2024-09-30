import { Footer } from "./footer";
import { Header } from "./header";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex  min-h-screen flex-col items-center justify-between p-5">
            <Header/>
            <main className="flex w-full flex-1 flex-col items-center justify-center bg-slate-500">
             {children}
            </main>
            <Footer/>
        </div>
    )
}