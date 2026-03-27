import { Header } from "../../components/Header/Herader";
import { BtnExplorarJogos } from "../../components/UI/Buttons/Buttons";

export function Home() {
  return (
    <main className="min-h-screen relative text-white bg-[var(--color-background)]">

      <div className="relative z-10 flex flex-col h-full">

        <Header />

        <section className="flex flex-1 items-center px-10">
          <div className="max-w-xl">

            <h1 className="text-5xl font-bold leading-tight">
              Seja bem vindo ao <br />
              <span className="
                  bg-gradient-to-r 
                  from-purple-500 
                  via-pink-500 
                  to-orange-400 
                  bg-clip-text 
                  text-transparent
                "
              >
                Game Explorer
              </span>
            </h1>

            <p className="mt-6 text-[var(--color-text)]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry...
            </p>

            <BtnExplorarJogos />

          </div>
        </section>

      </div>
    </main>
  )
}