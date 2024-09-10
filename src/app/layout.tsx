import type {Metadata} from "next";
import '../../public/style/nomalizeStyle.css'
import {inter} from "@/constant/font";
import StyledComponentsRegistry from "../../lib/registry";
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeContext from "../components/context/ThemeContext";
import ThemeProvider from "../components/context/ThemeContext";
import UserProvider from "@/components/context/UserContext";


export const metadata: Metadata = {
  title: "Current JS",
  description: "Current JS 에 오신걸 환영합니다",
  icons: {
    icon: "/images/logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ko">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <UserProvider>
              {children}
            </UserProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
