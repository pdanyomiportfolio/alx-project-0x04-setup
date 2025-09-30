// Interface for Home page routing
export interface PageRouteProps {
  pageRoute: string;
}

// Interface for Button component
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
  action?: () => void;
}

// Interface for Layout components
import { ReactNode } from "react";
export interface LayoutProps {
  children: ReactNode;
}
