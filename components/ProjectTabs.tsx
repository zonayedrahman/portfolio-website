import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ProjectTabsProps = {
    setActiveTab: (tab: string) => void;
};

const ProjectsTabs = ({ setActiveTab }: ProjectTabsProps) => {
    return (
        <div className="w-full flex  justify-center pt-8">
            <Tabs defaultValue="tab1" className="w-full flex justify-center">
                <TabsList className=" flex items-center bg-transparent border border-gray-700 h-16 w-[50%] rounded-[200px]">
                    <TabsTrigger
                        value="tab1"
                        onClick={() => setActiveTab("tab1")}
                        className="h-full w-full m-0 rounded-l-[200px] text-[1.2em] "
                    >
                        {/* data-[state=active]:bg-red-500 data-[state=active]:bg-slate-500 data-[state=active]:text-black*/}
                        Tab 1
                    </TabsTrigger>
                    <TabsTrigger
                        value="tab2"
                        onClick={() => setActiveTab("tab2")}
                        className="h-full w-full text-[1.2em] "
                    >
                        Tab 2
                    </TabsTrigger>
                    <TabsTrigger
                        value="tab3"
                        onClick={() => setActiveTab("tab3")}
                        className="h-full w-full rounded-r-[200px] text-[1.2em] "
                    >
                        Tab 3
                    </TabsTrigger>
                </TabsList>
                {/* <TabsContent value="account">
                    Make changes to your account here.
                </TabsContent>
                <TabsContent value="password">
                    Change your password here.
                </TabsContent> */}
            </Tabs>
        </div>
    );
};

export default ProjectsTabs;
