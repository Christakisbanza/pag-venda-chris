
import { motion } from "motion/react";
import {
    ArrowUpRight,
    MessageCircle,
    Code2,
    Layers3,
    Globe,
    Check
} from "lucide-react";

import "./Hero.css";

const whatsappNumber = "5541995407966"; // Substitua pelo seu número

const message = encodeURIComponent(
    "Olá! Vim pelo site da Chris<Tech>.is e gostaria de conhecer seus serviços."
);

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

const features = [
    "Qualidade em cada detalhe",
    "Compromisso com prazos",
    "Design moderno e personalizado",
    "Experiência adaptada para todos os dispositivos"
];

export default function Hero() {
    return (
        <section className="hero" id="inicio">

            <div className="hero-background">
                <div className="hero-grid"></div>
                <div className="hero-glow"></div>
            </div>

            <div className="container hero-container">

                {/* CONTEÚDO */}
                <motion.div
                className="hero-content"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                >

                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        Desenvolvimento web sob medida
                    </div>

                    <h1 className="hero-title">
                        Seu próximo projeto
                        <br />
                        digital começa
                        <br />
                        <span>aqui.</span>
                    </h1>

                    <p className="hero-description">
                        Desenvolvemos experiências digitais modernas,
                        funcionais e estratégicas para destacar sua marca
                        e impulsionar seu negócio.
                    </p>

                    {/* DIFERENCIAIS */}
                    <div className="hero-features">
                        {features.map((feature, index) => (
                            <motion.div
                                className="hero-feature"
                                key={feature}
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + index * 0.12 }}
                            >
                                <span className="feature-check">
                                    <Check size={13} />
                                </span>
                                {feature}
                            </motion.div>
                        ))}
                    </div>

                    {/* BOTÕES */}
                    <div className="hero-buttons">

                        <motion.a
                            href="#servicos"
                            className="hero-btn-primary"
                            whileHover={{ scale: 1.04, y: -3 }}
                            whileTap={{ scale: 0.96 }}
                        >
                            Conheça nossos serviços
                            <ArrowUpRight size={19} />
                        </motion.a>

                        <motion.a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-btn-whatsapp"
                            whileHover={{ scale: 1.04, y: -3 }}
                            whileTap={{ scale: 0.96 }}
                        >
                            <MessageCircle size={19} />
                            Fale comigo
                        </motion.a>

                    </div>

                    <div className="hero-bottom-text">
                        <span></span>
                        Ideias que se transformam em soluções digitais.
                    </div>

                </motion.div>

                {/* ELEMENTOS GEOMÉTRICOS */}
                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >

                    <div className="visual-glow"></div>

                    {/* ÓRBITA 1 */}
                    <motion.div
                        className="orbit orbit-one"
                        animate={{ rotate: 360 }}
                        transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: "linear"
                        }}
                    >
                        <span className="orbit-dot"></span>
                    </motion.div>

                    {/* ÓRBITA 2 */}
                    <motion.div
                        className="orbit orbit-two"
                        animate={{ rotate: -360 }}
                        transition={{
                        duration: 45,
                        repeat: Infinity,
                        ease: "linear"
                        }}
                    >
                        <span className="orbit-dot orbit-dot-two"></span>
                    </motion.div>

                    {/* CÍRCULO CENTRAL */}
                    <motion.div
                        className="visual-circle"
                        animate={{
                        y: [0, -15, 0],
                        rotate: [0, 5, 0]
                        }}
                        transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                        }}
                    >
                        <div className="circle-inner">
                            <Code2 size={65} strokeWidth={1.2} />
                            <span>BUILD YOUR IDEAS</span>
                        </div>
                    </motion.div>

                    {/* QUADRADO */}
                    <motion.div
                        className="floating-square"
                        animate={{
                        y: [0, -20, 0],
                        rotate: [0, 90, 180, 270, 360]
                        }}
                        transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                        }}
                    />

                    {/* LOSANGO */}
                    <motion.div
                        className="floating-diamond"
                        animate={{
                        y: [0, 18, 0],
                        rotate: [45, 135, 225, 315, 405]
                        }}
                        transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                        }}
                    />

                    {/* ESFERA */}
                    <motion.div
                        className="floating-orb"
                        animate={{
                        y: [0, -25, 0],
                        x: [0, 10, 0]
                        }}
                        transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut"
                        }}
                    />

                    {/* CARDS */}
                    <motion.div
                        className="floating-card code-card"
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                        }}
                    >
                        <Code2 size={18} />
                        <span>Clean Code</span>
                    </motion.div>

                    <motion.div
                        className="floating-card responsive-card"
                        animate={{ y: [0, 12, 0] }}
                        transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                        }}
                    >
                        <Globe size={18} />
                        <span>Web Experience</span>
                    </motion.div>

                    <motion.div
                        className="floating-card design-card"
                        animate={{ y: [0, -12, 0] }}
                        transition={{
                        duration: 5.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                        }}
                    >
                        <Layers3 size={18} />
                        <span>Modern Design</span>
                    </motion.div>

                </motion.div>

            </div>

            {/* INDICADOR DE ROLAGEM */}
            <motion.div
                className="hero-scroll"
                animate={{ y: [0, 8, 0] }}
                transition={{
                duration: 1.8,
                repeat: Infinity
                }}
            >
                <span></span>
                Explore
            </motion.div>

        </section>
    );
}
