import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useModalStore } from "@/hooks/use-modal-store";
import { usePage } from "@inertiajs/react";
import { ChevronDown, DoorOpen, Plus, Settings, UserPlus, Users } from "lucide-react";
import { Separator } from "../ui/separator";

export default function ServerHeader() {
    const server = usePage().props.server;

    const { handleOpen, handleClose } = useModalStore();

    return (

        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild className="outline-none">
                    <button className="flex px-3 items-center py-3 text-md w-full">
                        {server.name}
                        <ChevronDown className="size-5 ml-auto" />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuItem onClick={() => handleOpen("invitePeople")}>
                        Invite People
                        <UserPlus className="ml-auto size-4" />
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleOpen("serverSettings")}>
                        Server Settings
                        <Settings className="ml-auto size-4" />
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleOpen("members")}>
                        Manage Members
                        <Users className="ml-auto size-4" />
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Create Channel
                        <Plus className="ml-auto size-4" />
                    </DropdownMenuItem>
                    <Separator />
                    <DropdownMenuItem className="text-red-500 font-bold">
                        Leave Server
                        <DoorOpen className="ml-auto size-4 text-red-500 font-bold" />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu >

            {/* <InvitePeopleModal /> */}

        </>

    )

}
