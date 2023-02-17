import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { Button } from '@/stories/Button';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.main}>
				<h1>Button variation</h1>
				<hr />
				<div className={styles.block}>
					<Button label='Primary button' primary />
					<Button label='Primary button' secondary size='large' />
				</div>
			</main>
		</>
	);
}
