import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ExchangeRates } from './ExchangeRates';

const queryClient = new QueryClient();

export function App() {
	console.log('render App');
	return (
		<QueryClientProvider client={queryClient}>
			<ExchangeRates />
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}
