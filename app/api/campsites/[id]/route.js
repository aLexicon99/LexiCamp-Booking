import { NextResponse } from "next/server";
import data from "@/public/locations_data.json";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export async function GET(req, { params }) {
  const id = (await params).id;
  const foundCampsite = data.find((c) => c.id === id);

  if (!id || !foundCampsite) {
    return NextResponse.json(
      { message: `Campsite with ID "${id}" was NOT found` },
      { status: 404 },
    );
  }

  return NextResponse.json(foundCampsite, { status: 200 });
}
