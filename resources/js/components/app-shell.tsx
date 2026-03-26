import type { ReactNode } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import type { AppVariant } from '@/types';

type Props = {
    children: ReactNode;
    variant?: AppVariant;
};

/**
 * Desktop sidebar stays in icon-only mode: collapsible="icon" with open forced false.
 * Do not pass defaultOpen from cookies — expansion is disabled (no rail / trigger in app).
 */
export function AppShell({ children, variant = 'sidebar' }: Props) {
    if (variant === 'header') {
        return (
            <div className="flex min-h-screen w-full flex-col">{children}</div>
        );
    }

    return (
        // <SidebarProvider open={false} onOpenChange={() => { }}>
        <SidebarProvider open={false} onOpenChange={() => { }}>
            {children}
        </SidebarProvider>
    );
}
