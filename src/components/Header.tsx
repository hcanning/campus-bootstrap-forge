
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-blue-900/90 backdrop-blur-sm fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-white font-bold text-xl">
              🎓 University of Excellence
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a 
                href="#home" 
                onClick={(e) => handleSmoothScroll(e, 'home')}
                className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={(e) => handleSmoothScroll(e, 'about')}
                className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </a>
              
              <DropdownMenu>
                <DropdownMenuTrigger className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1">
                  Programs
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white shadow-lg border">
                  <DropdownMenuItem>
                    <a href="#programs" onClick={(e) => handleSmoothScroll(e, 'programs')} className="w-full">
                      All Programs
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#" className="w-full">Undergraduate</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#" className="w-full">Graduate</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#" className="w-full">Online Learning</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1">
                  Admissions
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white shadow-lg border">
                  <DropdownMenuItem>
                    <a href="#admissions" onClick={(e) => handleSmoothScroll(e, 'admissions')} className="w-full">
                      Admissions Info
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#" className="w-full">Apply Now</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#" className="w-full">Requirements</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#" className="w-full">Financial Aid</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <a 
                href="#contact" 
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
