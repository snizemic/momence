export type ExchangeRate = {
	country: string;
	currency: string;
	amount: number;
	code: string;
	rate: number;
};

export type ExchangeRates = {
	declaredAt: string | undefined;
	exchangeRates: ExchangeRate[];
};

export async function fetchExchangeRates(): Promise<ExchangeRates> {
	const response = await fetch('/api');

	if (response.status !== 200) {
		throw new Error('Could not fetch data');
	}

	const data = await response.text();
	const lines = data.split('\n');

	const dateLine = lines.shift();

	// remove headers line
	lines.shift();

	const declaredAt = parseDeclaredAt(dateLine);

	// remove last empty line
	lines.pop();

	const exchangeRates = parseExchangeRates(lines);

	return {
		declaredAt,
		exchangeRates,
	};
}

function parseDeclaredAt(dateLine: string | undefined): string | undefined {
	if (!dateLine) {
		return undefined;
	}

	const sequenceNumberIndex = dateLine.indexOf('#');
	const datePart = dateLine.substring(0, sequenceNumberIndex).trim();
	return datePart;
}

function parseExchangeRates(lines: string[]): ExchangeRate[] {
	return lines.map(line => {
		const lineItems = line.split('|');

		return {
			country: lineItems[0],
			currency: lineItems[1],
			amount: Number(lineItems[2]),
			code: lineItems[3],
			rate: Number(lineItems[4]),
		};
	});
}
