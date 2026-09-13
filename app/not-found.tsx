import Link from "next/link";
import { ArrowIcon } from "@/components/Header";

export default function NotFound() {
  return (
    <section className="not-found container">
      <span className="section-kicker">404 / Page not found</span>
      <h1>This path does not lead to a product.</h1>
      <p>The page may have moved or the address may be incomplete.</p>
      <Link className="button" href="/">Return home <ArrowIcon /></Link>
    </section>
  );
}
