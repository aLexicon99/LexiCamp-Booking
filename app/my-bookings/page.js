"use client";

import BookingDetails from "@/components/BookingDetails";
import useAuth from "@/hooks/useAuth";
import campgrounds from "@/public/locations_data.json";
import useIsClient from "@/hooks/useIsClient";
import {useEffect} from "react";
import {redirect} from "next/navigation";
import Link from "next/link";

const campgroundMap = new Map(campgrounds.map((campground) => [campground.id, campground]));

export default function MyBookings() {
    const [user] = useAuth();
    const isClient = useIsClient();

    useEffect(() => {
        if (!user) {
            redirect("/login");
        }
    },[user]);

    if (!user || !isClient) {
        return null;
    }

    if (user.bookings.length === 0) {
        return (
            <div className="pt-12 pb-24 px-6 text-center">
                <p className="text-gray-500">
                    {"No previous booking found."}
                </p>
            </div>
        );
    }

    return (
        <div className="pt-12 pb-24 px-6 md:px-12 max-w-9xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {
                    user.bookings.map((booking) => (
                        <Link key={booking.id} href={`/campsites/${booking.location_id}`} className="lg:col-span-1">
                            <div className="sticky top-32 space-y-6">
                                <BookingDetails
                                    campground={campgroundMap.get(booking.location_id)}
                                    checkin={booking.checkin}
                                    checkout={booking.checkout}
                                />
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}