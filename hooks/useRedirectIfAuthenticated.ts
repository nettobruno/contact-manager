"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";

export function useRedirectIfAuthenticated() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.replace("/dashboard");
      }
    });

    return () => unsubscribe();
  }, [router]);
}
