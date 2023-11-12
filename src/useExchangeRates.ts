import { useQuery } from 'react-query';
import { ExchangeRates, fetchExchangeRates } from './fetchExchangeRates';

export function useExchangeRates() {
	const query = useQuery<ExchangeRates, Error>('exchangeRates', fetchExchangeRates);
	return query;
}
