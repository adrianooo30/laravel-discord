import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { useModalStore } from "@/hooks/use-modal-store";
import { store } from "@/routes/server";
import { Form } from "@inertiajs/react";


export default function CreateServerModal() {
    const { isOpen, type, handleClose } = useModalStore();

    const isModalOpen = isOpen && type === "createServer";

    return (
        <Dialog open={isModalOpen} onOpenChange={() => handleClose()}>

            <DialogContent>
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        Customize your server
                    </DialogTitle>
                    <DialogDescription className="text-center text-zinc-500">
                        Give your server a personality with a name and an image. You can
                        always change it later.
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
                                    <Field>
                                        <FieldLabel htmlFor="">Server Image</FieldLabel>
                                        <FieldContent>
                                            <Input type="file" name="image_url" />
                                        </FieldContent>
                                        <InputError message={errors.image_url} />
                                    </Field>

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
