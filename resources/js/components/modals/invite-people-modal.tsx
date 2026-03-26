import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useModalStore } from "@/hooks/use-modal-store";
import { usePage } from "@inertiajs/react";


export default function InvitePeopleModal() {
    const server = usePage().props.server;

    const { isOpen, type, handleClose } = useModalStore();

    const isShowModal = isOpen && type == "invitePeople";

    return (
        <Dialog open={isShowModal} onOpenChange={() => handleClose()}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Invite People
                    </DialogTitle>
                    <DialogDescription>
                        Send an invite to a friend to join your server.
                    </DialogDescription>

                </DialogHeader>

                <div className="grid gap-2">
                    <Label htmlFor="invite-code">Invite Code</Label>
                    <Input id="invite-code" value={server?.invite_code} readOnly />
                </div>

            </DialogContent>
        </Dialog>
    );
}
