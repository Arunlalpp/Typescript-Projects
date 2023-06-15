import { ReactNode } from "react";

export interface WhatsappCard {
  header: string;
  title: string;
  description: string;
  imageURL: string;
}

export interface Homepage {
  headerText: string;
  description: string;
  mainTitle: string;
  subTitle: string;
  subTitle2: string;
}

export interface Contents {
  text: string;
  link: string;
}

export interface FooterPage {
  contents: Contents[];
  title: string;
}
