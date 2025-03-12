import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, UserPlus, Building2 } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Link href="/dashboard/employees">
        <Card className="hover:bg-gray-50 transition-colors cursor-pointer">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Employees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Control</div>
            <p className="text-xs text-muted-foreground">
              Manage employee access and information
            </p>
          </CardContent>
        </Card>
      </Link>

      <Link href="/dashboard/visitors">
        <Card className="hover:bg-gray-50 transition-colors cursor-pointer">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Visitors</CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Register</div>
            <p className="text-xs text-muted-foreground">
              Track and manage visitor access
            </p>
          </CardContent>
        </Card>
      </Link>

      <Link href="/dashboard/service-providers">
        <Card className="hover:bg-gray-50 transition-colors cursor-pointer">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Service Providers</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Manage</div>
            <p className="text-xs text-muted-foreground">
              Control service provider access
            </p>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}