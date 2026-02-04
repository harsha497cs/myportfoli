import React, { useRef, useEffect } from 'react';

interface AntigravityProps {
    className?: string; // Add className prop for flexibility
}

const Antigravity: React.FC<AntigravityProps> = ({ className }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const particleCount = 100;
        const items = ["Java", "Spring", "React", "Cloud", "Code", "Dev"]; // Floating text or shapes

        const mouse = {
            x: -1000,
            y: -1000,
            radius: 150,
        };

        class Particle {
            x: number;
            y: number;
            dx: number;
            dy: number;
            size: number;
            color: string;
            text?: string;

            constructor(x: number, y: number, text?: string) {
                this.x = x;
                this.y = y;
                this.dx = (Math.random() - 0.5) * 2;
                this.dy = (Math.random() - 0.5) * 2;
                this.size = Math.random() * 3 + 1;
                this.color = `rgba(59, 130, 246, ${Math.random() * 0.5 + 0.1})`; // Blueish
                this.text = text;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                if (this.text) {
                    ctx.font = '12px Inter';
                    ctx.fillStyle = this.color;
                    ctx.fillText(this.text, this.x, this.y);
                } else {
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fillStyle = this.color;
                    ctx.fill();
                }
            }

            update() {
                if (this.x > canvas!.width || this.x < 0) this.dx = -this.dx;
                if (this.y > canvas!.height || this.y < 0) this.dy = -this.dy;

                // Mouse interaction (Antigravity / Repulsion)
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (mouse.radius - distance) / mouse.radius;
                    const directionX = forceDirectionX * force * 5;
                    const directionY = forceDirectionY * force * 5;

                    this.x -= directionX;
                    this.y -= directionY;
                }

                this.x += this.dx;
                this.y += this.dy;

                this.draw();
            }
        }

        const init = () => {
            particles = [];
            const { innerWidth, innerHeight } = window;
            canvas.width = innerWidth;
            canvas.height = innerHeight;

            for (let i = 0; i < particleCount; i++) {
                const x = Math.random() * innerWidth;
                const y = Math.random() * innerHeight;
                const text = i % 10 === 0 ? items[Math.floor(Math.random() * items.length)] : undefined;
                particles.push(new Particle(x, y, text));
            }
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle) => particle.update());
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            init();
        }
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.x;
            mouse.y = e.y;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        init();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className={`fixed top-0 left-0 -z-10 w-full h-full bg-black ${className}`} />;
};

export default Antigravity;
