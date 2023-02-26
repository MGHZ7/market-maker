import { UiElementProps } from "../../shared";

export interface FilterBarLayoutProps extends UiElementProps {
    children?: JSX.Element;
};

export const FilterBarLayout = ({ children, className }: FilterBarLayoutProps) => {

    return (
        <section className={`${className} bg-surface rounded shadow p-4`}>
            {children}
        </section>
    );
}