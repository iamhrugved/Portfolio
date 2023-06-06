import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FiGitBranch } from "react-icons/fi";

function Footer() {

  return (
    <footer>
      <Link
        href="https://github.com/iamhrugved/Portfolio"
        target="_blank"
        className="footer-link"
      >
        <span className="footer-info">Designed and Built by Hrugved Pawar and powered by Next.JS.</span>
      </Link>
    </footer>
  );
}

export default Footer;
