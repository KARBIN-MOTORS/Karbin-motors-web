import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
	process.env.GITHUB_BRANCH ||
	process.env.VERCEL_GIT_COMMIT_REF ||
	process.env.HEAD ||
	"main";

export default defineConfig({
	branch,

	// Get this from tina.io
	clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
	// Get this from tina.io
	token: process.env.TINA_TOKEN,

	build: {
		outputFolder: "admin",
		publicFolder: "public",
	},
	// Uncomment to allow cross-origin requests from non-localhost origins
	// during local development (e.g. GitHub Codespaces, Gitpod, Docker).
	// Use 'private' to allow all private-network IPs (WSL2, Docker, etc.)
	// server: {
	//   allowedOrigins: ['https://your-codespace.github.dev'],
	// },
	media: {
		tina: {
			mediaRoot: "",
			publicFolder: "public",
		},
	},
	// See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
	schema: {
		collections: [
			{
				name: "productCategory",
				label: "Categorías de productos",
				path: "content/product-categories",
				format: "json",
				fields: [
					{
						type: "string",
						name: "name",
						label: "Nombre",
						isTitle: true,
						required: true,
					},
					{
						type: "string",
						name: "description",
						label: "Descripción",
						ui: {
							component: "textarea",
						},
					},
					{
						type: "string",
						name: "slug",
						label: "Slug",
						required: true,
					},
				],
			},
			{
				name: "product",
				label: "Productos",
				path: "content/products",
				format: "json",
				fields: [
					{
						type: "string",
						name: "badge",
						label: "Etiqueta",
						options: [
							{
								label: "Nuevo",
								value: "new",
							},
							{
								label: "Destacado",
								value: "featured",
							},
							{
								label: "Últimas unidades",
								value: "last_units",
							},
						],
					},
					{
						type: "string",
						name: "title",
						label: "Nombre del producto",
						required: true,
						isTitle: true,
					},
					{
						type: "string",
						name: "slug",
						label: "Slug",
					},
					{
						type: "string",
						name: "description",
						label: "Descripción",
						ui: {
							component: "textarea",
						},
					},
					{
						type: "image",
						name: "image",
						label: "Imagen",
						required: true,
					},
					{
						type: "string",
						name: "brand",
						label: "Marca",
					},
					{
						type: "number",
						name: "price",
						label: "Precio",
						required: true,
					},
					{
						type: "string",
						name: "currency",
						label: "Moneda",
						required: true,
						options: [
							{
								label: "Soles",
								value: "PEN",
							},
							{
								label: "Dólares",
								value: "USD",
							},
						],
					},
					{
						type: "boolean",
						name: "inStock",
						label: "Disponible en stock",
					},
					{
						type: "reference",
						name: "category",
						label: "Categoría",
						collections: ["productCategory"],
						required: true,
					},
				],
			},
			{
				name: "post",
				label: "Posts",
				path: "content/posts",
				fields: [
					{
						type: "string",
						name: "title",
						label: "Title",
						isTitle: true,
						required: true,
					},
					{
						type: "rich-text",
						name: "body",
						label: "Body",
						isBody: true,
					},
				],
				ui: {
					// This is an DEMO router. You can remove this to fit your site
					router: ({ document }) => `/demo/blog/${document._sys.filename}`,
				},
			},
		],
	},
});
