// import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import AppLayoutTemplate from '@/layouts/app/app-discord-layout';
import type { AppLayoutProps } from '@/types';

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => (
    <AppLayoutTemplate {...props}>
        {children}
    </AppLayoutTemplate>
);
