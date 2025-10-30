import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

export default function Login() {
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
            Não tem uma conta?{" "}
            <Link href="/register" className="text-lime-300 font-semibold">
              Criar conta
            </Link>
          </p>
        </div>

        <div className="mt-10 md:mt-0">
          <h2 className="text-white text-2xl md:text-3xl mb-5 font-semibold">
            Acessar conta
          </h2>

          <form className="flex flex-col">
            <Input
              id="email"
              type="email"
              label="E-mail"
              placeholder="Digite seu e-mail"
            />

            <Input
              id="password"
              type="password"
              label="Senha"
              placeholder="Digite sua senha"
            />

            <div className="self-end mt-3">
              <Button type="submit" variant="primary">
                Acessar Conta
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
