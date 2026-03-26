import { useEffect, useState } from "react";
import InvitePeopleModal from "@/components/modals/invite-people-modal";
import CreateServerModal from "./create-server-modal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Prevent hydration errors by not rendering on the server
    if (!isMounted) {
        return null;
    }

    return (
        <>
            <InvitePeopleModal />
            <CreateServerModal />
        </>
    );
};
