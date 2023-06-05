import Logo from '@/components/Logo'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll';
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import React, { useEffect, useState, useRef } from 'react'
import { motion } from "framer-motion";
import ThemeSwitch from '@/components/ThemeSwitch'

function Navbar() {

    const [navbarVisible, setnavbarVisible] = useState(false)
    const [responsiveNavVisible, setResponsiveNavVisible] = useState(false);
    const navbarRef = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.pageYOffset > 100 ? setnavbarVisible(true) : setnavbarVisible(false);
        })
    }, [])

    useEffect(() => {
        const links = document.querySelectorAll(".nav-items-list-item-link");
        links.forEach((link) => {
            link.addEventListener("click", () => setResponsiveNavVisible(false));
        });
        // const nav = document.querySelector(".nav-items");
        // nav?.addEventListener("click", (e) => {
        //     e.stopPropagation();
        // });
        const html = document.querySelector("html");
        html?.addEventListener("click", (e) => {
            setResponsiveNavVisible(false);
        });
    }, []);

    useEffect(() => {
        const main = document.querySelector("main");
        if (responsiveNavVisible) {
            main?.classList.add("blur");
        } else {
            main?.classList.remove("blur");
        }
    }, [responsiveNavVisible]);

    const sectionLinks = [
        { name: 'About', link: '/#about' },
        { name: 'Experience', link: '/#experience' },
        { name: 'Projects', link: '/#projects' },
        { name: 'Contact', link: '/#contact' },
    ]

    return (
        <nav ref={navbarRef}>
            <div className={`wrapper ${navbarVisible ? "blur-nav" : ""}`}>
                <motion.div
                    className="brand"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                    }}
                >
                    <Link href="">
                        <Logo />
                    </Link>
                </motion.div>

                <motion.div
                    className="nav-responsive-toggle"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                    }}
                >
                    {responsiveNavVisible ? (
                        <CgClose
                            onClick={(e) => {
                                e.stopPropagation();
                                setResponsiveNavVisible(false);
                            }}
                        />
                    ) : (
                        <GiHamburgerMenu
                            onClick={(e) => {
                                e.stopPropagation();
                                setResponsiveNavVisible(true);
                            }}
                        />
                    )}
                </motion.div>
                <div
                    className={`${responsiveNavVisible && "nav-responsive"} nav-items`}
                >
                    <ul className="nav-items-list">
                        {sectionLinks.map(({ name, link }, index) => (
                            <motion.li
                                key={name}
                                className="nav-items-list-item"
                                initial={{ opacity: 0, y: -25 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeInOut",
                                    delay: 0.3 + index * 0.1,
                                }}
                            >
                                <ScrollLink 
                                to={name.toLowerCase()}  offset={-200} className="nav-items-list-item-link">
                                    {name}
                                </ScrollLink>
                            </motion.li>
                        ))}
                    </ul>

                    <motion.div
                        className="nav-items-list-item"
                        initial={{ opacity: 0, y: -25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                            delay: 0.6,
                        }}
                    >
                        <ThemeSwitch />
                    </motion.div>

                </div>
            </div>

        </nav>
    )
}

export default Navbar