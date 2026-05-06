"use client";

export default function SustainableBookingInfo() {
    return (
        <div className="bg-primary-container p-6 rounded-xl flex items-start gap-4">
            <span className="material-symbols-outlined text-on-primary-container" data-icon="eco">eco</span>
            <div>
                <p className="text-sm font-bold text-on-primary-container">Sustainable Booking</p>
                <p className="text-xs text-on-primary-container/80 mt-1">
                    This booking contributes to reforestation efforts in the Olympic region.
                </p>
            </div>
        </div>
    );
}
