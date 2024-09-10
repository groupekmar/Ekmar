import React from "react";
import "@/app/global.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import Header from "@comp/Header/Header";
import Footer from "@comp/Footer/Footer";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ekmar Group",
  description: "Ekmar Group Website",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${nunito.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
