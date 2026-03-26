import ActionTooltip from "@/components/action-tooltip"
import { ModalProvider } from "@/components/modals/modal-provider"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { useModalStore } from "@/hooks/use-modal-store"
import { cn } from "@/lib/utils"
import { show } from "@/routes/server"
import { Link, usePage } from "@inertiajs/react"
import { Plus } from "lucide-react"
import { ComponentProps } from "react"

type Props = ComponentProps<"div"> & {}

export default function AppDiscordLayout({ children }: Props) {
    return (
        <>

            <div className="flex h-screen">

                <aside className="h-full w-16">
                    <NavigationSidebar />
                </aside>

                <main className="flex-1 bg-zinc-700">
                    {children}
                </main>
            </div>

            <ModalProvider />
        </>
    )
}

const NavigationSidebar = () => {
    const servers = usePage().props.servers;

    const { handleOpen } = useModalStore();

    return (
        <aside className="h-full flex p-2 flex-col items-center bg-zinc-900">
            <ActionTooltip
                side="right"
                align="center"
                label="Add a server"
            >
                <Button size="icon" onClick={() => handleOpen("createServer")} className="rounded-full hover:rounded-md transition-all duration-200 ease-in-out dark:bg-zinc-500">
                    <Plus className="fill-green-500" />
                </Button>

            </ActionTooltip>

            <Separator className="h-[2px] bg-zinc-200 dark:bg-zinc-700 rounded-md w-8 mx-auto my-4" />

            <ScrollArea className="flex-1 flex flex-col items-center">
                {
                    servers.map((server) => (
                        <NavigationItem {...server} />
                    ))
                }
            </ScrollArea>

            <footer>


            </footer>

        </aside >
    )
}

const NavigationItem = ({ name, imageUrl, id }) => {

    return (
        <Link href={show(id)}>
            <ActionTooltip label={name} side={"right"}>
                <div className={cn("absolute left-0 w-[4px] rounded-r-full h-full")} />
                <Avatar className="w-full h-12">
                    <AvatarImage src={`/server/${id}/image`} />
                    <AvatarFallback>
                        <AvatarImage src={`https://ui-avatars.com/api/?name=${name}`} />
                    </AvatarFallback>
                </Avatar>
            </ActionTooltip>
        </Link>
    )

}
