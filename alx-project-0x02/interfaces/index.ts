export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
}

export interface ACtiveLinkProps {
  href: string;
  children: React.ReactNode;
  activeClassName?: string;
  className?: string;
}

export interface PostProps {
  title: string;
  content: string;
  userId: number;
}
