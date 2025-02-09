import { supabase } from "@/app/db/supabase"
import { NextResponse } from "next/server"

export interface CardType {
    id: number | null;
    relation: string | null;
    descriptions: string | null;
    time: string | null;
    url_link: string | null;
    image_url: string | null;
    title: string | null;
    button_lock: boolean | null;
}
export async function GET () {
    try {
        const { data, error } = await supabase
            .from("cards")
            .select("*");

        if (error) {
            console.error("Error fetching cards:", error);
            return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
        }


        return NextResponse.json(data);
    } catch (error) {
        console.log(error,"error getting cards")
        return NextResponse.json(
            {
                message : `error getting cards : ${error}`
            }
        )
    }
}