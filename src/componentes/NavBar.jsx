import React from 'react'
import './NavBar.css'

import { useState } from "react";

import { motion, AnimatePresence } from "motion/react";
import {
    Code2,
    Menu,
    X,
    ArrowUpRight
} from "lucide-react";

const links = [
    { name: "Início", href: "#inicio" },
    { name: "Serviços", href: "#servicos" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Contato", href: "#contato" },
];

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);


    return (
            <motion.header
                className="navbar"
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <div className="navbar-container">

                    {/* LOGO */}
                    <a href="#inicio" className="navbar-logo" onClick={closeMenu}>
                        <div className="logo-icon">
                            <Code2 size={25} strokeWidth={2.2} />
                        </div>

                        <span className="logo-name">
                            {"Chris<Tech>"}.<span>is</span>
                        </span>
                    </a>

                    {/* LINKS DESKTOP */}
                    <nav className="navbar-links">
                        {links.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                whileHover={{ y: -3 }}
                                transition={{ duration: 0.2 }}
                                className="nav-link"
                            >
                                {link.name}
                                <motion.span
                                    className="nav-indicator"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.25 }}
                                />
                            </motion.a>
                        ))}
                    </nav>

                    {/* BOTÃO DE CONTATO */}
                    <motion.a
                        href="#contato"
                        className="navbar-cta"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                    >
                        Vamos conversar
                        <ArrowUpRight size={17} />
                    </motion.a>

                    {/* BOTÃO MOBILE */}
                    <button
                        className="menu-toggle"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <X size={25} /> : <Menu size={25} />}
                    </button>

                </div>

                {/* MENU MOBILE */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.nav
                            className="mobile-menu"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {links.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={closeMenu}
                                    initial={{ opacity: 0, x: -15 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.06 }}
                                >
                                    {link.name}
                                    <ArrowUpRight size={16} />
                                </motion.a>
                            ))}

                            <a
                                href="#contato"
                                className="mobile-cta"
                                onClick={closeMenu}
                            >
                                Vamos conversar
                            </a>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </motion.header>
    )
}

export default NavBar