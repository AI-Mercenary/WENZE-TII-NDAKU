import { useState } from "react";
import { useTranslation } from "react-i18next";
import { 
  Users, 
  Package, 
  DollarSign, 
  TrendingUp, 
  UserCheck, 
  UserX, 
  Ban,
  Check,
  X,
  Eye,
  Edit,
  Trash2,
  BarChart3,
  Settings,
  Shield,
  AlertTriangle,
  Image as ImageIcon,
  Headphones
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

const AdminDashboard = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("overview");

  // Sample admin data
  const adminData = {
    totalVendors: 1250,
    activeVendors: 1180,
    pendingApprovals: 25,
    totalProducts: 50000,
    totalRevenue: 2500000,
    totalCustomers: 25000,
    monthlyGrowth: 12.5
  };

  // Sample vendors pending approval
  const pendingVendors = [
    {
      id: "1",
      name: "Beauty Express",
      email: "contact@beautyexpress.com",
      category: "Cosmetics",
      submittedDate: "2024-01-15",
      status: "pending"
    },
    {
      id: "2",
      name: "Tech Solutions Africa",
      email: "info@techsolutions.com",
      category: "Technology",
      submittedDate: "2024-01-14",
      status: "pending"
    }
  ];

  // Sample products pending approval
  const pendingProducts = [
    {
      id: "1",
      name: "Organic Face Serum",
      vendor: "AfriBeauty Store",
      category: "Cosmetics",
      price: 45.99,
      status: "pending"
    },
    {
      id: "2",
      name: "Smartphone Stand",
      vendor: "TechHub Africa",
      category: "Technology",
      price: 25.99,
      status: "pending"
    }
  ];

  // Sample disputes
  const disputes = [
    {
      id: "1",
      orderId: "ORD-12345",
      customer: "John Doe",
      vendor: "Fashion Store",
      issue: "Product not as described",
      status: "open",
      date: "2024-01-15"
    },
    {
      id: "2",
      orderId: "ORD-12346",
      customer: "Jane Smith",
      vendor: "Electronics Hub",
      issue: "Damaged product received",
      status: "investigating",
      date: "2024-01-14"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="secondary">Pending</Badge>;
      case "approved":
        return <Badge className="bg-success text-success-foreground">Approved</Badge>;
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>;
      case "active":
        return <Badge className="bg-success text-success-foreground">Active</Badge>;
      case "suspended":
        return <Badge variant="destructive">Suspended</Badge>;
      case "open":
        return <Badge variant="destructive">Open</Badge>;
      case "investigating":
        return <Badge className="bg-secondary text-secondary-foreground">Investigating</Badge>;
      case "resolved":
        return <Badge className="bg-success text-success-foreground">Resolved</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage your marketplace platform</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Shield className="h-4 w-4 mr-2" />
                Security
              </Button>
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>

          {/* Alerts */}
          <div className="mb-6 space-y-4">
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Attention Required</AlertTitle>
              <AlertDescription>
                {adminData.pendingApprovals} vendors are waiting for approval. Review pending applications.
              </AlertDescription>
            </Alert>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="vendors">Vendors</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="disputes">Disputes</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${adminData.totalRevenue.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground">+{adminData.monthlyGrowth}% from last month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Vendors</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{adminData.activeVendors.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground">{adminData.pendingApprovals} pending approval</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                    <Package className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{adminData.totalProducts.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground">8 pending approval</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Customers</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{adminData.totalCustomers.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground">+156 new this week</p>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Pending Vendor Approvals</CardTitle>
                    <CardDescription>Vendors waiting for approval</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {pendingVendors.slice(0, 3).map((vendor) => (
                        <div key={vendor.id} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{vendor.name}</p>
                            <p className="text-sm text-muted-foreground">{vendor.category}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Check className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Disputes</CardTitle>
                    <CardDescription>Customer-vendor disputes requiring attention</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {disputes.slice(0, 3).map((dispute) => (
                        <div key={dispute.id} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{dispute.orderId}</p>
                            <p className="text-sm text-muted-foreground">{dispute.issue}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            {getStatusBadge(dispute.status)}
                            <Button size="sm" variant="outline">
                              <Eye className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Vendors Tab */}
            <TabsContent value="vendors" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Vendor Management</h2>
                <div className="flex gap-2">
                  <Button variant="outline">Export</Button>
                  <Button variant="outline">Filter</Button>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Pending Vendor Approvals</CardTitle>
                  <CardDescription>Review and approve vendor applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Vendor Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Submitted</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pendingVendors.map((vendor) => (
                        <TableRow key={vendor.id}>
                          <TableCell className="font-medium">{vendor.name}</TableCell>
                          <TableCell>{vendor.email}</TableCell>
                          <TableCell>{vendor.category}</TableCell>
                          <TableCell>{vendor.submittedDate}</TableCell>
                          <TableCell>{getStatusBadge(vendor.status)}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <Eye className="h-3 w-3" />
                              </Button>
                              <Button variant="outline" size="sm" className="text-success">
                                <UserCheck className="h-3 w-3" />
                              </Button>
                              <Button variant="outline" size="sm" className="text-destructive">
                                <UserX className="h-3 w-3" />
                              </Button>
                              <Button variant="outline" size="sm" className="text-destructive">
                                <Ban className="h-3 w-3" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Products Tab */}
            <TabsContent value="products" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Product Management</h2>
                <div className="flex gap-2">
                  <Button variant="outline">Export</Button>
                  <Button variant="outline">Filter</Button>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Pending Product Approvals</CardTitle>
                  <CardDescription>Review and approve product listings</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product Name</TableHead>
                        <TableHead>Vendor</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pendingProducts.map((product) => (
                        <TableRow key={product.id}>
                          <TableCell className="font-medium">{product.name}</TableCell>
                          <TableCell>{product.vendor}</TableCell>
                          <TableCell>{product.category}</TableCell>
                          <TableCell>${product.price}</TableCell>
                          <TableCell>{getStatusBadge(product.status)}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <Eye className="h-3 w-3" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Edit className="h-3 w-3" />
                              </Button>
                              <Button variant="outline" size="sm" className="text-success">
                                <Check className="h-3 w-3" />
                              </Button>
                              <Button variant="outline" size="sm" className="text-destructive">
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Platform Analytics</h2>
                <Button variant="outline">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Export Report
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Revenue</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary">$250,000</div>
                    <p className="text-sm text-muted-foreground">+15% from last month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Commission Earned</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-secondary">$25,000</div>
                    <p className="text-sm text-muted-foreground">10% commission rate</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Platform Growth</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary">+12.5%</div>
                    <p className="text-sm text-muted-foreground">Monthly user growth</p>
                  </CardContent>
                </Card>
              </div>

              {/* Placeholder for charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Revenue Chart</CardTitle>
                    <CardDescription>Monthly revenue performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-muted rounded flex items-center justify-center">
                      <p className="text-muted-foreground">Revenue chart would appear here</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>User Growth</CardTitle>
                    <CardDescription>Platform user growth over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-muted rounded flex items-center justify-center">
                      <p className="text-muted-foreground">User growth chart would appear here</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Disputes Tab */}
            <TabsContent value="disputes" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Dispute Management</h2>
                <div className="flex gap-2">
                  <Button variant="outline">Filter</Button>
                  <Button variant="outline">Export</Button>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Active Disputes</CardTitle>
                  <CardDescription>Customer-vendor disputes requiring attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Vendor</TableHead>
                        <TableHead>Issue</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {disputes.map((dispute) => (
                        <TableRow key={dispute.id}>
                          <TableCell className="font-medium">{dispute.orderId}</TableCell>
                          <TableCell>{dispute.customer}</TableCell>
                          <TableCell>{dispute.vendor}</TableCell>
                          <TableCell>{dispute.issue}</TableCell>
                          <TableCell>{getStatusBadge(dispute.status)}</TableCell>
                          <TableCell>{dispute.date}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <Eye className="h-3 w-3" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Headphones className="h-3 w-3" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Content Tab */}
            <TabsContent value="content" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Content Management</h2>
                <Button>
                  <ImageIcon className="h-4 w-4 mr-2" />
                  Add Banner
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Homepage Banners</CardTitle>
                    <CardDescription>Manage promotional banners</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">Holiday Sale Banner</h4>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">Active until Jan 31, 2024</p>
                    </div>
                    <Button variant="outline" className="w-full">
                      Add New Banner
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Featured Categories</CardTitle>
                    <CardDescription>Manage featured category promotions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Cosmetics</span>
                        <Badge className="bg-success text-success-foreground">Featured</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Technology</span>
                        <Badge variant="secondary">Not Featured</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Fashion</span>
                        <Badge className="bg-success text-success-foreground">Featured</Badge>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Manage Categories
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Commission Settings</CardTitle>
                  <CardDescription>Set platform commission rates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="globalCommission">Global Commission Rate (%)</Label>
                      <Input id="globalCommission" type="number" defaultValue="10" />
                    </div>
                    <div>
                      <Label htmlFor="premiumCommission">Premium Vendor Rate (%)</Label>
                      <Input id="premiumCommission" type="number" defaultValue="8" />
                    </div>
                  </div>
                  <Button>Save Commission Settings</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminDashboard;