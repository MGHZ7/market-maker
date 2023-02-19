import { AdminMainLayout } from "@/components/ui/admin/dashboard/layout";
import { UiElementProps } from "@/components/ui/shared";
import { DRAWER_SECTIONS } from "./dashboardData";
import { ReactElement } from "react";

export interface DashboardProps extends UiElementProps {
    children?: ReactElement;
};

export const AdminDashboardLayout = ({ children }: DashboardProps) => {

    return (
        <AdminMainLayout drawer={{
            sections: DRAWER_SECTIONS
        }}>
            {children}
        </AdminMainLayout>
    )
};