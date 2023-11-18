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

			@media screen and (max-width: 767px) {
				&:nth-child(1),
				&:nth-child(4) {
					width: 100%;
				}

				&:nth-child(2),
				&:nth-child(5) {
					width: 50%;
				}

				&:nth-child(3),
				&:nth-child(6) {
					width: calc(50% - 16px);
					margin-right: 0;
					min-width: unset;
				}
			}
		}
	}
`;
