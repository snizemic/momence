import { useQuery } from 'react-query';
import { ExchangeRates, fetchExchangeRates } from '../utils/fetchExchangeRates';

export function useExchangeRates() {
	const query = useQuery<ExchangeRates, Error>('exchangeRates', fetchExchangeRates);
	return query;
}
