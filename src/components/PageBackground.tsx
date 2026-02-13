import { motion } from "framer-motion";

const PageBackground = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
            <motion.div
                className="absolute top-[10%] left-[5%] w-72 h-72 bg-primary/5 rounded-full blur-3xl"
                animate={{
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-[20%] right-[5%] w-96 h-96 bg-primary/3 rounded-full blur-3xl"
                animate={{
                    x: [0, -30, 0],
                    y: [0, 20, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-[40%] right-[10%] w-64 h-64 bg-accent/5 rounded-full blur-3xl"
                animate={{
                    x: [0, 20, 0],
                    y: [0, 40, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
};

export default PageBackground;
