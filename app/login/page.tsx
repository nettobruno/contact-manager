import Image from "next/image";
import Link from "next/link";

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
            <div className="flex flex-col mb-5">
              <label htmlFor="email" className="font-semibold text-white mb-1">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu e-mail"
                className="border border-neutral-700 px-3 py-2 rounded-lg bg-transparent text-white placeholder-neutral-500 focus:outline-none focus:border-lime-300"
              />
            </div>

            <div className="flex flex-col mb-5">
              <label
                htmlFor="password"
                className="font-semibold text-white mb-1"
              >
                Senha
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Digite sua senha"
                className="border border-neutral-700 px-3 py-2 rounded-lg bg-transparent text-white placeholder-neutral-500 focus:outline-none focus:border-lime-300"
              />
            </div>

            <button
              type="submit"
              className="text-black bg-lime-300 p-3 rounded-xl w-fit self-end font-bold hover:cursor-pointer hover:bg-lime-400 transition-colors"
            >
              Acessar Conta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
