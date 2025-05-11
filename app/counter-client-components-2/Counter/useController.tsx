"use client"

import { Controller } from "./Counter.types";

export const useController = (): Controller => {
    const addButtonClicked = () => {
        console.log("Add button clicked");
    };

    const removeButtonClicked = () => {
        console.log("Remove button clicked");
    };

    return {
        addButtonClicked,
        removeButtonClicked,
    };
}
