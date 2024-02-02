import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

export default function Index() {
	const t = useTranslations('Index');
	return (
		<main className="flex flex-col gap-y-4 p-16">
			<h1>{t('title')}</h1>
			<Link href={'/'} locale="es">
				Cambiar a español
			</Link>
			<Link href={'/'} locale="en">
				Switch to English
			</Link>
		</main>
	);
}
