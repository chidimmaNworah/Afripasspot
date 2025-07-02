import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function Links() {
  return (
    <div className={styles.footer__links}>
      {links.map((link, i) => (
        <ul key={link.heading}>
          {i === 0 ? <b>AFRIPASSPOT</b> : <b>{link.heading}</b>}
          {link.links.map((link) => (
            <li key={link.name}>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

const links = [
  {
    heading: "GREEN THUMB",
    links: [
      {
        name: "About us",
        link: "/about-us",
      },
      {
        name: "Contact us",
        link: "/contact-us",
      },
      {
        name: "Sitemap",
        link: "/sitemap",
      },
      {
        name: "Help Center",
        link: "/help-center",
      },
    ],
  },
  {
    heading: "HELP",
    links: [
      {
        name: "FAQ",
        link: "",
      },
      {
        name: "Restaurants",
        link: "",
      },
      {
        name: "Preparation Guide",
        link: "",
      },
      {
        name: "Recepies",
        link: "",
      },
      {
        name: "Search by country",
        link: "",
      },
    ],
  },
  {
    heading: "SUPPORT",
    links: [
      {
        name: "Customer service",
        link: "",
      },
      {
        name: "Terms and Conditions",
        link: "",
      },
      {
        name: "Consumers (Transactions)",
        link: "",
      },
      {
        name: "Take our feedback survey",
        link: "",
      },
    ],
  },
];
