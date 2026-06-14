import {
	BatteryIcon,
	BrakeIcon,
	CheckIcon,
	EngineIcon,
	HeadsetIcon,
	LightIcon,
	ShieldIcon,
	SuspensionIcon,
	ToolIcon,
	TruckIcon,
} from "@/modules/shared/icons";

export const brands = [
	"Toyota",
	"Hyundai",
	"Kia",
	"Chevrolet",
	"Nissan",
	"Mazda",
	"Suzuki",
	"Mitsubishi",
	"Honda",
	"Ford",
];

export const homeCategories = [
	{
		name: "Repuestos de Motor",
		Icon: EngineIcon,
		count: "320+ productos",
		detail: "Filtros, soportes, bombas y piezas de alto desgaste.",
		image: "/repuestos/10.-_EJE_CARDAN_COMPLETO-removebg-preview (1).png",
	},
	{
		name: "Sistema de Frenos",
		Icon: BrakeIcon,
		count: "180+ productos",
		detail: "Bombas, zapatas, discos, pastillas y accesorios.",
		image: "/repuestos/4-_BOMBA_DE_FRENO_POS-removebg-preview.png",
	},
	{
		name: "Suspensión y Dirección",
		Icon: SuspensionIcon,
		count: "210+ productos",
		detail: "Muelles, bocamazas, amortiguadores y ejes.",
		image: "/repuestos/1-_MUELLE_ROJO_13_HOJAS_DE_LADO-removebg-preview.png",
	},
	{
		name: "Sistema Eléctrico",
		Icon: BatteryIcon,
		count: "260+ productos",
		detail: "Baterías, cargadores, ramales y tableros.",
		image: "/repuestos/18.-CARGADOR_60V_58AH_CONEXIONES-removebg-preview.png",
	},
	{
		name: "Iluminación y Faros",
		Icon: LightIcon,
		count: "145+ productos",
		detail: "Faros LED, posteriores, focos y conexiones.",
		image: "/repuestos/16.-FARO CENTRAL LED PARA CARGUERO (3).png",
	},
	{
		name: "Accesorios y Más",
		Icon: ToolIcon,
		count: "95+ productos",
		detail: "Herramientas, gatas y complementos de mantenimiento.",
		image: "/repuestos/8-_GATA_ROJA-removebg-preview (1).png",
	},
];

export const featuredProducts = [
	{
		badge: "-15%",
		name: "Disco de Freno Ventilado",
		model: "Toyota Hilux 2016-2023",
		price: "S/ 280.00",
		image: "/repuestos/4-_BOMBA_DE_FRENO_POS-removebg-preview.png",
	},
	{
		badge: "Nuevo",
		name: "Amortiguador Delantero",
		model: "Monotubo Kayaba",
		price: "S/ 450.00",
		image: "/repuestos/11.-_SUJETADOR_DEL_RUSTER-removebg-preview.png",
	},
	{
		name: "Batería 12V 60Ah",
		model: "Karbin Motors",
		price: "S/ 380.00",
		image: "/repuestos/18.-CARGADOR_60V_58AH_CONEXIONES-removebg-preview.png",
	},
	{
		name: "Kit de Embrague",
		model: "Hyundai Accent 1.6",
		price: "S/ 320.00",
		image:
			"/repuestos/12.-_CORONA_CENTRAL_CON_RUSTER_1035-removebg-preview.png",
	},
	{
		badge: "-10%",
		name: "Faro Delantero LED",
		model: "Hilux Revo 2021+",
		price: "S/ 1,250.00",
		image: "/repuestos/16.-FARO CENTRAL LED PARA CARGUERO (1).png",
	},
	{
		badge: "-10%",
		name: "Faro Delantero LED 2",
		model: "Hilux Revo 2021+",
		price: "S/ 1,250.00",
		image: "/repuestos/16.-FARO CENTRAL LED PARA CARGUERO (1).png",
	},
];

export const trustItems = [
	{ Icon: TruckIcon, title: "Envíos a todo el Perú", text: "Rápido y seguro" },
	{
		Icon: ShieldIcon,
		title: "Garantía asegurada",
		text: "Todos nuestros productos",
	},
	{
		Icon: HeadsetIcon,
		title: "Soporte especializado",
		text: "Asesoría técnica",
	},
];

export const serviceCards = [
	{
		Icon: TruckIcon,
		title: "Importación directa",
		text: "Repuestos originales y alternativos de calidad",
	},
	{
		Icon: ToolIcon,
		title: "Stock Permanente",
		text: "Miles de productos listos para despacho",
	},
	{
		Icon: ShieldIcon,
		title: "Garantía total",
		text: "Todos nuestros productos cuentan con garantía",
	},
	{
		Icon: CheckIcon,
		title: "Precios Competitivos",
		text: "La mejor relación calidad y precio del mercado",
	},
];

export const stats = [
	["10+", "Años de experiencia"],
	["25K+", "Clientes satisfechos"],
	["50K+", "Productos vendidos"],
	["24/7", "Soporte disponible"],
];
