'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export default function ServiceProvidersPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const serviceProviderData = {
      fullName: formData.get('fullName'),
      associatedCompany: formData.get('associatedCompany'),
      phoneNumber: formData.get('phoneNumber'),
      cnpj: formData.get('cnpj'),
      cpf: formData.get('cpf'),
      department: formData.get('department'),
      requestedBy: formData.get('requestedBy'),
    };

    try {
      const response = await fetch('/api/service-providers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(serviceProviderData),
      });

      if (!response.ok) {
        throw new Error('Falha ao registrar prestador de serviço');
      }

      e.currentTarget.reset();
    } catch (err) {
      setError('Falha ao registrar prestador de serviço. Por favor, tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Registrar Novo Prestador de Serviço</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Nome Completo</Label>
            <Input
              id="fullName"
              name="fullName"
              required
              placeholder="Digite o nome completo"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="associatedCompany">Empresa Associada</Label>
            <Input
              id="associatedCompany"
              name="associatedCompany"
              required
              placeholder="Digite o nome da empresa"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Número de Telefone</Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              required
              placeholder="Digite o número de telefone"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cnpj">CNPJ</Label>
              <Input
                id="cnpj"
                name="cnpj"
                required
                placeholder="Digite o CNPJ"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cpf">CPF</Label>
              <Input
                id="cpf"
                name="cpf"
                required
                placeholder="Digite o CPF"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="department">Departamento/Setor</Label>
            <Input
              id="department"
              name="department"
              required
              placeholder="Digite o departamento"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="requestedBy">Solicitado Por</Label>
            <Input
              id="requestedBy"
              name="requestedBy"
              required
              placeholder="Digite o nome do solicitante"
            />
          </div>

          {error && (
            <div className="text-sm text-red-500 text-center">{error}</div>
          )}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Registrando...' : 'Registrar Prestador de Serviço'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}