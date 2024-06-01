import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

function useNextSeoProps() {
  const { asPath } = useRouter();
  const arr = asPath.replace(/[-_]/g, " ").split("/");
  const category = (arr[1][0] !== "#" && arr[1]) || "Lion Guide";
  const rawTitle = arr[arr.length - 1];
  const title =
    /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : "%s";

  return {
    titleTemplate: `${title} - ${
      rawTitle === category
        ? "Documentation"
        : category.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
    }`,
  };
}

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const url = `https://overextended.dev${asPath}`;
  const description = frontMatter.description || "Guide for Mrlions Scripts";

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="lionsproject_logo.ico" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={url} />
    </>
  );
}

const config: DocsThemeConfig = {
  logo: (
    <div
      style={{
        paddingLeft: "50px",
        lineHeight: "38px",
        background:
          "url('https://cdn.discordapp.com/attachments/1178330264263462943/1229136630045081691/lionsproject_logo.png?ex=665c1170&is=665abff0&hm=83c3a6172f3893a7b93b6a372fa6fd8ef6f334758bbba487dd2872e58d0950dc&') no-repeat left",
        backgroundSize: "38px",
        fontWeight: 550,
      }}
    >
      Lion Guide
    </div>
  ),
  project: {
    link: "https://github.com/L0stedMrlion/lion-guide",
  },
  chat: {
    link: "https://discord.gg/dNrayyRZ9j",
  },
  docsRepositoryBase: "https://github.com/L0stedMrlion/lion-guide",
  primaryHue: 59,
  primarySaturation: 80,
  footer: {
    text: "🦁 Mrlion",
  },
  head: useHead,
  useNextSeoProps: useNextSeoProps,
};

export default config;
