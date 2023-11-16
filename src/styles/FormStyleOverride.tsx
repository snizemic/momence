import { createGlobalStyle } from 'styled-components';

export const FormStyleOverride = createGlobalStyle`
	.ant-form.ant-form-inline {
		.ant-form-item {
			flex: 1 1 auto;

			&:nth-child(2),
			&:nth-child(5) {
				.ant-input-number.ant-input-number-in-form-item {
					width: 100%;
	
					.ant-input-number-input-wrap input {
						text-align: right;
					}
				}
			}

			&:nth-child(6) {
				min-width: 150px;
			}
		}
	}
`;
