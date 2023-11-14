import { useEffect } from 'react';
import Form from 'antd/es/form';
import InputNumber from 'antd/es/input-number';
import Select from 'antd/es/select';
import { useForm } from 'antd/es/form/Form';
import { ExchangeRate } from './fetchExchangeRates';

interface ExchangeRateFormProps {
	exchangeRates: ExchangeRate[] | undefined;
}

export function ExchangeRateForm({ exchangeRates }: ExchangeRateFormProps) {
	const [form] = useForm<{ code?: string; czk?: number; result?: number }>();

	useEffect(
		() => {
			if (exchangeRates) {
				// set form initial value
				form.setFieldValue('code', exchangeRates.find(exchangeRate => exchangeRate.code === 'EUR')?.code);
			}
		},
		[form, exchangeRates], // prettier-ignore
	);

	return (
		<Form
			form={form}
			layout={'inline'}
			style={{ width: '100%' }}
			onValuesChange={(_changedValues, values) => {
				if (values.czk && values.code) {
					const exchangeRate = exchangeRates?.find(exchangeRate => exchangeRate.code === values.code);
					const { rate, amount } = exchangeRate || {};

					if (rate && amount) {
						form.setFieldValue('result', ((values.czk / rate) * amount).toFixed(3));
					}
				} else {
					form.setFieldValue('result', undefined);
				}
			}}
		>
			<Form.Item>For</Form.Item>
			<Form.Item name={'czk'}>
				<InputNumber />
			</Form.Item>
			<Form.Item>CZK</Form.Item>
			<Form.Item>you will get</Form.Item>
			<Form.Item name={'result'}>
				<InputNumber readOnly />
			</Form.Item>
			<Form.Item name={'code'}>
				<Select
					style={{ width: '200px' }}
					options={exchangeRates?.map(exchangeRate => ({
						label: `${exchangeRate.code} - ${exchangeRate.currency}`,
						value: exchangeRate.code,
					}))}
				/>
			</Form.Item>
		</Form>
	);
}
