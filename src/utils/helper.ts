import moment from "moment";
import {toast} from "react-toastify";

/**
 * Formats an ISO date string into a readable format.
 * @param date - The ISO date string to format.
 * @param format - The desired format (default: "MMMM Do YYYY, h:mm A").
 * @returns A formatted date string.
 */
export const formatDate = (date: string, format: string = "MMMM Do YYYY, h:mm A"): string => {
    return moment.utc(date).local().format(format);
};

export const showSuccess = (
    message: string,
    position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center" = "top-right",
    autoClose: number = 3000
) => {
    toast.success(message, {
        position: position,
        autoClose: autoClose,
    });
};


export const showError = (
    message: string,
    position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center" = "top-right",
    autoClose: number = 3000
) => {
    toast.error(message, {
        position: position,
        autoClose: autoClose,
    });
};