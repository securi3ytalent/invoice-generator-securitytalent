"use client";

// Next
import Link from "next/link";

// RHF
import { useFormContext } from "react-hook-form";

// Component
import { BaseButton } from "@/app/components";

// Variables
import { FORM_FILL_VALUES } from "@/lib/variables";

type DevDebugProps = {};

const DevDebug = ({}: DevDebugProps) => {
    const { reset, formState } = useFormContext();
    return (
        <div className="flex border-2 border-red-500 rounded-md">
           <h1>DEV: </h1>
           <a href="https://securitytalent.net">MD Mehedi Hasan</a>
        </div>
    );
};

export default DevDebug;
