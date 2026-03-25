import SeekYourSeniors from "./SeekYourSeniors";

export const metadata = {
  title: "Seek Your Seniors",
  description:
    "Meet the Class of 2029 — club presidents, senior video guides, and student-built projects at Vedam School of Technology.",
  keywords: ["seniors", "club presidents", "student projects", "Vedam seniors", "seek your seniors"],
  openGraph: {
    title: "Seek Your Seniors | Vedam School of Technology",
    description: "Connect with the Class of 2029 — club heads, student videos, and showcase projects.",
    url: "https://vedam.org/seniors",
  },
};

export default function Page() {
  return <SeekYourSeniors />;
}
