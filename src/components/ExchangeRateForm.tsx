import { useCallback, useEffect, useMemo } from 'react';
import Form from 'antd/es/form';
import InputNumber from 'antd/es/input-number';
import Select from 'antd/es/select';
import { useForm } from 'antd/es/form/Form';
import { ExchangeRate } from '../utils/fetchExchangeRates';

interface ExchangeRateFormProps {
	exchangeRates: ExchangeRate[] | undefined;
}

type ExchangeRateFormValues = {
	code?: ExchangeRate['code'];
	czk?: number;
	result?: number;
};

export function ExchangeRateForm({ exchangeRates }: ExchangeRateFormProps) {
	const [form] = useForm<ExchangeRateFormValues>();

	const codeOptions = useMemo(
		() => {
			return exchangeRates?.map(exchangeRate => ({
				label: `${exchangeRate.code} - ${exchangeRate.currency}`,
				value: exchangeRate.code,
			}));
		},
		[exchangeRates], // prettier-ignore
	);

	const handleValuesChange = useCallback(
		(_changedValues: ExchangeRateFormValues, values: ExchangeRateFormValues) => {
			if (values.czk && values.code) {
				const exchangeRate = exchangeRates?.find(exchangeRate => exchangeRate.code === values.code);
				const { rate, amount } = exchangeRate || {};

				if (rate && amount) {
					form.setFieldValue('result', ((values.czk / rate) * amount).toFixed(3));
				}
			} else {
				form.setFieldValue('result', undefined);
			}
		},
		[form, exchangeRates],
	);

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
		<Form form={form} layout={'inline'} style={{ width: '100%' }} onValuesChange={handleValuesChange}>
			<Form.Item>For</Form.Item>
			<Form.Item name={'czk'}>
				<InputNumber controls={false} />
			</Form.Item>
			<Form.Item>CZK</Form.Item>
			<Form.Item>you will get</Form.Item>
			<Form.Item name={'result'}>
				<InputNumber readOnly />
			</Form.Item>
			<Form.Item name={'code'}>
				<Select showSearch optionFilterProp={'label'} options={codeOptions} />
			</Form.Item>
		</Form>
	);
}
