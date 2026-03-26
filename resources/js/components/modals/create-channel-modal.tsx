import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { useModalStore } from "@/hooks/use-modal-store";
import { store } from "@/routes/server";
import { Form } from "@inertiajs/react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";


export default function CreateChannelModal() {
    const { isOpen, type, handleClose } = useModalStore();

    const isModalOpen = isOpen && type === "createChannel";

    return (
        <Dialog open={isModalOpen} onOpenChange={() => handleClose()}>

            <DialogContent>
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        Create Channel
                    </DialogTitle>
                    <DialogDescription className="text-center text-zinc-500">
                        Give your channel a name. You can always change it later.
                    </DialogDescription>
                </DialogHeader>

                <Form {...store.form()}>
                    {

                        ({ processing, errors }) => (

                            <>
                                <div className="grid gap-6">

                                    {/* <div className="grid gap-2">
                                            </div> */}

                                    {/* TODO: MAKE UI EDIT THE UPLOAD IMAGE */}


                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Server name</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="name"
                                            placeholder="Server name"
                                        />
                                        <InputError message={errors.name} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="type">Channel type</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a channel type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="text">Text</SelectItem>
                                                <SelectItem value="audio">Audio</SelectItem>
                                                <SelectItem value="video">Video</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <InputError message={errors.name} />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="mt-4 w-full"
                                        tabIndex={4}
                                        disabled={processing}
                                        data-test="login-button"
                                    >
                                        {processing && <Spinner />}
                                        Create Server
                                    </Button>

                                </div>

                            </>

                        )

                    }
                </Form>

            </DialogContent>
        </Dialog>

    );
}
