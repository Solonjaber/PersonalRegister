'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function EmployeesPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const employeeData = {
      fullName: formData.get('fullName'),
      address: formData.get('address'),
      gender: formData.get('gender'),
      zipCode: formData.get('zipCode'),
      age: Number(formData.get('age')),
      maritalStatus: formData.get('maritalStatus'),
      department: formData.get('department'),
      phoneNumber: formData.get('phoneNumber'),
      email: formData.get('email'),
      cpf: formData.get('cpf'),
      rg: formData.get('rg'),
    };

    console.log('Employee Data:', employeeData);
    e.currentTarget.reset();
    setIsLoading(false);
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Registrar novo funcionário</CardTitle>
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
            <Label htmlFor="address">Endereço</Label>
            <Input
              id="address"
              name="address"
              required
              placeholder="Digite o endereço"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="gender">Gênero</Label>
              <Select name="gender" required>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o gênero" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Masculino</SelectItem>
                  <SelectItem value="female">Feminino</SelectItem>
                  <SelectItem value="other">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="zipCode">CEP</Label>
              <Input
                id="zipCode"
                name="zipCode"
                required
                placeholder="Digite o CEP"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="age">Idade</Label>
              <Input
                id="age"
                name="age"
                type="number"
                required
                placeholder="Digite a idade"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="maritalStatus">Estado Civil</Label>
              <Select name="maritalStatus" required>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o estado civil" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="single">Solteiro(a)</SelectItem>
                  <SelectItem value="married">Casado(a)</SelectItem>
                  <SelectItem value="divorced">Divorciado(a)</SelectItem>
                  <SelectItem value="widowed">Viúvo(a)</SelectItem>
                </SelectContent>
              </Select>
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

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Número de telefone</Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                required
                placeholder="Digite o número de telefone"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Digite o e-mail"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cpf">CPF</Label>
              <Input
                id="cpf"
                name="cpf"
                required
                placeholder="Digite o CPF"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="rg">RG</Label>
              <Input
                id="rg"
                name="rg"
                required
                placeholder="Digite o RG"
              />
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Registrando...' : 'Registrar Funcionário'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
