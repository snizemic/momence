import { useQuery } from 'react-query';

export function ExchangeRates() {
	const { isLoading, error, data } = useQuery('exchangeRates', async () => {
		const response = await fetch('/api');

		if (response.status !== 200) {
			throw new Error('Network response was not ok');
		}

		const data = await response.text();
		const lines = data.split('\n');
		lines.shift();
		console.log(lines.map(line => line.split('|')));

		return data;
	});

	if (isLoading) return <div>Loading...</div>;

	if (error) return <div>Something went wrong</div>;

	return <div>{data}</div>;
}
