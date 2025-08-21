import { useTranslation } from "react-i18next";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: t('about'), href: '/about' },
        { name: t('contact'), href: '/contact' },
        { name: "Careers", href: '/careers' },
        { name: "Press", href: '/press' },
      ]
    },
    {
      title: "Support",
      links: [
        { name: t('faqs'), href: '/faqs' },
        { name: "Help Center", href: '/help' },
        { name: "Shipping Info", href: '/shipping' },
        { name: "Returns", href: '/returns' },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: t('privacyPolicy'), href: '/privacy' },
        { name: t('termsOfService'), href: '/terms' },
        { name: "Cookie Policy", href: '/cookies' },
        { name: "Vendor Terms", href: '/vendor-terms' },
      ]
    }
  ];

  return (
    <footer className="bg-muted mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              WENZE TII NDAKU
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Your premier multi-vendor marketplace connecting you with the best local and international vendors across Africa and beyond.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>support@wenzetiindaku.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Marketplace St, Commerce City</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4 text-foreground">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 WENZE TII NDAKU. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}