import { sveltekit } from "@sveltejs/kit/vite"
import autoImport from "sveltekit-autoimport"

export default {
	plugins: [
		autoImport({
			components: ["./src/components"],
		}),
		sveltekit(),
	],
}
