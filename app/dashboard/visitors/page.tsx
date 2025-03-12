'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export default function VisitorsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const visitorData = {
      fullName: formData.get('fullName'),
      phoneNumber: formData.get('phoneNumber'),
      associatedCompany: formData.get('associatedCompany'),
    };

    try {
      const response = await fetch('/api/visitors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(visitorData),
      });

      if (!response.ok) {
        throw new Error('Falha ao registrar visitante');
      }

      e.currentTarget.reset();
    } catch (err) {
      setError('Falha ao registrar visitante. Por favor, tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Registrar Novo Visitante</CardTitle>
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
            <Label htmlFor="phoneNumber">Número de Telefone</Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              required
              placeholder="Digite o número de telefone"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="associatedCompany">Empresa Associada (Opcional)</Label>
            <Input
              id="associatedCompany"
              name="associatedCompany"
              placeholder="Digite o nome da empresa"
            />
          </div>

          {error && (
            <div className="text-sm text-red-500 text-center">{error}</div>
          )}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Registrando...' : 'Registrar Visitante'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}