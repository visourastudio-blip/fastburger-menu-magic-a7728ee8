import { Clock, MapPin, Instagram } from "lucide-react";

const RestaurantInfo = () => {
  return (
    <footer className="bg-card border-t border-border py-6 mt-8 animate-fade-in">
      <div className="container space-y-4">
        <h2 className="text-lg font-bold text-foreground mb-4 text-center">
          Informações
        </h2>
        
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
            <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground text-sm">Horário</p>
              <p className="text-muted-foreground text-xs">
                Terça a Sábado
              </p>
              <p className="text-secondary font-medium text-sm">
                17:45 às 22:00
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
            <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground text-sm">Localização</p>
              <p className="text-muted-foreground text-xs">
                Av. Central, 987 — Bairro Nova Vista
              </p>
              <p className="text-secondary font-medium text-sm">
                Cabreúva - SP
              </p>
            </div>
          </div>

          <a
            href="https://instagram.com/fastburger.oficial"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
          >
            <Instagram className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground text-sm">Instagram</p>
              <p className="text-secondary font-medium text-sm">
                @fastburger.oficial
              </p>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default RestaurantInfo;
