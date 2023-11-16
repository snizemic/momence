import { ColumnsType } from 'antd/es/table';
import { ExchangeRate } from '../utils/fetchExchangeRates';

export function getColumns(): ColumnsType<ExchangeRate> {
	return [
		{
			title: 'Code',
			dataIndex: 'code',
			key: 'code',
			sorter: (a, b) => a.code.localeCompare(b.code),
		},
		{
			title: 'Country',
			dataIndex: 'country',
			key: 'country',
			sorter: (a, b) => a.country.localeCompare(b.country),
		},
		{
			title: 'Currency',
			dataIndex: 'currency',
			key: 'currency',
			sorter: (a, b) => a.currency.localeCompare(b.currency),
		},
		{
			title: 'Amount',
			dataIndex: 'amount',
			key: 'amount',
		},
		{
			title: 'Rate',
			dataIndex: 'rate',
			key: 'rate',
		},
	];
}

export function getDataSource(exchangeRates: ExchangeRate[] | undefined): (ExchangeRate & { key: string })[] {
	return exchangeRates ? exchangeRates.map(rate => ({ ...rate, key: rate.code })) : [];
}
