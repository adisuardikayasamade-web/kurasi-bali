
import { brand } from "@/lib/data";
export default function WAButton({ message, children, className="" }: { message: string; children: React.ReactNode; className?: string }) {
  const url = `https://wa.me/${brand.waNumber}?text=${encodeURIComponent(message)}`;
  return <a href={url} target="_blank" className={className}>{children}</a>
}
