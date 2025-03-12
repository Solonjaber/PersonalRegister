import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, UserPlus, Building2 } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Link href="/dashboard/employees">
        <Card className="hover:bg-gray-50 transition-colors cursor-pointer">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Funcionários</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Controle</div>
            <p className="text-xs text-muted-foreground">
              Gerencie o acesso e informações dos funcionários
            </p>
          </CardContent>
        </Card>
      </Link>

      <Link href="/dashboard/visitors">
        <Card className="hover:bg-gray-50 transition-colors cursor-pointer">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Visitantes</CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Registrar</div>
            <p className="text-xs text-muted-foreground">
              Acompanhe e gerencie o acesso de visitantes
            </p>
          </CardContent>
        </Card>
      </Link>

      <Link href="/dashboard/service-providers">
        <Card className="hover:bg-gray-50 transition-colors cursor-pointer">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Prestadores de Serviço</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Gerenciar</div>
            <p className="text-xs text-muted-foreground">
              Controle o acesso dos prestadores de serviço
            </p>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}