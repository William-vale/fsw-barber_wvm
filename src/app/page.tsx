import Header from "./_components/header";
import Image from "next/image";
import { Badge } from "./_components/ui/badge";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import { SearchIcon } from "lucide-react";
import { Card, CardContent } from "./_components/ui/card";
import { Avatar, AvatarImage } from "./_components/ui/avatar";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";

const Home = async () => {
  //chamar meu banco de dados
  const babershops = await db.barbershop.findMany({});

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

        {/* Agendamento */}
        <h2 className="mb-3 mt-6 uppercase text-xs text-gray-400 font-bold">
          Agendamento
        </h2>

        <Card>
          <CardContent className="flex justify-between p-0">
            {/* Esquerda */}
            <div className="flex flex-col gap-2 py-5 pl-6">
              <Badge className="w-fit">Confirmado</Badge>
              <h3>Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6 bg-white">
                  <AvatarImage src="https://utfs.io/f/sc97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Barbearia FWS</p>
              </div>
            </div>
            {/* Direita */}
            <div className="flex flex-col items-center justify-center px-10 border-l-2 border-solid">
              <p className="text-sm">Agosto</p>
              <p className="text-3xl">14</p>
              <p className="text-sm">20h</p>
            </div>
          </CardContent>
        </Card>

        {/* Recomendados */}
        <h2 className="mb-3 mt-6 uppercase text-xs text-gray-400 font-bold">
          Recomendados
        </h2>

        <div className="flex gap-4 overflow-auto [&:: -webkit-scrollbar]:hidden">
          {babershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
