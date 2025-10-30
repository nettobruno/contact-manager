"use client";
import { useAuthGuard } from "@/hooks/useAuth";
import { Button } from "@/components/Button";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function Dashboard() {
  const { user, loading } = useAuthGuard();
  console.log(user);

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-900 text-white flex items-center justify-center">
        <p>Carregando...</p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold mb-4">
        Bem-vindo, {user.displayName || user.email}!
      </h1>
      <Button variant="outline" onClick={() => signOut(auth)}>
        Sair
      </Button>
    </div>
  );
}
