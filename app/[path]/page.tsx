import ClientApp from "@/components/client/ClientApp";
import ServerApp from "@/components/server/ServerApp";
import * as nav from "next/navigation";
export default function RSC({ params }: { params: { path: string } }) {
	return (
		<>
			<header className="flex items-center justify-center m-auto bg-slate-800">
				This is a {params.path} layout
			</header>
			<main className="flex min-h-screen flex-col items-center justify-between ">
				{params.path === "RSC" ? <ServerApp /> : <ClientApp />}
			</main>
		</>
	);
}

export async function generateStaticParams() {
	return ["RFC", "SPA"].map(page => ({
		slug: page,
	}));
}
