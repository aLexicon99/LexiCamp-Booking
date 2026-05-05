"use client";

export default function CancellationPolicyInfo() {
    return (
        <div className="p-6 bg-stone-100 rounded-lg border-l-4 border-orange-500">
            <p className="text-sm text-stone-600 leading-relaxed">
                <span className="font-bold text-stone-800">Cancellation policy:</span> Free cancellation
                until 48 hours
                before check-in. After that, cancel before check-in and get a 50% refund, minus the service
                fee.
            </p>
        </div>
    );
}
