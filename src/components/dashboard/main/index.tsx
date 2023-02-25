import { MainDashboardCard, MainDashboardCardProps } from "@/components/ui/dashboard/card/mainDashboardCards/card";
import { UiElementProps } from "@/components/ui/shared";
import { CARDS, NEW_STORES_DUE_TO_DATE } from "./mainData";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export interface DashboardMainProps extends UiElementProps {

};

export const DashboardMain = (props: DashboardMainProps) => {

    const cards = CARDS;
    const lineChartData = NEW_STORES_DUE_TO_DATE;
    return (
        <section className={`w-full`}>
            <article className={`flex justify-between`}>
                {cards.map((card, index) => (<MainDashboardCard key={index} {...card} className={`flex-1 mx-2`} />))}
            </article>
            <article className={`mx-2 px-2 py-5 bg-white shadow-sm rounded-lg mt-4`}>
                <ResponsiveContainer height={300} width={`100%`}>
                    <LineChart
                        height={300}
                        data={lineChartData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="stores" stroke={"#3b82f6"} activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="products" stroke="#fca5a5" />
                    </LineChart>
                </ResponsiveContainer>
            </article>
        </section>
    );
}