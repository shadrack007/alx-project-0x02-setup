import { ACtiveLinkProps } from "@/interfaces";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const ActiveLink: React.FC<ACtiveLinkProps> = ({
  href,
  activeClassName = "text-orange-700 font-bold",
  className = "",
  children,
}) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      className={`${className} ${isActive ? activeClassName : ""}`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
