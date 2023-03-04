import { useMemo } from "react";

export const useShortDateFormate = (date: Date, locale: string = "en") => {
    return useMemo(() => date.toLocaleDateString(locale, {
        month: "short",
        day: "numeric",
    }), [date, locale]);
};