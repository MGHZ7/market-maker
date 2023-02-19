import { AdminDashboardLayout } from "@/components/admin/dashboard/layout";
import { DashboardMain } from "@/components/admin/dashboard/main/main";

export interface AdminHomeProps {
    title?: string;
};

export const AdminHome = (props: AdminHomeProps) => {

    return (
        <AdminDashboardLayout>
            <DashboardMain />
        </AdminDashboardLayout>
    );
};

export default AdminHome;