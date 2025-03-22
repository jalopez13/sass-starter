'use client';

import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

const ErrorPage = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8 text-center">
        <div className="mb-6 flex justify-center">
          <div className="bg-red-100 p-4 rounded-full">
            <AlertTriangle className="h-12 w-12 text-red-600" />
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-4 text-gray-900">Oops!</h1>
        <p className="text-gray-600 mb-8 text-lg">
          Sorry, something went wrong
        </p>

        <div className="space-y-4">
          <Button
            className="w-full py-4 bg-gray-800 hover:bg-black text-white font-medium rounded-md"
            onClick={() => window.location.reload()}
          >
            Try Again
          </Button>

          <Button
            variant="outline"
            className="w-full py-4 border-gray-300 hover:bg-gray-100 transition duration-200 text-gray-700"
            onClick={() => (window.location.href = '/')}
          >
            Return Home
          </Button>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          If this problem persists, please contact our support team.
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
