"use client";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();

  const handleCheckout = async () => {
    const res = await fetch("/api/stripe/checkout", {
      method: "POST",
    });

    const data = await res.json();
    if (data?.url) {
      window.location.href = data.url;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-gray-900 to-black p-4">
      <div className="bg-gray-800 shadow-xl rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-4 text-white">Upgrade to Omniplex Pro</h2>
        <p className="text-gray-400 text-center mb-6">
          Unlock premium features like advanced analytics, unlimited access, and early beta features.
        </p>
        <div className="flex justify-center mb-6">
          <div className="text-center">
            <span className="text-4xl font-bold text-green-500">$10</span>
            <span className="text-gray-500"> /month</span>
          </div>
        </div>
        <button
          onClick={handleCheckout}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-xl transition"
        >
          Checkout with Stripe
        </button>
      </div>
    </div>
  );
}