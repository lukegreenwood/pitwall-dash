import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/Button";
import ScrollHint from "@/components/ScrollHint";

import icon from "public/tag-logo.svg";

export default function Home() {
	return (
		<div>
			<section className="flex h-screen w-full flex-col items-center pt-20 sm:justify-center sm:pt-0">
				<Image src={icon} alt="Pitwall Dash logo" width={300} />

				<h1 className="my-20 text-center text-5xl font-bold">
					Real-time race <br />
					telemetry and timing
				</h1>

				<div className="flex flex-wrap gap-4">
					<Link href="/dashboard">
						<Button className="rounded-xl! border-2 border-transparent p-4 font-medium">Go to Dashboard</Button>
					</Link>

					<Link href="/schedule">
						<Button className="rounded-xl! border-2 border-zinc-700 bg-transparent! p-4 font-medium">
							Check Schedule
						</Button>
					</Link>
				</div>

				<ScrollHint />
			</section>

			<section className="pb-20">
				<h2 className="mb-4 text-2xl">What&apos;s Pitwall Dash?</h2>

				<p className="text-md">
					Pitwall Dash is a real-time telemetry and timing dashboard for race weekends. It shows the live timing feed,
					including lap times, sector times, the gaps between drivers, their tyre choices and much more.
				</p>
			</section>

			<section className="pb-20">
				<h2 className="mb-4 text-2xl">What happened to the position data & car metrics?</h2>

				<p className="text-md">
					Positional and car data are no longer publicly available in the live timing feed, so they are not shown here.
				</p>

				<p className="text-md">
					Car positions on track are approximated from mini sectors instead. This is less accurate than the old
					positional data, but still gives a good indication of where the cars are on track.
				</p>
			</section>

			<section className="pb-20">
				<h2 className="mb-4 text-2xl">Credits & source code</h2>

				<p className="text-md">
					Pitwall Dash is built on{" "}
					<a className="text-blue-500" target="_blank" href="https://github.com/slowlydev/f1-dash">
						f1-dash
					</a>{" "}
					by{" "}
					<a className="text-blue-500" target="_blank" href="https://slowly.dev">
						Slowly
					</a>
					, licensed under the GNU AGPL v3. The source code for this version is available on{" "}
					<a className="text-blue-500" target="_blank" href="https://github.com/lukegreenwood/pitwall-dash">
						GitHub
					</a>
					.
				</p>
			</section>
		</div>
	);
}
