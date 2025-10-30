import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-900 px-6 py-10 md:px-16">
      <div className="mb-10">
        <Image alt="Logo" src="/images/logo.svg" width={160} height={40} />
      </div>

      <div className="text-center max-w-md">
        <h1 className="text-white text-3xl md:text-4xl font-semibold mb-4">
          Gerencie seus contatos com facilidade
        </h1>
        <p className="text-neutral-400 text-base md:text-lg">
          O Contact Manager ajuda você a organizar, visualizar e acessar suas
          informações de contato em um só lugar.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <Link href="/login">
          <Button variant="primary" className="w-full sm:w-auto px-8">
            Acessar conta
          </Button>
        </Link>

        <Link href="/register">
          <Button variant="outline" className="w-full sm:w-auto px-8">
            Criar conta
          </Button>
        </Link>
      </div>

      <p className="text-neutral-600 text-sm mt-12">
        © {new Date().getFullYear()} Contact Manager. Todos os direitos
        reservados.
      </p>
    </div>
  );
}
