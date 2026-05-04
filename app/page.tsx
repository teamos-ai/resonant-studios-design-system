import { redirect } from "next/navigation";

/**
 * The repo is a design-system project. The styleguide lives at
 * `/design-system`; root just bounces visitors there so anyone who
 * lands at the bare domain sees the system rather than a 404.
 */
export default function Home() {
  redirect("/design-system");
}
