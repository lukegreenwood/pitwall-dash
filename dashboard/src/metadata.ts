import type { Metadata } from "next";

const title = "Pitwall Dash | Live race timing";
const description =
	"Live telemetry and timing data for race weekends. Leaderboards, tyre choices, gaps, lap times, sector times, team radios, and more.";

const url = "https://pitwalldash.com";

export const metadata: Metadata = {
	generator: "Next.js",

	applicationName: title,

	title,
	description,

	icons: `${url}/favicon.png`,

	openGraph: {
		title,
		description,
		url,
		type: "website",
		siteName: "Pitwall Dash",
		images: [
			{
				alt: "Pitwall Dash - real-time race telemetry and timing",
				url: `${url}/og-image.png`,
				width: 1200,
				height: 630,
			},
		],
	},

	twitter: {
		title,
		description,
		card: "summary_large_image",
		images: [
			{
				url: `${url}/twitter-image.png`,
				alt: "Pitwall Dash - real-time race telemetry and timing",
				width: 1200,
				height: 630,
			},
		],
	},

	category: "Sports & Recreation",

	referrer: "strict-origin-when-cross-origin",

	keywords: ["race dashboard", "live timing", "realtime telemetry", "motorsport timing", "live updates"],

	creator: "Luke Greenwood",
	publisher: "Luke Greenwood",
	authors: [{ name: "Slowlydev", url: "https://slowly.dev" }],

	appleWebApp: {
		capable: true,
		title: "Pitwall Dash",
		statusBarStyle: "black-translucent",
	},

	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},

	metadataBase: new URL(url),

	alternates: {
		canonical: url,
	},

	manifest: "/manifest.json",
};
