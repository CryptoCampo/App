import React from "react";
import { useRouter } from "next/router";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "./header.module.scss";
import logoHome from '../../public/icons/logoHome.png'
import { Layout, Image, Menu } from "antd";
import { AppleOutlined } from "@ant-design/icons";
const { Header: HeaderAntd } = Layout;



export const Header = () => {
  const router = useRouter();

  return (
    <HeaderAntd
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor:
          router.asPath === "/campo"
            ? "rgba(0,128,0,1)"
            : "rgba(28, 122, 28, 0.7)",
      }}
      
    >
      <div>
        
        <Image
         
            style={{
            color: "white",
            fontSize: "25px",
            marginRight: "430px",
          }}
        /> 
        <a className={styles.navLink} href="/campo">
          Nosotros
        </a>
        <a className={styles.navLink} href="/collector">
          Whitepapper
        </a>
        <a className={styles.navLink} href="/collector">
          Inverti
        </a>
        <a className={styles.navLink} href="/collector">
          Marketplace
        </a>
        <a className={styles.navLink} href="/collector">
          Mis Inversiones
        </a>
      </div>
      <div className={styles.offSide}>
        <ConnectButton className={styles.button} />
      </div>
    </HeaderAntd>
  );
};
