        gsap.timeline()
            .to("#intro-text", {
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            })
            .to("#intro-subtext", {
                opacity: 1,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.3")
            .to("#intro-overlay", {
                opacity: 0,
                duration: 1,
                delay: 1.5,
                onComplete: () => {
                    document.getElementById("intro-overlay").style.display = "none";
                }
            })
            .to("#main-content", {
                opacity: 1,
                duration: 1
            });

        const floatingContainer = document.getElementById('floating-container');
        const emojis = ['💕', '💖', '✨', '⭐', '🎈', '🎀', '🌸', '💝'];
        
        for (let i = 0; i < 15; i++) {
            const element = document.createElement('div');
            element.className = 'floating-element text-4xl';
            element.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            element.style.left = Math.random() * 100 + '%';
            element.style.top = Math.random() * 100 + '%';
            floatingContainer.appendChild(element);
            
            gsap.to(element, {
                y: '+=50',
                x: '+=30',
                rotation: 360,
                duration: 3 + Math.random() * 3,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            });
        }

        let surpriseClicked = false;
        const surpriseBtn = document.getElementById('surprise-btn');
        const cardMessage = document.getElementById('card-message');
        
        surpriseBtn.addEventListener('click', () => {
            if (!surpriseClicked) {
                surpriseClicked = true;
                
                
                gsap.to(cardMessage, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        cardMessage.textContent = "Kamu luar biasa! Teruslah menjadi dirimu yang menakjubkan. Aku sangat bersyukur memilikimu dalam hidupku! 🌟💫";
                        gsap.to(cardMessage, {opacity: 1, duration: 0.5});
                    }
                });
                
            
                for (let i = 0; i < 50; i++) {
                    setTimeout(() => {
                        const confetti = document.createElement('div');
                        confetti.className = 'confetti';
                        const colors = ['#ec4899', '#a855f7', '#fbbf24', '#f472b6'];
                        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                        confetti.style.left = Math.random() * window.innerWidth + 'px';
                        confetti.style.top = '-20px';
                        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
                        document.body.appendChild(confetti);
                        
                        gsap.to(confetti, {
                            y: window.innerHeight + 100,
                            x: (Math.random() - 0.5) * 400,
                            rotation: Math.random() * 360,
                            duration: 2 + Math.random() * 2,
                            ease: "power1.in",
                            onComplete: () => confetti.remove()
                        });
                    }, i * 30);
                }
                
                
                surpriseBtn.textContent = "Yeay! 🎉";
                gsap.to(surpriseBtn, {
                    scale: 1.2,
                    duration: 0.3,
                    yoyo: true,
                    repeat: 1
                });
            }
        });


        function updateClock() {
            let today = new Date();
            let hari = today.getDate();
            let bulan = today.getMonth() + 1;
            let tahun = today.getFullYear();
            let h = today.getHours();
            let m = today.getMinutes();
            let s = today.getSeconds();
            m = checkTime(m);
            document.getElementById('clock-date').innerHTML =  hari + "/" + bulan + "/" + tahun + " " + h + ":" + m + ":" + s;
            setTimeout(updateClock, 1000);
        }
        
        function checkTime(i) {
            if (i < 10) {i = "0" + i}
            return i;
        }

        window.addEventListener('DOMContentLoaded', updateClock);