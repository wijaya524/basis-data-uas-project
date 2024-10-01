export default function MarketingLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full ">
            <main className="">
             {children}
            </main>
        </div>
    )
}