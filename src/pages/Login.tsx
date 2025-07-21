import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Lock, Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Welcome back!",
        description: "Successfully logged in to your account.",
      });
      navigate("/");
    }, 1000);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: 'url("/images/bg.png")',
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100vw",
        fontFamily: "Segoe UI",
      }}
    >
      <div className="w-full max-w-md">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-17 h-17 rounded-2xl mb-4 mx-auto">
            <img src="/images/Positive Dynamic (1).png" alt="Logo" width="106" height="72" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">FinanceScope</h1>
        </div>
        <Card
          className="border border-white/10"
          style={{ backgroundColor: "#DCDFE8", width: '450px', height: '380px' }}
        >
          <CardHeader className="text-center mb-[-8px]">
            <CardTitle className="text-black" style={{ fontSize: '28px' }}>Welcome Back</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4 flex items-center justify-center flex-col">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-black">Email</Label>
                <div className="relative w-[338px] h-[48px]">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-600" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10 bg-gray-100 text-black border border-black-300 w-full h-full"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-black">Password</Label>
                <div className="relative w-[338px] h-[48px]">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-600" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="pl-10 bg-gray-100 text-black border border-black-300 w-full h-full"
                    required
                  />
                </div>
              </div>

              <div className="mt-6"></div>

              <Button
                type="submit"
                className="w-[338px] h-[48px] bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
                disabled={loading}
              >
                {loading ? "Signing in..." : "LOG IN"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
