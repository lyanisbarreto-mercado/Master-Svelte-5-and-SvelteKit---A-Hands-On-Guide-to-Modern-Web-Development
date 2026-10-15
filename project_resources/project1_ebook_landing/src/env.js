/** @format */

import { defineEnvVars } from "@sveltejs/kit/env";

export const variables = defineEnvVars({
	PUBLIC_STRIPE_KEY: {
		public: true,
	},
	STRIPE_API_KEY: {
		public: false,
	},
	PRICE_ID: {
		public: false,
	},
	PUBLIC_FRONTEND_URL: {
		public: true,
	},
});
