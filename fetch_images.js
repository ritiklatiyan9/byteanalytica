import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projects = [
    { id: 'spylt', url: 'https://spylt-xi.vercel.app/' },
    { id: 'shashwat', url: 'https://main.d243f5h0zm6z96.amplifyapp.com/' },
    { id: 'innovation', url: 'https://www.innovationremedies.com/' },
    { id: 'navbharat', url: 'https://navbharat.vercel.app/' },
    { id: 'andman', url: 'https://www.makeandamantrip.com/' }
];

const downloadImage = async (url, filepath) => {
    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream'
    });
    return new Promise((resolve, reject) => {
        const writer = fs.createWriteStream(filepath);
        response.data.pipe(writer);
        writer.on('finish', resolve);
        writer.on('error', reject);
    });
};

async function fetchImages() {
    for (const project of projects) {
        try {
            console.log(`Fetching ${project.url}...`);
            const { data } = await axios.get(project.url);
            const $ = cheerio.load(data);
            let imageUrl = $('meta[property="og:image"]').attr('content');

            if (!imageUrl) {
                console.log(`No og:image found for ${project.id}.`);
                continue;
            }

            // Handle relative URLs
            if (imageUrl.startsWith('/')) {
                const urlObj = new URL(project.url);
                imageUrl = `${urlObj.protocol}//${urlObj.host}${imageUrl}`;
            }

            console.log(`Found image: ${imageUrl}`);
            const ext = path.extname(new URL(imageUrl).pathname) || '.jpg';
            const filename = `${project.id}${ext}`;
            const filepath = path.resolve(__dirname, 'src/assets/projects', filename);

            await downloadImage(imageUrl, filepath);
            console.log(`Saved to ${filepath}`);
        } catch (error) {
            console.error(`Error processing ${project.id}:`, error.message);
        }
    }
}

fetchImages();
