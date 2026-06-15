import { Footer } from "@/modules/shared/components/Footer/Footer";
import { Navbar } from "@/modules/shared/components/Navbar/Navbar";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="min-h-screen bg-white font-body text-neutral-800">
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default PublicLayout;
