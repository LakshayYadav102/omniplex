"use client";
import { useRouter } from "next/navigation";

export default function PaymentFailure() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-gray-900 to-black p-4">
      <div className="bg-gray-800 shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">❌ Payment Failed</h2>
        <p className="text-gray-400 mb-6">
          Something went wrong while processing your $10/month Omniplex Pro Plan payment. Please try again.
        </p>
        <button
          onClick={() => router.push("/checkout")}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-xl transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}