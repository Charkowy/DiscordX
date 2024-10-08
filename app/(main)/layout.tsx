import { Children } from "react";
import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";

const MainLayout = async ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full">
            <div className=" md:flex h-full w-[72px] z-30 flex-col fixed">
                <NavigationSidebar/>
            </div>
            <main className="md:pl-[72px] h-full">
                {children}
            </main>
        </div>
    );
}

export default MainLayout;