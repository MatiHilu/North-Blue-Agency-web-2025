import { Button, type ButtonProps } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface WhatsAppCTAProps extends Omit<ButtonProps, "asChild"> {
  message?: string;
}

export default function WhatsAppCTA({
  message,
  children,
  ...props
}: WhatsAppCTAProps) {
  return (
    <Button asChild {...props}>
      <a
        href={buildWhatsAppUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </Button>
  );
}
