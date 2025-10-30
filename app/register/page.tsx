"use client";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { useState } from "react";
import { XCircle } from "lucide-react";
import { validateRegister } from "@/utils/validation";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newErrors = validateRegister({
      nome,
      email,
      password,
      confirmPassword,
    });
    setErrors(newErrors);
    if (newErrors.length > 0) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    alert("Conta criada com sucesso!");
  }

  return (
    <div className="grid min-h-screen md:grid-cols-[2fr_1fr]">
      <div
        className="hidden md:flex items-start justify-start bg-cover bg-center px-16 py-10"
        style={{ backgroundImage: "url('/images/bg-auth.png')" }}
      >
        <Image alt="Logo" src="/images/logo.svg" width={132} height={32} />
      </div>

      <div className="bg-neutral-900 flex flex-col justify-center px-6 py-10 md:px-16 relative">
        <div className="absolute top-4 inset-x-0 px-6 md:top-8 md:px-16">
          <p className="text-white text-right text-sm md:text-base">
            Já tem uma conta?{" "}
            <Link href="/login" className="text-lime-300 font-semibold">
              Acessar conta
            </Link>
          </p>
        </div>

        <div className="mt-10 md:mt-0">
          <h2 className="text-white text-2xl md:text-3xl mb-5 font-semibold">
            Criar conta
          </h2>

          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <Input
              id="nome"
              type="text"
              label="Nome"
              placeholder="Como você se chama?"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <Input
              id="email"
              type="email"
              label="E-mail"
              placeholder="Seu e-mail aqui"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              id="password"
              type="password"
              label="Senha"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Input
              id="confirmPassword"
              type="password"
              label="Repetir senha"
              placeholder="Repita sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {errors.length > 0 && (
              <div className="mt-2 flex flex-col gap-1">
                {errors.map((err, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-red-400 text-sm"
                  >
                    <XCircle size={16} />
                    <span>{err}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="self-end mt-4">
              <Button type="submit" variant="primary">
                {loading ? "Criando..." : "Criar conta"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
