import Head from 'next/head';
import PopularSights from '../components/PopularSights';
import PopularTags from '../components/PopularTags';
import Categories from '../components/Categories';
import FeaturedNews from '../components/FeaturedNews';
import CBCNews from "./pages/CBCNews";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Newsfeed App</title>
                <meta name="description" content="Your newsfeed app description" />
            </Head>

            <main>
                <h1>Welcome to the Newsfeed App</h1>

                <PopularSights />
                <CBCNews />
                <PopularTags />
                <Categories />
                <FeaturedNews />
            </main>

            <footer>
                {/* Add your footer content */}
            </footer>
        </div>
    );
}
