import Table from 'antd/es/table';
import { Content } from 'antd/es/layout/layout';
import Alert from 'antd/es/alert/Alert';
import Row from 'antd/es/grid/row';
import Col from 'antd/es/grid/col';
import { useExchangeRates } from './useExchangeRates';
import { getColumns, getDataSource } from './exchangeRatesUtils';
import { Layout } from './Layout';
import { ExchangeRateForm } from './ExchangeRateForm';

export function ExchangeRates() {
	const { isLoading, error, data } = useExchangeRates();

	const { declaredAt, exchangeRates } = data || {};
	const columns = getColumns();
	const dataSource = getDataSource(exchangeRates);

	return (
		<Layout>
			<Content>
				<Row gutter={[0, 24]}>
					{error && (
						<Col span={24}>
							<Alert type={'error'} message={error.message} />
						</Col>
					)}
					<Col span={24}>
						<ExchangeRateForm />
					</Col>
					{declaredAt && <Col span={24}>The displayed exchange rates are valid for {declaredAt}</Col>}
					<Col span={24}>
						<Table loading={isLoading} columns={columns} dataSource={dataSource} pagination={false} />
					</Col>
				</Row>
			</Content>
		</Layout>
	);
}
