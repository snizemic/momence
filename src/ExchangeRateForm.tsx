import Form from 'antd/es/form';
import InputNumber from 'antd/es/input-number';
import Select from 'antd/es/select';

export function ExchangeRateForm() {
	return (
		<Form layout={'inline'} style={{ width: '100%' }}>
			<Form.Item>For</Form.Item>
			<Form.Item>
				<InputNumber />
			</Form.Item>
			<Form.Item>CZK</Form.Item>
			<Form.Item>you will get</Form.Item>
			<Form.Item>
				<InputNumber readOnly />
			</Form.Item>
			<Form.Item>
				<Select />
			</Form.Item>
		</Form>
	);
}
