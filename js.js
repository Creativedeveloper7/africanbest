// Import both fetchProducts and supabase client
import { fetchProducts, supabase } from './supabase.js';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Fetch data from Supabase
        const products = await fetchProducts();
        
        if (!products) {
            console.error('No products returned from Supabase');
            return;
        }

        console.log('Fetched products:', products);

        // Hero Section Toggle
        const heroSection = document.getElementById('hero2');
        if (heroSection) {
            const toggleButton = document.createElement('button');
            toggleButton.textContent = 'Toggle Section Visibility';
            toggleButton.classList.add('toggle-button');
            document.body.insertBefore(toggleButton, heroSection);

            toggleButton.addEventListener('click', () => {
                heroSection.style.display = 
                    heroSection.style.display === 'none' ? 'block' : 'none';
            });
        }

        // Video Player
        const video = document.querySelector('video');
        if (video) {
            video.addEventListener('click', () => {
                if (video.paused) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        }

        // Read More/Less Functionality
        const moreText = document.getElementById('more-text');
        const readMoreBtn = document.getElementById('readMoreBtn');
        
        if (readMoreBtn && moreText) {
            readMoreBtn.addEventListener('click', (e) => {
                e.preventDefault();
                moreText.classList.toggle('hidden');
                readMoreBtn.textContent = 
                    moreText.classList.contains('hidden') ? 'Read More' : 'Read Less';
            });
        }

        // Background Video Switcher
        const videos = document.querySelectorAll('.bg-video');
        if (videos.length > 0) {
            let currentVideo = 0;
            
            function switchVideo() {
                videos[currentVideo].classList.remove('active');
                currentVideo = (currentVideo + 1) % videos.length;
                videos[currentVideo].classList.add('active');
            }

            setInterval(switchVideo, 5000);
        }

    } catch (error) {
        console.error('Error in initialization:', error);
    }
});
// Example for Node.js express server
app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/public/css'));