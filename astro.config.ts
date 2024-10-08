import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import DecapCMS from 'astro-decap-cms';
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
    site: SITE.website,
    integrations: [
        tailwind({
            applyBaseStyles: false,
        }),
        react(),
        sitemap(),
        DecapCMS({
            config: {
                backend: {
                    name: "git-gateway",
                    branch: "main"
                },
                media_folder: "src/assets/images",
                public_folder: "src/assets/images",
                collections: [
                    {
                        name: "battle",
                        label: "Battle",
                        folder: "src/content/battles",
                        create: true,
                        fields: [
                            {
                                label: "Author",
                                name: "author",
                                widget: "string",
                                default: "Josh Kalsi"
                            },
                            {
                                label: "Title",
                                name: "title",
                                widget: "string"
                            },
                            {
                                label: "Slug",
                                name: "slug",
                                widget: "string"
                            },
                            {
                                label: "Featured",
                                name: "featured",
                                widget: "boolean",
                                default: false,
                                required: false,
                            },
                            {
                                label: "Draft",
                                name: "draft",
                                widget: "boolean",
                                default: true,
                                required: false,
                            },
                            {
                                label: "Publish Date",
                                name: "pubDatetime",
                                widget: "datetime",
                                default: "{{now}}",
                                format: "YYYY-MM-DDTHH:mm:ssZ"

                            },
                            {
                                label: "Modified Date",
                                name: "modDatetime",
                                widget: "datetime",
                                default: "{{now}}",
                                required: false,
                                format: "YYYY-MM-DDTHH:mm:ssZ"
                            },
                            {
                                label: "tags",
                                name: "tags",
                                widget: "list",
                                summary: "{{fields.tag}}",
                                field: { label: "Tag", name: "tag", widget: "string" },
                            },
                            {
                                label: "Description",
                                name: "description",
                                widget: "text"
                            },
                            {
                                label: "Body",
                                name: "body",
                                widget: "markdown"
                            }
                        ]
                    }
                ]
            },
        }),
    ],
    markdown: {
        remarkPlugins: [
            remarkToc,
            [
                remarkCollapse,
                {
                    test: "Table of contents",
                },
            ],
        ],
        shikiConfig: {
            // For more themes, visit https://shiki.style/themes
            themes: { light: "min-light", dark: "night-owl" },
            wrap: true,
        },
    },
    vite: {
        optimizeDeps: {
            exclude: ["@resvg/resvg-js"],
        },
    },
    scopedStyleStrategy: "where",
});
