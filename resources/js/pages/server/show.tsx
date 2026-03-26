import ServerHeader from "@/components/server/server-header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import AppLayout from "@/layouts/app-layout";
import { usePage } from "@inertiajs/react";

export default function ServerShow() {
    const { server } = usePage().props;

    return (
        <AppLayout>

            <div className="flex w-full">

                <aside className="flex flex-col items-center w-60 dark:bg-zinc-800 h-screen">
                    <ServerHeader />

                    <Separator className="h-[2px] bg-zinc-200 dark:bg-zinc-700 rounded-md w-8 mx-auto " />

                    <ScrollArea className="flex flex-col gap-2">

                        {/* TODO: Add server channels */}

                    </ScrollArea>
                </aside>

                <main className="flex-1 flex flex-col bg-zinc-600">

                </main>

            </div>

        </AppLayout>
    )
}

