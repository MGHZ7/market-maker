import { AdminDashboardLayout } from "@/components/dashboard/layout";
import { UiElementProps } from "@/components/ui/shared";
import { StoreForm } from "../form";
import { Card } from "@/components/ui/card/card";
import { StoreFormProvider } from "../form/storeFormContext";

export interface CreateStorePageProps extends UiElementProps {

};

export const CreateStorePage = ({ className }: CreateStorePageProps) => {
    return (
        <AdminDashboardLayout>
            <Card>
                <section>
                    <h1 className={`text-lg mb-10`}>Create a store</h1>
                    <StoreFormProvider>
                        <StoreForm />
                    </StoreFormProvider>
                </section>
            </Card>
        </AdminDashboardLayout>
    );
}