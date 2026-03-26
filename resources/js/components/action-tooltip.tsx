
import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { usePage } from "@inertiajs/react"
import { Plus } from "lucide-react"
import { ComponentProps } from "react"

type Props = ComponentProps<typeof TooltipTrigger> & {
    label: string;
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
}


export default function ActionTooltip({ children, label, side, align }: Props) {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={50}>
                <TooltipTrigger>
                    {children}
                </TooltipTrigger>
                <TooltipContent side={side} align={align}>
                    <p className="text-sm font-semibold capitalize">{label}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}