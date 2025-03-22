'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { signinSchema } from '@/schema';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Github, Chrome } from 'lucide-react';
import Link from 'next/link';

const SignInPage = () => {
  const form = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof signinSchema>) {
    console.log(values);
  }

  return (
    <div className="flex min-h-screen bg-white items-center justify-center p-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
        {/* Form Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">
            Welcome back
          </h1>
          <p className="text-gray-500">Sign in to your account</p>
        </div>

        {/* OAuth Buttons */}
        <div className="space-y-4 mb-6">
          <Button className="w-full py-5 transition duration-200 flex items-center justify-center space-x-2 bg-gray-900 hover:bg-black text-white cursor-pointer">
            <Github className="w-5 h-5 text-white" />
            <span className="font-medium">Continue with GitHub</span>
          </Button>

          <Button className="w-full py-5 transition duration-200 flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white cursor-pointer">
            <Chrome className="w-5 h-5 text-white" />
            <span className="font-medium">Sign in with Google</span>
          </Button>
        </div>

        {/* Form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="you@example.com"
                          className="w-full py-3 px-3 border border-gray-300 rounded-md"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-gray-500"
                  >
                    Forgot Password?
                  </a>
                </div>
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="••••••••"
                          className="w-full py-3 px-3 border border-gray-300 rounded-md"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full py-3 bg-gray-800 hover:bg-black text-white font-medium rounded-md cursor-pointer"
            >
              Sign In
            </Button>
          </form>
        </Form>

        {/* Sign Up Link */}
        <div className="mt-6 flex items-center justify-center text-sm text-gray-500 space-x-2 cursor-pointer">
          <span>Don&apos;t have an account?</span>
          <Link
            href="/signup"
            className="text-gray-800 hover:text-black font-medium"
          >
            Sign Up Now!
          </Link>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-8 text-center text-xs text-gray-500">
          By continuing, you agree to Supabase&apos;s
          <Link
            href="/terms"
            className="text-gray-500 hover:text-gray-700"
          >
            Terms of Service
          </Link>
          and
          <Link
            href="/privacy"
            className="text-gray-500 hover:text-gray-700"
          >
            Privacy Policy
          </Link>
          , and to receive periodic emails with updates.
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
