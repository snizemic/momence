import { QueryClient, QueryClientProvider } from 'react-query';
import { ExchangeRates } from './ExchangeRates';
import { FormStyleOverride } from '../styles/FormStyleOverride';

const queryClient = new QueryClient();

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<FormStyleOverride />
			<ExchangeRates />
		</QueryClientProvider>
	);
}
