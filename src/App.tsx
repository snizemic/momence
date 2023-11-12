import { QueryClient, QueryClientProvider } from 'react-query';
import { ExchangeRates } from './ExchangeRates';

const queryClient = new QueryClient();

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ExchangeRates />
		</QueryClientProvider>
	);
}
