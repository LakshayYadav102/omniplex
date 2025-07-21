"use client";
import { useRouter } from "next/navigation";

export default function PaymentSuccess() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-gray-900 to-black p-4">
      <div className="bg-gray-800 shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">✅ Payment Successful!</h2>
        <p className="text-gray-400 mb-6">
          You’ve successfully upgraded to the Omniplex Pro Plan for $10/month. Enjoy premium features like advanced analytics, unlimited access, and early beta features!
        </p>
        <button
          onClick={() => router.push("/")}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-xl transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}