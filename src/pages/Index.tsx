import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome to Demo App
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A simple demo application showcasing authentication and user management.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                onClick={() => navigate('/auth')}
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;