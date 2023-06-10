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

export interface FooterPage {
  header: string;
  subTitle: string;
}
