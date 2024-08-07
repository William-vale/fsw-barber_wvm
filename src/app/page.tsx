import Header from "./_components/header";
import Image from "next/image";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import { SearchIcon } from "lucide-react";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">
          Olá, {/* Será Dinâmico */} William {/* Será Dinâmico */}
        </h2>
        <p>Quarta-feira, 08 de Agosto</p>

        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faça sua busca..." />
          <Button size="icon">
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 w-full h-[150px]">
          <Image
            alt="Agende nos melhores com o FSW Barber"
            src="/Banner_pizza.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
